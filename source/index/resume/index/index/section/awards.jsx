import template from '#@SolidJS/template'

export default awards => awards && <section>
	<h2>Awards</h2>
	{awards.map(({date, title, awarder, summary}) =>
		<div class="item">
			{date &&
				<span class="date">
					{date}
				</span>
			}
			<h3>{title}</h3>
			{awarder &&
				<div>
					{awarder}
				</div>
			}
			{summary &&
				<p class="summary">{template(summary)}</p>
			}
		</div>
	)}
</section>