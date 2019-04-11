import React, { useState, useEffect } from 'react';
import axios from 'axios'
import key from './key.js'
import styled from 'styled-components'
import Main from './components/Main/Main'


const App = () => {
	
	const Wrapper = styled.div`
		max-width: 100vw;
		input{
			
			padding: 5px;
		}	
	`
	const [searchData, setSearchData] = useState(null)
	const [data,setData] = useState(null)
	const Input = styled.input`
		margin: auto;	
	`
	
	useEffect(()=>{
		if(data!==null) console.log(data)
	},[data])
	
	const fetch = () => {

		axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=INTERSTELLAR`)
		.then(resp => setData(resp.data))
		.catch(err => console.log(err))
		
	}
	
	const fetchMovieData = (id) => {
		axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`)
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

	return (
		<Wrapper>
			<Input placeholder="Search a movie"/>
		<button onClick={fetch}>click me</button>
			<Main />
		</Wrapper>
	);

}

export default App;
