import link from './link'
import brand from './brand'
import page from './page'
import selected from './selected'

import prefixum from '##index/prefixum'

import title from '../title'

import view from '##index/resume/index/index/view'
import resumeName from '##index/resume/name'

export default ({styled, index, resume}) => {
	const Header = styled.nav`
		color: #444;

		box-shadow: 0 1px 3px 0 rgba(51, 51, 51, .08);

		nav {
			margin: 0 auto;
			padding: 0 .3em;
			max-width: 580px;
		}
	`

	, get = component => {
		const Link = component(styled(link(styled.a)))
		, as = selected(styled(Link))

		return ({selected, href = '', ...properties}) =>
			<Link
				{...{
					...(selected && {as})

					, href: prefixum + '/' + href, ...properties
				}}
				rel="noopener"
			/>
	}

	, Brand = get(brand)

	, Page = get(page)

	var result = () =>
		<Header>
			<nav>
				<Brand {...{selected: index, title}}>
					{title}
				</Brand>
				<Page selected={resume}
					title={view()} href={resumeName}
				>
					{resumeName}
				</Page>
			</nav>
		</Header>

	result.toString = Header.toString

	return result
}