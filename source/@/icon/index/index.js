import template from '#@SolidJS/template.js'

import LinkedInSource from './LinkedIn.svg?raw'
import GitHubSource from './GitHub.svg?raw'
import StackOverflowSource from './StackOverflow.svg?raw'
import MediumSource from './Medium.svg?raw'

const svg = '<svg'
, namespace = svg + ' xmlns="http://www.w3.org/2000/svg"'

const create = source =>
	properties =>
		template(
			svg + Object.entries(properties).reduce(
				(result, [name, value]) =>
					result + ' ' + name + '="' + value + '"'
			, '')
			+ source.replace(namespace, '')
		)

export const LinkedIn = create(LinkedInSource)
export const GitHub = create(GitHubSource)
export const StackOverflow = create(StackOverflowSource)
export const Medium = create(MediumSource)
