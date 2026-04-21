import sharp from 'sharp'
import { readdir } from 'fs/promises'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUBLIC = resolve(__dirname, '..', 'public')
const TARGET_W = 1080
const TARGET_H = 1350

async function cropBackgrounds() {
  const files = await readdir(PUBLIC)
  const bgFiles = files.filter(f => f.startsWith('bg-') && f.endsWith('.jpg'))

  console.log(`Found ${bgFiles.length} background images to crop to ${TARGET_W}x${TARGET_H}`)

  for (const file of bgFiles) {
    const filepath = resolve(PUBLIC, file)
    const img = sharp(filepath)
    const meta = await img.metadata()

    console.log(`\n${file}: ${meta.width}x${meta.height}`)

    // Calculate crop — center crop to 4:5 aspect ratio
    const srcRatio = meta.width / meta.height
    const targetRatio = TARGET_W / TARGET_H // 0.8

    let cropW, cropH, cropX, cropY

    if (srcRatio > targetRatio) {
      // Image is wider — crop sides, keep full height
      cropH = meta.height
      cropW = Math.round(meta.height * targetRatio)
      cropX = Math.round((meta.width - cropW) / 2)
      cropY = 0
    } else {
      // Image is taller — crop top/bottom, keep full width
      cropW = meta.width
      cropH = Math.round(meta.width / targetRatio)
      cropX = 0
      cropY = Math.round((meta.height - cropH) / 2)
    }

    console.log(`  Crop: ${cropW}x${cropH} from (${cropX}, ${cropY})`)
    console.log(`  Resize: ${TARGET_W}x${TARGET_H}`)

    await sharp(filepath)
      .extract({ left: cropX, top: cropY, width: cropW, height: cropH })
      .resize(TARGET_W, TARGET_H, { fit: 'fill' })
      .jpeg({ quality: 95 })
      .toFile(filepath.replace('.jpg', '-cropped.jpg'))

    // Replace original with cropped version
    const { rename } = await import('fs/promises')
    await rename(filepath.replace('.jpg', '-cropped.jpg'), filepath)

    console.log(`  ✓ ${file} cropped and replaced`)
  }

  console.log('\nDone! All backgrounds are now 1080x1350.')
}

cropBackgrounds().catch(console.error)
