var directory, remove

export default (loader, condition, main) => [
	async ([directoryParameter, withModuleReloading]) => {
		directory = directoryParameter

		if (withModuleReloading)
			remove = (await import('../source/remove')).default
	}
	, loader(
		condition

		, url => main(directory, url, remove)
	)
]