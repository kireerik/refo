export default (target, value) =>
	target
		.split(value)
		.toSpliced(-1)
		.join(value)