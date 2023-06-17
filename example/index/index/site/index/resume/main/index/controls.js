const linkPrefixum = import.meta.env.PROD ? '/refo/' : ''

import {html} from 'common-tags'

export default ({name, version}) => {
	const resume = 'resume'
	, Resume = resume[0].toUpperCase() + resume.slice(1)

	, versionPart = version ? version + ' ' : ''
	, documentName = name + '’s ' + versionPart + resume
	, pdfFileName = name + ' - ' + versionPart + resume + '.pdf'

	, getPdfPath = (format = '') => '../' + (linkPrefixum && version ? '../' : '') + name.split(' ').join('') + '-' + (version ? version : '') + format + (format || version ? Resume : resume) + '.pdf'

	, pdfPath = getPdfPath()
	, pdfPathA4 = getPdfPath('A4')

	return html`
		<div class="flexContainer">
			<div class="flexGrow">
				${version ? html`
					<a title="View ${name}’s ${resume}" href="../${!linkPrefixum && resume}" rel="noopener" class="fontWeightNormal">View compact version</a>
				` : `
					<a title="View ${name}’s full ${resume}" href="${linkPrefixum}${resume}/full" rel="noopener" class="fontWeightNormal">View full version</a>
				`}
			</div>
			<div>
				<a title="Open ${documentName} as PDF" href="${pdfPath}" target="_blank" rel="noopener">Open</a>, <a title="Download ${documentName} as PDF" href="${pdfPath}" download="${pdfFileName}" rel="noopener">Download</a> as PDF or <a title="Print ${documentName}" href="JavaScript:window.print()" rel="noopener">Print</a> ${resume}
				<br><a class="fontWeightNormal" title="Open ${documentName} in A4 PDF" href="${pdfPathA4}" target="_blank" rel="noopener">open</a> or <a class="fontWeightNormal" title="Download ${documentName} in A4 PDF" href="${pdfPathA4}" download="${pdfFileName}" rel="noopener">download</a> in A4 PDF
			</div>
		</div>
	`
}