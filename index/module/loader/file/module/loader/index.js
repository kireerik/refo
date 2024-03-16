var remove

export default (loader, main) => [
	async withModuleReloading => {
		if (withModuleReloading)
			remove = (await import('../source/remove')).default
	}
	, loader(url => main(url, remove))
]