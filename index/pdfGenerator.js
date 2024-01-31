import launch from 'tiny-puppeteer'

export default async (url, path, format = 'Letter') => {
	const browser = await launch()

	, page = await browser.newPage()

	await page.goto(url)

	await page.pdf({path, format})

	browser.close()
}