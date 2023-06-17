import launch from 'tiny-puppeteer'

var browser, page

, execution = (async () => {
	browser = await launch()
	page = await browser.newPage()
})()

export const close = () => browser.close()

, get = (url, format = 'Letter') =>
	execution = (async () => {
		await execution

		await page.goto(url)

		return page.pdf({format})
	})()