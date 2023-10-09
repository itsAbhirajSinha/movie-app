import React from 'react'
import Axios from "axios"
import { API_KEY, imageURL } from './Api'
import './App.css'

import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"




// https://api.themoviedb.org/3/discover/tv/?api_key=45c46374bb4858043e776b4157690bee&with_network=123 
function NetflixOriginals() {

    // String this array output.data.result in useStatae

    const [originalsData, setoriginalsData] = React.useState([])

    const[myId,setmyID] = React.useState("")

    React.useEffect(function () {



        // Logic to make a request
        Axios.get(`https://api.themoviedb.org/3/discover/tv/?api_key=${API_KEY}&with_network=123`)
            .then(function (output) {
                setoriginalsData(output.data.results)
                // console.log(output.data.results)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

// handleClick gives the same date as info upon clicking
    function handleClick(movieData)
    {
        console.log(movieData)
        const movieName = movieData.name
        movieTrailer(movieName) 
        .then(function(output)
        {
            console.log(output)
           
          setmyID( new URLSearchParams(new URL(output).search).get("v"))

        })
        .catch(function(error){
            console.log(error)
        })
    }


    return (
        <div>
            <h2 style={{color:"white"}}>NETFLIX ORIGINALS</h2>
            <div className='allImages'>
            {
                originalsData.map(function (info) {
                    // console.log(info)
                    // console.log(info.poster_path)
                    return <img width='250px' height='250px' src={imageURL + info.poster_path} onClick={()=>handleClick(info)}/>
                })
            }



        </div>
     
        {myId ? 
        <Youtube videoId={myId}></Youtube>
         :null} 
    
        </div>
    )
}

export default NetflixOriginals