import importAll from '#index/module/importAll'

export default function (...names) {
	importAll(names.map(name => name + '.html'), 1)
}