import loader from '../@/loader/source'
	
export default (as, main) => loader(
	url => url.endsWith('?' + as)

	, () => main
)