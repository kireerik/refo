export default skills => skills && <>
	<h2>Core Technical Competencies</h2>
	<div class="flexContainerSpaceBetween item">
		{Object.entries(skills).map(([category, skills]) =>
			<div>
				<h3>{category}</h3>
				{skills.map(skill => <>
					{skill}<br/>
				</>)}
			</div>
		)}
	</div>
</>