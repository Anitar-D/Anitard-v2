import Head from "next/head";
import Header from "../components/Header";
import { useState,useEffect } from "react";
import HomeDisplay from "../components/HomeDisplay";
import Link from "next/link";
import HomeImages from "../components/HomeImages";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Home() {
  const [animeList, setAnimeList] = useState([]);
  const [animeListZoro,setAnimeListZoro] = useState([])
  const [mangaList, setMangaList] = useState([]);
  const [animeBoxList, setAnimeBoxList] = useState([]);
  const [mangaBoxList, setMangaBoxList] = useState([]);
  const [searched,setSearched] = useState(false)
  const [search, setSearch] = useState("");

  const getSearchResult = async (query: string) => {
    const searchResultAnimeZoro = await fetch(
      `https://api.consumet.org/anime/zoro/spy+x+family`
    ).then((res1) => res1.json());
    const searchResultAnime = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}`
    ).then((res2) => res2.json()); 
    const searchResultManga = await fetch(
      `https://api.jikan.moe/v4/manga?q=${query}`
    ).then((res2) => res2.json()); 
    setAnimeList(searchResultAnime.data);
    setAnimeListZoro(searchResultAnimeZoro.results)
    setMangaList(searchResultManga.data);
    
    
  };
  console.log(animeList);
  ;
  
  const getSearchResultBox = async (query: string) => {
    const searchResultBoxAnime = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}`
    ).then((res1) => res1.json());
    const searchResultBoxManga = await fetch(
      `https://api.jikan.moe/v4/manga?q=${query}`
    ).then((res2) => res2.json()); 

    setAnimeBoxList(searchResultBoxAnime.data);
    setMangaBoxList(searchResultBoxManga.data);
  };

  const HandleSearch = (e: any) => {
    e.preventDefault();
    setSearched(true)
    getSearchResult(search);
  };

  const getResultBoxData=(e:any)=>{
    if(e.length>=2){
      getSearchResultBox(search)
      console.log(animeBoxList,mangaBoxList)
    }
  }

  const sayhi=(a:string)=>{
    console.log(a)
  }
 
  
  const queryans=search.split(' ').join('-')
  const link=`https://www1.gogoanimes.fi/category/${queryans}`
  

  return (
    <div className="">
      
      <Head>
        <title>Anitard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Otonari.png" />
      </Head>
      <Header />
      <main className="pb-24">
        <div className="pt-24">
          <div className="transition-1000 ">
            <Link href="/">
              <h1 className="text-8xl pb-6 flex items-center justify-center font-medium font-manrope text-transparent bg-clip-text bg-gradient-to-b from-purple-700 via-orange-400 to-orange-700 hover:white">
                ANITARD
              </h1>
            </Link>
          </div>
          <div className="grid place-items-center">
            <form className="" onSubmit={HandleSearch}>
              <input
                type="text"
                placeholder="???? Search here..."
                className="transition-200 pl-4 bg-white text-black font-semibold rounded-3xl h-14 w-[90vh] hover:bg-gray-200"
                value={search}
                onChange={(e) => 
                setSearch(e.target.value)
                }
                required
              />
            </form>
            <div className="pt-12">
              One place to find your favourite manga and anime!
            </div>
          </div>
        </div>
        <div>
            {searched?
            <div className="flex pl-6 pt-4 p-2 text-2xl gap-4">
            Search Results
            <SearchOutlinedIcon style={{ fontSize: 32 }} />
          </div>:
            <HomeImages/>
          }
        </div>
        <div>
          {<HomeDisplay
            zoroList={animeListZoro}
            animeList={animeList}
            mangaList={mangaList}
            searched={searched}
          /> }
        </div>
      </main>
    </div>
  );
}
