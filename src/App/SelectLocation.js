import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SelectLocation = ({ onSelect }) => {
	const [searchValue, setSearchValue] = useState('')

	const onChange = (event) => {
		event.preventDefault()
		setSearchValue(event.target.value)
	}

	const onSubmit = (event) => {
		event.preventDefault()
		onSelect(searchValue)
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					value={searchValue}
					onChange={onChange}
					placeholder="Search Location"
				/>
				<input type="submit" value="Search " />
			</form>
		</div>
	)
}

SelectLocation.propTypes = {
	onSelect: PropTypes.func,
}

SelectLocation.defaultProps = {
	onSelect: () => {},
}

export default SelectLocation
