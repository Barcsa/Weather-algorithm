import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'

const Day = ({ day, list }) => {
	return (
		<div>
			<div>
			<br/>	<br/>
				<div><strong>{format(new Date(day), 'eeee, dd LLLL')}</strong></div>

				{list.map((item) => {
					return (
						<div>
							<br/>
							<div key={item?.dt}>{item?.dt_txt}</div>
							<br />																			
							<div> Temperature {item?.main.temp } C</div>
							<div> Temperature feels like {item?.main.feels_like } C</div>
							<div> Pressure {item?.main.pressure} mb / 764mmHg</div>
							

								
						
					</div>
					)
				})}
			</div>
			
		</div>
	)
}

Day.propTypes = {
	day: PropTypes.string,
	list: PropTypes.array,
}

export default Day
