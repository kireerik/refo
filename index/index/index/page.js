import importAll from '#index/index/importAll'

export default (...names) =>
	importAll(names.map(name => name + '.html'), 1)