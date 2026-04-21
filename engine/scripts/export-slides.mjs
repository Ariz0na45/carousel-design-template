import puppeteer from 'puppeteer'
import { mkdir } from 'fs/promises'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = resolve(__dirname, '..', '..', '..', '..', '..')
const DEV_URL = process.env.DEV_URL || 'http://localhost:5181'

const slug = process.argv[2] || 'untitled'
const today = new Date().toISOString().split('T')[0]
const OUTPUT_DIR = resolve(PROJECT_ROOT, 'output', 'carousel-design', `${today}-${slug}`)

async function exportSlides() {
  await mkdir(OUTPUT_DIR, { recursive: true })

  console.log('Launching browser...')
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 1200, height: 1500, deviceScaleFactor: 2 })

  console.log(`Loading ${DEV_URL}...`)
  await page.goto(DEV_URL, { waitUntil: 'networkidle0', timeout: 30000 })
  await page.waitForSelector('#carousel-slide', { timeout: 10000 })
  await new Promise(r => setTimeout(r, 2000))

  const slideCount = await page.$$eval('#carousel-slide', els => els.length)
  console.log(`Found ${slideCount} slide(s)`)

  for (let i = 0; i < slideCount; i++) {
    const filename = `slide-${i + 1}.png`
    const filepath = resolve(OUTPUT_DIR, filename)

    // Hide all except current slide
    await page.evaluate((idx) => {
      document.querySelectorAll('#carousel-slide').forEach((s, j) => {
        s.style.display = j === idx ? 'block' : 'none'
      })
      const w = document.querySelector('#carousel-slide')?.parentElement
      if (w) { w.style.padding = '0'; w.style.gap = '0'; w.style.margin = '0' }
      window.scrollTo(0, 0)
    }, i)

    await new Promise(r => setTimeout(r, 1000))

    const slideEl = (await page.$$('#carousel-slide'))[i]
    await slideEl.screenshot({ path: filepath, type: 'png' })

    console.log(`✓ Exported ${filename}`)
  }

  await browser.close()
  console.log(`\nDone! ${slideCount} slides exported to:\n${OUTPUT_DIR}`)
}

exportSlides().catch(err => {
  console.error('Export failed:', err)
  process.exit(1)
})
