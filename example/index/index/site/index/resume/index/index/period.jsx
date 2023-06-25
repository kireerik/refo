export default ({group, startDate, endDate, duration}) =>
	<span class="date">
		{!group && <>
			{startDate}
			{startDate &&
				' – '
			}
			{endDate ??
				'present'
			}
		</>}
		{duration &&
			' &nbsp;' + duration
		}
	</span>