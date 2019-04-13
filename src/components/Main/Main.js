import React from 'react'
import styled from 'styled-components'

const main = (props) => {

	const Wrapper = styled.div`
		// border: 1px solid black;
		margin: auto;
		display: flex;
		width: 90vw;
		flex-direction: column;
		flex-wrap: wrap;
		
		@media (min-width: 500px){
			width: 400px;
		}
		@media (min-width: 600px){
			width: 500px;
		}
		@media (min-width: 700px){
			flex-direction: row-reverse;
			flex-wrap: nowrap;
			width: 600px;

			
		}
		@media (min-width: 950px){
			width: 900px;
		}
	`

	const SectionInfo = styled.section`
		// border: 1px solid yellow;
		padding: 0 20px;
		@media (min-width: 500px){
			width: 100%;
		}
		@media (min-width: 700px){
			min-width: 66.66%;
		}
		`
		const SectionPhoto = styled.section`
		// border: 1px solid red;
		margin: auto;
		min-width: 100%;
		img{
			border-radius: 3px;
			width: 100%;
		}
		@media (min-width: 500px){
			max-width: 400px;
		}
		@media (min-width: 700px){
			min-width: 33.33%;
			// border: 1px solid green;
			margin: 0;	
			
		}
	`

	const { title, description, plot, img } = props

	const Title = title ? title : "Title"
	const Description = description ? description : ""
	const Plot = plot ? plot : "Nostrud ipsum sunt voluptate officia incididunt minim culpa consectetur. Esse cupidatat minim eu aliqua laboris fugiat sint magna aliqua officia ipsum irure ex fugiat. Exercitation amet do veniam eiusmod labore veniam nisi do sit. Esse nisi id consequat sit dolore velit in cillum deserunt laborum ullamco velit. Adipisicing proident ullamco mollit proident commodo. Aliqua et velit in esse amet est amet excepteur."
	const Img =  img ? img : "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzOTE1OTU5Ml5BMl5BanBnXkFtZTcwNTgzMjUyMQ@@._V1_SX300.jpg"
	

	return (
		<Wrapper>
			<SectionInfo>
				<h1>{Title}</h1>
				<p>{Description}</p>
				<p>{Plot}</p>
			</SectionInfo>
			<SectionPhoto>
				<img src={Img} alt="poster"/>
			</SectionPhoto>

		</Wrapper>
	)
}

export default main