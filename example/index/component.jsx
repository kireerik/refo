export default ({as, children, ...properties}) =>
	as ?
		<Dynamic {...{
			component: as, ...properties, children
		}}/>
	:
		children