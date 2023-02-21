import React, { useState } from "react";
import getAnime from "./Anilist/getAnime";
import Epbutton from "./Epbutton";

interface Props {
  episodes: number;
  id: number;
}

function ButtonDisplay({ episodes, id }: Props) {
  const [eplink, setEplink] = useState<string | null>("");

  const chooseEpisode = (eplink: string) => {
    setEplink(eplink);
  };

  const data = getAnime(id, "ANIME");
  console.log(data);

  const episodesAdjusted = episodes + 1;
  var episodeList: Array<string> = [];
  for (var i = 1; i < episodesAdjusted!; i++) {
    episodeList.push(String(i));
  }
  console.log(eplink);
  return (
    <div className="bg-black">
      <div className="flex items-center justify-center border-3 border-white">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl mt-16 font-manrope text-transparent bg-clip-text bg-gradient-to-b from-slate-700 via-rose-400 to-pink-700">
            Watch {data.Media.title.english} at Anitard
          </h1>

          {eplink ? (
            <div className="overflow-hide">
              <iframe
                className="mt-6 rounded-2xl border-2 border-slate-600"
                src={eplink!}
                title="Watch Anime"
                width={720}
                height={460}
                allowFullScreen
                frameBorder={2}
                scrolling="no"
              ></iframe>
            </div>
          ) : (
            <h1 className="my-64">Nothing selected</h1>
          )}
        </div>
      </div>
      <div className="grid grid-cols-12 mt-8">
        {episodeList.map((v) => (
          <Epbutton
            value={v}
            id={id}
            info={data.Media}
            chooseEpisode={(eplink: string) => chooseEpisode(eplink)}
          />
        ))}
      </div>
    </div>
  );
}

export default ButtonDisplay;
