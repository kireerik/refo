import template from '@template'

export default publications => publications && <section>
	<h2>Publications</h2>
	{publications.map(({
		releaseDate, name, website, summary, links
	}) =>
		<div class="item">
			{releaseDate &&
				<span class="date">
					{releaseDate}
				</span>
			}
			<h3>{name}</h3>
			{website &&
				<div>{template(website)}</div>
			}
			{summary &&
				<p class="summary">{summary}</p>
			}
			{links &&
				<ul>
					{links.map(link =>
						<li>{link}</li>
					)}
				</ul>
			}
		</div>
	)}
</section>