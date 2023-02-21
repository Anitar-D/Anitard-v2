import React, { useState,useEffect } from 'react'
import getAnime, { reception } from './Anilist/getAnime';
import exceptions from './exceptions';

interface Props{
    value:string | number | readonly string[] | undefined;
    id:number;
    info:reception;
    key:number;
    chooseEpisode: (eplink: string) => void
}

function Epbutton({key,value,id,info,chooseEpisode}:Props) {

    const makeTitleStreamable=(str:string)=>{
        const res=str.toLowerCase().replace(/[^a-zA-Z0-9x ]/g, " ").trim().split(' ').join('-').replace(/-+/gi,`-`);
        function correctTitle(str:string){   
          for(var i=0;i<exceptions.length;i++){
              console.log(exceptions[i]);
              if(exceptions[i].name.falsy==str){
                  str=exceptions[i].name.truthy
                  console.log(str)
              }
          }
          return str
      }
        const trueTitle:string=correctTitle(res)
        return trueTitle;
      }

    const titleEntry=info.title.romaji??info.title.english;
    const title=makeTitleStreamable(titleEntry);
      useEffect(() => {
        console.log(title);
        
      }, [])
      
    const [episode,setEpisode]=useState(" ");
    const [movie,setMovie]= useState(" ")

    const getEpisode= async()=>{
      
        const EpisodeLink=await (await fetch(`https://api.consumet.org/anime/gogoanime/watch/${title}-episode-${value}`)).json()
        console.log(makeTitleStreamable(EpisodeLink.headers.Referer))
        setEpisode(EpisodeLink.headers.Referer)
        }
    
  return (
    <div>
        <button className='bg-gradient-to-br bg-no-repeat bg-fixed from-purple-800 to-rose-700 text-white hover:bg-purple-600 p-3 w-24 m-2 border-2 border-white rounded-2xl' value={value}
        onClick={()=>{
            getEpisode();
            chooseEpisode(episode??movie)
          }}
        >
            {value}
        </button>
    </div>
  )
}

export default Epbutton
