import React from 'react'
import styled from 'styled-components'

const searchBar = (props) => {

	const Wrapper = styled.ul`
		display: ${props=>props.show ? 'block' : 'none'};
		list-styling: none;
		
	`

	const {list} = props

	
	return (
		<Wrapper>
			{/* {List} */}
		</Wrapper>
	)
}

export default searchBar