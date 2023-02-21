
import SearchCardAnime from "./SearchCardAnime";
import { Animetype } from "../types";
import { ZoroType } from "./HomeDisplay";

interface Props{
    animeList:Animetype[];
    searched:boolean
    zoroList:ZoroType[];
}


function PrepareHomeAnime({zoroList,animeList,searched}:Props) {
  return (

    <div className="mr-20">
        <div>
            {searched? 
            <h2 className="pl-5 text-2xl">Anime search results</h2>:
            <h2></h2>
           }
        </div>
        <div className="pl-2 pt-5 pb-20 items-center max-h-80 max-w-64 space-x-0.5 grid grid-cols-3 gap-4 md:space-x-2.5 md:p-2">
          {animeList?.map((anime) => (
            <SearchCardAnime anime={anime} key={anime.mal_id} />
          ))}
        </div>
    </div>
  )
}

export default PrepareHomeAnime