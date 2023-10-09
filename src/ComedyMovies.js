import React from 'react'
import Axios from "axios"
import { API_KEY, imageURL } from './Api'




function ComedyMovies() {
    const [originalsData, setoriginalsData] = React.useState([])

    React.useEffect(function () {
        Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`)
            .then(function (output) {
                console.log(output)
                setoriginalsData(output.data.results)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])


    return (
        <div >
            <h2 style={{ color: "white" }}>COMEDY MOVIES</h2>
            <br></br>
            <div className='allImages'>
                {
                    originalsData.map(function (info) {
                        return <img width='250px' height='250px' src={imageURL + info.poster_path} />
                    })
                }



            </div>
        </div>
    )
}

export default ComedyMovies