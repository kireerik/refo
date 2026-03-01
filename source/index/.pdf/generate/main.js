import findChrome from 'chrome-finder'

import {launch} from 'puppeteer-core'

export default async (url, path, format = 'Letter') => {
	let executablePath

	try {
		executablePath = findChrome()
	} catch {
		return
	}

	const browser = await launch({executablePath})

	, page = await browser.newPage()

	await page.goto(url)

	await page.pdf({path, format})

	browser.close()
}
