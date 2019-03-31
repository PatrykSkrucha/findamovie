import React, { useState, useEffect } from 'react';
import axios from 'axios'
import key from './key'
import styled from 'styled-components'


const App = () => {
	
	const [search, setSearch] = useState(false)

	const Wrapper = styled.div`
		background: url(${props=>props.search ? `${search[0].Poster}` : 'null'});
		background-size: cover; 	
		height: 200px;
	`
	
	const fetch = () => {

		axios.get(`http://www.omdbapi.com/?apikey=${key}&s=titanic`)
		.then(resp => setSearch(resp.data.Search.slice(0,1)))
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
		<Wrapper search={search}>
			<input />
			<button onClick={fetch}>set state to true</button>
		</Wrapper>
	);

}

export default App;
