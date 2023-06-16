import firebase from './firebase'

import {readFileSync} from 'fs'

import main from '@index/site/index/main'

import asset from '@index/site/index/index/asset'

import
	lazysizes
from
	'@index/site/index/index/asset/lazysizes'

import index from '@index/site/index/index'

import resume from '@index/site/index/resume'
import resumeFull from '@index/site/index/resume/full'

import paths from '@index/site/index/pdf/paths'
import pdf from '@index/site/index/pdf'

const js = '.js'

, production = import.meta.env.PROD
, indexName = 'index'

, pdfExtension = '.pdf'

, assetDirectory = 'asset/'
, indexDirectory = 'index/index/site/index/'

var page = {
	...(production && {'../firebase.json': firebase})

	, 'favicon.ico': () => readFileSync(
		indexDirectory + 'favicon.ico'
	)
	, ...Object.entries({
		'main': main

		, [assetDirectory + 'lazysizes']: lazysizes
	}).reduce(
		(result, [name, content]) => ({
			...result
			, [name + js]: content
		})
	, {})

	, ...asset.reduce(
		(result, name) => ({
			...result
			, [assetDirectory + name]: () => readFileSync(
				indexDirectory + 'index/'
				+ assetDirectory + name
			)
		})
	, {})
	, ...(() => {
		var page = {
			[production ? indexName : undefined]: index

			, [
				'resume' + (production ? '/' + indexName : '')
			]:
				resume

			, 'resume/full': resumeFull
		}

		if (production)
			page = Object.entries(page).reduce(
				(result, [path, content]) => ({
					...result
					, [path + '.html']: content
				})
			, {})

		return page
	})()

	, ...paths.reduce(
		(result, path) => ({
			...result
			, [path + pdfExtension]: pdf
		})
	, {})
}

export const getStaticPaths = () =>
	Object.keys(page).map(path => ({params: {path}}))

const png = 'png'

import minifyScript from '@minify/script'
import minify from '@minify/html'

export const get = async ({
	url: {origin}, params: {path}
}) =>
	path?.endsWith(pdfExtension) ?
		page[path](origin, path)
	:
		new Response(
			...(await (async () => {
				const icon = path?.endsWith('.ico')
				, graphic = path?.endsWith('.' + png)

				, image = icon || graphic

				, json = path?.endsWith('.json')

				, script = path?.endsWith(js)

				var result = page[path]

				if (image)
					result = result()

				if (script)
					result = minifyScript(result)
				else
					if (!(image || json))
						result = await minify(result)

				return [
					result
					, {
						headers: {
							'Content-Type':
								image ?
									'image/' + (
										icon ?
											'x-icon'
										:
											png
									)
								:
									json ?
										'application/json'
									:
										'text/' + (
											script ?
												'javascript'
											:
												'html; charset=UTF-8'
										)
						}
					}
				]
			})())
		)