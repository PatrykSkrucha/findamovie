import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import key from './key'
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
		if(data) console.log (data) 
		else return
	},[data])
	


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
	
	const handleChange = () => {
		let time = null;
		if(time!==null){
			clearTimeout(time)
			time=null
		}
		else{
			setTimeout(()=>setInput(InputRef.current.value),2000)
		}
	  }





	return (
		<Wrapper img="#000">
			<Input ref={InputRef} type="text" onChange={handleChange}/>
			<SearchBar show={show}
				list={data}/>
		<button onClick={fetch}>click me</button>
			<Main 
				/>
		</Wrapper>
	);

}

export default App;
