import view from './view'

import getDocumentName from './documentName'

import prefixum from '#index/prefixum'

import resume from '../../name'
import full from '../../full.html/name'

import capitalize from '#@capitalize'

import getName from '#index/.pdf/getName'

const or = ' or'

, insert = (array, component) =>
	array.toSpliced(1, false, component)

export default ({name, version}) => {
	const documentName = getDocumentName(version)

	return <div class="flexContainer">
		<div class="flexGrow">
			<a class="fontWeightNormal"
				title={view(!version)}
				href={<>
					{prefixum}{version ? '' : '/'}
					{version && '/'}{resume}
					{!version ? '/' + full : ''}
				</>.join('')}
				rel="noopener"
			>
				View {version ? 'compact' : full} version
			</a>
		</div>
		<div>
			{insert([
				[
					' as'   , ',',     , true
				]
				, [
					' in A4', or , true
				]
			].map(
				([
					type, separator, format, capitalized
				]) => <>
					{insert([
						['open', {target: '_blank'}]
						, ['download', {
							download: <>
								{name} -
								{version && ' ' + version}
								{' '}{resume}
								.pdf
							</>.join('')
						}]
					].map(
						([children, properties]) => {
							const title = capitalize(children)

							if (capitalized)
								children = title

							return <a
								{...{
									classList: {
										fontWeightNormal: !capitalized
									}

									, title:
										title + ' ' + documentName
										+ type + ' PDF'

									, href:
										prefixum
										+ '/'
										+ getName(format, version)

									, ...properties
								}}
								rel="noopener"
							>
								{children}
							</a>
						}
					),
						separator + ' '
					)}
					{type} PDF
				</>
			), <>
				{or} <a
					title={'Print ' + documentName}
					href="JavaScript:window.print()"
					rel="noopener"
				>
					Print
				</a>{' ' + resume}
				<br/>
			</>)}
		</div>
	</div>
}