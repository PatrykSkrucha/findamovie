import React, { useState, useEffect } from 'react';
import axios from 'axios'
import key from './key'
import styled from 'styled-components'
import Main from './components/Main/Main'


const App = () => {
	
	const [search, setSearch] = useState(false)


	
	const Wrapper = styled.div`
		max-width: 100vw;	
	`
	
	const fetch = () => {

		axios.get(`http://www.omdbapi.com/?apikey=${key}&t=titanic`)
		.then(resp => console.log(resp.data))
		.catch(err => console.log(err))
		
	}
	

	// const movies = search ? 
		
	// 		search.slice(0,1).map(el=>{
	// 			return <div style={{
	// 				display: 'flex'
	// 			}}>
	// 				<p>title: {el.Title} ({el.Year})</p>
	// 			</div>
	// 		})
		
	// 		: 
	// 		<p>type something</p>
	console.log(search ? search[0].Poster : false);

	return (
		<Wrapper>
		<button onClick={fetch}>click me</button>
			<Main />
		</Wrapper>
	);

}

export default App;
