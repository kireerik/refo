import loader from '../.module/loader/source'
	
export default (as, main) => loader(
	url => url.endsWith('?' + as)

	, () => main
)