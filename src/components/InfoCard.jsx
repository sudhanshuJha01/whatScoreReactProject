import React from "react";
import { useMatch } from "../context/matchContext";
import { Link } from "react-router-dom";

function InfoCard() {
  const { seriesData , setCurrMatchInfo} = useMatch();
  const matchDetails = seriesData?.matchDetails || [];
//   console.log("info : ", matchDetails[0]?.matchDetailsMap?.match[0].matchInfo);

  return (
    <div className="flex flex-wrap items-center justify-center">
      {matchDetails.map((item) => (
        <div
          key={item.matchDetailsMap?.key}
          className="text-center bg-green-400 w-1/4  min-h-80 border-2 border-black
        text-white font-serif font-semibold text-2xl rounded-lg shadow-lg m-3 p-3
    "
        >
          <span>{item.matchDetailsMap?.key}</span>
          <div>
            {item.matchDetailsMap?.match?.map((info) => (
              <div key={info.matchInfo?.matchId}>
                <h3>{info.matchInfo?.matchDesc}</h3>
                <h4>{`${info.matchInfo?.team1?.teamSName} v/s ${info.matchInfo?.team2?.teamSName}`}</h4>
                <h4>{info.matchInfo?.status}</h4>
                <Link to={'/matchinfo'}>
                <button className="bg-slate-700 hover:bg-slate-800 text-white text-sm rounded-md p-2 " onClick={()=>{setCurrMatchInfo(info)
                }}>Match Center</button>
                </Link>
                
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default InfoCard;
