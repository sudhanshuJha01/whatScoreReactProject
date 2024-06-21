import React from "react";
import { useMatch } from "../../context/matchContext";

function MatchInfo() {
  const { currMatchInfo } = useMatch();

  return (
    <>
      <div className="min-w-96 min-h-[500px] bg-green-600 rounded-md m-7 text-white">
        <h1>{currMatchInfo?.matchInfo?.seriesName}</h1>
        <h2>{currMatchInfo?.matchInfo?.matchDesc}</h2>
        <div className="text-center">
          <h2>{`${currMatchInfo.matchInfo?.team1?.teamSName} v/s ${currMatchInfo.matchInfo?.team2?.teamSName}`}</h2>
          <h3>{currMatchInfo.matchInfo?.status}</h3>
          <h3>{`Match played at ${currMatchInfo.matchInfo?.venueInfo?.ground} in ${currMatchInfo.matchInfo?.venueInfo?.city}`}</h3>
        </div>
        <div className="font-bold text-2xl m-2 flex flex-col">
          <div className="">
            <h1>{currMatchInfo.matchInfo?.team1.teamName}</h1>
            <div className="flex items-center text-center" >
              <span className="m-2">{`Score: ${currMatchInfo.matchScore?.team1Score?.inngs1?.runs} / ${currMatchInfo.matchScore?.team1Score?.inngs1?.wickets}`}</span>
              <span className="m-2">{`Overs: ${currMatchInfo.matchScore?.team1Score?.inngs1?.overs} / 20`}</span>
            </div>
          </div>
          <div className="">
            <h1>{currMatchInfo.matchInfo?.team2.teamName}</h1>
            <div className="flex items-center text-center" >
              <span className="m-2">{`Score: ${currMatchInfo.matchScore?.team2Score?.inngs1?.runs} / ${currMatchInfo.matchScore?.team2Score?.inngs1?.wickets}`}</span>
              <span className="m-2">{`Overs: ${currMatchInfo.matchScore?.team2Score?.inngs1?.overs} / 20`}</span>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default MatchInfo;
