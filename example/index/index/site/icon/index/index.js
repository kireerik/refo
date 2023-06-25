const importSvg = name => import(`./${name}.svg?raw`)

export const
	LinkedIn        = importSvg('LinkedIn')
	, GitHub        = importSvg('GitHub')
	, StackOverflow = importSvg('StackOverflow')
	, Medium        = importSvg('Medium')