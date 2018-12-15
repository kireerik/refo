const {html} = require('common-tags')

, linkPrefixum = !process.argv[2] ? 'refo/' : ''

module.exports = basics => {
	const {name, version, label, website, profiles, summary, summaryFull, email, phone, location} = basics

	, resume = 'resume'
	, Resume = resume[0].toUpperCase() + resume.slice(1)

	, versionPart = version ? version + ' ' : ''
	, documentName = name + '’s ' + versionPart + resume
	, pdfFileName = name + ' - ' + versionPart + resume + '.pdf'

	, getPdfPath = (format = '') => '../' + linkPrefixum + name.split(' ').join('') + '-' + (version ? version : '') + format + (format || version ? Resume : resume) + '.pdf'

	, pdfPath = getPdfPath()
	, pdfPathA4 = getPdfPath('A4')

	return html`${basics && html`
		<div class="controls flexContainer">
			<div class="flexGrow">
				${version ? `
					<a title="View ${name}’s ${resume}" href="../${linkPrefixum}${resume}" rel="noopener" class="fontWeightNormal">View compact version</a>
				` : `
					<a title="View ${name}’s full ${resume}" href="${linkPrefixum}${resume}/full" rel="noopener" class="fontWeightNormal">View full version</a>
				`}
			</div>
			<div>
				<a title="Open ${documentName} as PDF" href="${pdfPath}" target="_blank" rel="noopener">Open</a>, <a title="Download ${documentName} as PDF" href="${pdfPath}" download="${pdfFileName}" rel="noopener">Download</a> as PDF or <a title="Print ${documentName}" href="JavaScript:window.print()" rel="noopener">Print</a> ${resume}
				<br><a class="fontWeightNormal" title="Open ${documentName} in A4 PDF" href="${pdfPathA4}" target="_blank" rel="noopener">open</a> or <a class="fontWeightNormal" title="Download ${documentName} in A4 PDF" href="${pdfPathA4}" download="${pdfFileName}" rel="noopener">download</a> in A4 PDF
			</div>
		</div>

		<header class="flexContainer">
			<h1>${name}</h1>
			${label && `
				<aside>` + label + `</aside>
			`}
			${website && `
				<div id="website">
					` + website + `
				</div>
			`}
			${profiles && html`
				<div class="icons">
					${profiles.map(({title, url, network}, index) => html`
						<a ${index + 1 == profiles.length && `class="last" `}${title && `title="` + title + `" `}href="${url}" target="_blank" rel="noopener">
							<img inline src="${version && '../'}../../asset/icon/${network}.svg">
						</a>
					`)}
				</div>
			`}
		</header>
		${summary && html`
			<p>${summaryFull} ${summary}</p>
		`}
		${email && `
			<div>
				` + email + `
			</div>
		`}
		${phone && `
			<div>
				` + phone + `
			</div>
		`}
		${location && (({address, postalCode, city, countryCode, region} = location) => `
			<div>
				` + address + `, ` + postalCode + ` ` + city + `, ` + countryCode + `, ` + region + `
			</div>
		`)()}
	`}`
}