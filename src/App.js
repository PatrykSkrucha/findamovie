import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import key from './key.js'
import styled from 'styled-components'
import Main from './components/Main/Main'
import SearchBar from './components/SearchBar/SearchBar'

const Input = styled.input`
	width: 60vw;
`

const Wrapper = styled.div`
	max-width: 100vw;
	height: 100vh;
	background: ${props=>props.img ? `${props.img}` : "#ccc"};
	display: flex;
	flex-direction: column;
`

const App = () => {
	

	const [data, setData] = useState(false)
	const [input, setInput] = useState("")
	const [show, setShow] = useState(false)
	const InputRef = useRef();
	
	
	
	

	useEffect(()=>{
		if(input!==null){
	// 		// let time = null;
	// 		// if(time){
	// 		// 	clearTimeout(time)
	// 		// 	time=null
	// 		// }
	// 		// else{
	// 		// 	time = setTimeout(()=>console.log(`timeout`),2000)
	// 		// }
		console.log(data)
		}
	},[data])

	const fetch = () => {

		axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=titanic`)
		.then(res => setData(res.data))
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
