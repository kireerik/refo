import svg from '@svg'

const importSvg = name => svg(import(`./${name}.svg?raw`))

export const
	LinkedIn        = await importSvg('LinkedIn')
	, GitHub        = await importSvg('GitHub')
	, StackOverflow = await importSvg('StackOverflow')
	, Medium        = await importSvg('Medium')