import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import {imageUrl,API_KEY } from '../../Constants/Constants'
import axios from '../../axios'
import YouTube from 'react-youtube'
function Rowpost(props) {
    const [movies, setMovies] = useState([])
    const [urlId,setUrlId]=useState('')
    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovies(response.data.results)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
 
      const handleMovies =(id)=>{
        console.log(id);  
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log("ppppp")
            console.log(response.data)
            console.log("ppppp")
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }else{
                console.log('array is empty');
            }

        })
      }


    return (
        <div className="row">
            <h1> {props.title}</h1>
            <div className="posters">

                {movies.map((obj) => 
                    <img onClick={()=>handleMovies(obj.id)} className={props.isSmall ? 'smallPoster': 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                )}
            </div>
         { urlId&&  <YouTube opts={opts} videoId={urlId.key} /> }   
        </div>
    )
}

export default Rowpost
