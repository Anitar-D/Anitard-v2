import Link from "next/link";

interface Props {
  anime: any;
}

function SearchCardAnime({ anime }: Props) {
  return (
    <div className="">
      <Link href={`/anime/${anime?.mal_id}`} target="_blank" rel="noreferrer">
        <div>
          <div className="flex max-h-[55vh] h-[65vh] border-4 border-slate-400 flex-col cursor-pointer ease-out transition-500 w-full items-center justify-center rounded-2xl shadow-md lg:max-w-sm bg-gradient-to-br bg-no-repeat bg-fixed from-slate-900 to-amber-400">
            <img
              className="object-cover w-48 h-64 max-h-64 max-w-48 hover:scale-105 hover:opacity-75 rounded-3xl border-4 border-slate-900"
              src={anime?.images.jpg.large_image_url}
              alt="image"
            />
            <div className="p-4 flex flex-col items-center justify-center">
                {
                  anime?.title.length<25? <h4>{anime?.title}</h4>:<h4>{anime?.title.substring(0,10)+" ..."}</h4>
                }
              <button className="hover:scale-105 transition-200 px-4 py-2 text-sm text-yellow-300 bg-purple-500 rounded shadow">
                Add to favourites
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SearchCardAnime;


