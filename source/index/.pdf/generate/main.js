import findChrome from 'chrome-finder'

import {launch} from 'puppeteer-core'

const executablePath = findChrome()

export default async (url, path, format = 'Letter') => {
	const browser = await launch({executablePath})

	, page = await browser.newPage()

	await page.goto(url)

	await page.pdf({path, format})

	browser.close()
}