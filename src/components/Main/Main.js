import React from 'react'
import styled from 'styled-components'

const main = () => {

	const Wrapper = styled.div`
		
		display: flex;
		flex-direction: column;
		@media (min-width: 700px){
			flex-direction: row-reverse;
						
		}
	`

	const SectionInfo = styled.section`
		border: 1px solid yellow;
		padding: 0 7vw;
		width: 90vw;
		margin: auto;
	`
	const SectionPhoto = styled.section`
		border: 1px solid red;
		
		margin: auto;
		
		width: 90vw;
		img{
			min-width: 90vw;
		}
	`
	return (
		<Wrapper>
			<SectionInfo>
				<p>Title</p>
				<p>description</p>
				<p>Nostrud ipsum sunt voluptate officia incididunt minim culpa consectetur. Esse cupidatat minim eu aliqua laboris fugiat sint magna aliqua officia ipsum irure ex fugiat. Exercitation amet do veniam eiusmod labore veniam nisi do sit. Esse nisi id consequat sit dolore velit in cillum deserunt laborum ullamco velit. Adipisicing proident ullamco mollit proident commodo. Aliqua et velit in esse amet est amet excepteur.</p>
			</SectionInfo>
			<SectionPhoto>
				<img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzOTE1OTU5Ml5BMl5BanBnXkFtZTcwNTgzMjUyMQ@@._V1_SX300.jpg" alt="poster"/>
			</SectionPhoto>

		</Wrapper>
	)
}

export default main