import React, { useEffect , useState} from 'react'
import { MatchContextProvider } from './context/matchContext.js'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import NavBar from './components/NavBar.jsx'
import MatchInfo from './pages/MatchInfo/MatchInfo.jsx'
import LiveScore from './pages/LiveScore/LiveScore.jsx'

function App() {
 const [seriesData , setSeriesData] = useState([])
 const [currMatchInfo , setCurrMatchInfo]=useState([])
  const data={
    "matchDetails": [
        {
            "matchDetailsMap": {
                "key": "Sun, 02 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87500,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "1st Match, Group A",
                            "matchFormat": "T20",
                            "startDate": "1717288200000",
                            "endDate": "1717300800000",
                            "state": "Complete",
                            "status": "United States won by 7 wkts",
                            "team1": {
                                "teamId": 26,
                                "teamName": "Canada",
                                "teamSName": "CAN",
                                "imageId": 172140
                            },
                            "team2": {
                                "teamId": 15,
                                "teamName": "United States",
                                "teamSName": "USA",
                                "imageId": 172130
                            },
                            "venueInfo": {
                                "id": 1668,
                                "ground": "Grand Prairie Stadium",
                                "city": "Dallas",
                                "timezone": "-05:00"
                            },
                            "currBatTeamId": 15,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 194,
                                    "wickets": 5,
                                    "overs": 20
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 197,
                                    "wickets": 3,
                                    "overs": 17.4
                                }
                            }
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87507,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "2nd Match, Group C",
                            "matchFormat": "T20",
                            "startDate": "1717338600000",
                            "endDate": "1717351200000",
                            "state": "Complete",
                            "status": "West Indies won by 5 wkts",
                            "team1": {
                                "teamId": 287,
                                "teamName": "Papua New Guinea",
                                "teamSName": "PNG",
                                "imageId": 172336
                            },
                            "team2": {
                                "teamId": 10,
                                "teamName": "West Indies",
                                "teamSName": "WI",
                                "imageId": 172124
                            },
                            "venueInfo": {
                                "id": 110,
                                "ground": "Providence Stadium",
                                "city": "Guyana",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 10,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 136,
                                    "wickets": 8,
                                    "overs": 20
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 137,
                                    "wickets": 5,
                                    "overs": 19
                                }
                            }
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Mon, 03 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87514,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "3rd Match, Group B",
                            "matchFormat": "T20",
                            "startDate": "1717374600000",
                            "endDate": "1717387200000",
                            "state": "Complete",
                            "status": "Match tied (Namibia won the super over)",
                            "team1": {
                                "teamId": 304,
                                "teamName": "Oman",
                                "teamSName": "OMAN",
                                "imageId": 172353
                            },
                            "team2": {
                                "teamId": 161,
                                "teamName": "Namibia",
                                "teamSName": "NAM",
                                "imageId": 172229
                            },
                            "venueInfo": {
                                "id": 55,
                                "ground": "Kensington Oval",
                                "city": "Bridgetown, Barbados",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 109,
                                    "wickets": 10,
                                    "overs": 19.4
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 109,
                                    "wickets": 6,
                                    "overs": 20
                                }
                            }
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87521,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "4th Match, Group D",
                            "matchFormat": "T20",
                            "startDate": "1717425000000",
                            "endDate": "1717437600000",
                            "state": "Complete",
                            "status": "South Africa won by 6 wkts",
                            "team1": {
                                "teamId": 5,
                                "teamName": "Sri Lanka",
                                "teamSName": "SL",
                                "imageId": 172119
                            },
                            "team2": {
                                "teamId": 11,
                                "teamName": "South Africa",
                                "teamSName": "RSA",
                                "imageId": 172126
                            },
                            "venueInfo": {
                                "id": 1811,
                                "ground": "Nassau County International Cricket Stadium",
                                "city": "New York",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 11,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 77,
                                    "wickets": 10,
                                    "overs": 19.1
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 80,
                                    "wickets": 4,
                                    "overs": 16.2
                                }
                            }
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Tue, 04 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87528,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "5th Match, Group C",
                            "matchFormat": "T20",
                            "startDate": "1717461000000",
                            "endDate": "1717473600000",
                            "state": "Complete",
                            "status": "Afghanistan won by 125 runs",
                            "team1": {
                                "teamId": 96,
                                "teamName": "Afghanistan",
                                "teamSName": "AFG",
                                "imageId": 172188
                            },
                            "team2": {
                                "teamId": 44,
                                "teamName": "Uganda",
                                "teamSName": "UGA",
                                "imageId": 495000
                            },
                            "venueInfo": {
                                "id": 110,
                                "ground": "Providence Stadium",
                                "city": "Guyana",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 96,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 183,
                                    "wickets": 5,
                                    "overs": 20
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 58,
                                    "wickets": 10,
                                    "overs": 16
                                }
                            }
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87535,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "6th Match, Group B",
                            "matchFormat": "T20",
                            "startDate": "1717511400000",
                            "endDate": "1717524000000",
                            "state": "Complete",
                            "status": "No result",
                            "team1": {
                                "teamId": 23,
                                "teamName": "Scotland",
                                "teamSName": "SCO",
                                "imageId": 172137
                            },
                            "team2": {
                                "teamId": 9,
                                "teamName": "England",
                                "teamSName": "ENG",
                                "imageId": 172123
                            },
                            "venueInfo": {
                                "id": 55,
                                "ground": "Kensington Oval",
                                "city": "Bridgetown, Barbados",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 90,
                                    "overs": 10
                                }
                            }
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87542,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "7th Match, Group D",
                            "matchFormat": "T20",
                            "startDate": "1717515000000",
                            "endDate": "1717527600000",
                            "state": "Complete",
                            "status": "Netherlands won by 6 wkts",
                            "team1": {
                                "teamId": 72,
                                "teamName": "Nepal",
                                "teamSName": "NEP",
                                "imageId": 172169
                            },
                            "team2": {
                                "teamId": 24,
                                "teamName": "Netherlands",
                                "teamSName": "NED",
                                "imageId": 172138
                            },
                            "venueInfo": {
                                "id": 1668,
                                "ground": "Grand Prairie Stadium",
                                "city": "Dallas",
                                "timezone": "-05:00"
                            },
                            "currBatTeamId": 24,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 106,
                                    "wickets": 10,
                                    "overs": 19.2
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 109,
                                    "wickets": 4,
                                    "overs": 18.4
                                }
                            }
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Wed, 05 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87549,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "8th Match, Group A",
                            "matchFormat": "T20",
                            "startDate": "1717597800000",
                            "endDate": "1717610400000",
                            "state": "Complete",
                            "status": "India won by 8 wkts",
                            "team1": {
                                "teamId": 27,
                                "teamName": "Ireland",
                                "teamSName": "IRE",
                                "imageId": 495001
                            },
                            "team2": {
                                "teamId": 2,
                                "teamName": "India",
                                "teamSName": "IND",
                                "imageId": 172115
                            },
                            "venueInfo": {
                                "id": 1811,
                                "ground": "Nassau County International Cricket Stadium",
                                "city": "New York",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 2,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 96,
                                    "wickets": 10,
                                    "overs": 16
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 97,
                                    "wickets": 2,
                                    "overs": 12.2
                                }
                            }
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Thu, 06 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87556,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "9th Match, Group C",
                            "matchFormat": "T20",
                            "startDate": "1717630200000",
                            "endDate": "1717642800000",
                            "state": "Complete",
                            "status": "Uganda won by 3 wkts",
                            "team1": {
                                "teamId": 287,
                                "teamName": "Papua New Guinea",
                                "teamSName": "PNG",
                                "imageId": 172336
                            },
                            "team2": {
                                "teamId": 44,
                                "teamName": "Uganda",
                                "teamSName": "UGA",
                                "imageId": 495000
                            },
                            "venueInfo": {
                                "id": 110,
                                "ground": "Providence Stadium",
                                "city": "Guyana",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 44,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 77,
                                    "wickets": 10,
                                    "overs": 19.1
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 78,
                                    "wickets": 7,
                                    "overs": 18.2
                                }
                            }
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87563,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "10th Match, Group B",
                            "matchFormat": "T20",
                            "startDate": "1717633800000",
                            "endDate": "1717646400000",
                            "state": "Complete",
                            "status": "Australia won by 39 runs",
                            "team1": {
                                "teamId": 4,
                                "teamName": "Australia",
                                "teamSName": "AUS",
                                "imageId": 172117
                            },
                            "team2": {
                                "teamId": 304,
                                "teamName": "Oman",
                                "teamSName": "OMAN",
                                "imageId": 172353
                            },
                            "venueInfo": {
                                "id": 55,
                                "ground": "Kensington Oval",
                                "city": "Bridgetown, Barbados",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 4,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 164,
                                    "wickets": 5,
                                    "overs": 20
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 125,
                                    "wickets": 9,
                                    "overs": 20
                                }
                            }
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87570,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "11th Match, Group A",
                            "matchFormat": "T20",
                            "startDate": "1717687800000",
                            "endDate": "1717700400000",
                            "state": "Complete",
                            "status": "Match tied (United States won the super over)",
                            "team1": {
                                "teamId": 3,
                                "teamName": "Pakistan",
                                "teamSName": "PAK",
                                "imageId": 172116
                            },
                            "team2": {
                                "teamId": 15,
                                "teamName": "United States",
                                "teamSName": "USA",
                                "imageId": 172130
                            },
                            "venueInfo": {
                                "id": 1668,
                                "ground": "Grand Prairie Stadium",
                                "city": "Dallas",
                                "timezone": "-05:00"
                            },
                            "currBatTeamId": 15,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 159,
                                    "wickets": 7,
                                    "overs": 20
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 159,
                                    "wickets": 3,
                                    "overs": 20
                                }
                            }
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Fri, 07 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87577,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "12th Match, Group B",
                            "matchFormat": "T20",
                            "startDate": "1717700400000",
                            "endDate": "1717713000000",
                            "state": "Complete",
                            "status": "Scotland won by 5 wkts",
                            "team1": {
                                "teamId": 161,
                                "teamName": "Namibia",
                                "teamSName": "NAM",
                                "imageId": 172229
                            },
                            "team2": {
                                "teamId": 23,
                                "teamName": "Scotland",
                                "teamSName": "SCO",
                                "imageId": 172137
                            },
                            "venueInfo": {
                                "id": 55,
                                "ground": "Kensington Oval",
                                "city": "Bridgetown, Barbados",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 23,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 155,
                                    "wickets": 9,
                                    "overs": 20
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 157,
                                    "wickets": 5,
                                    "overs": 18.3
                                }
                            }
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87584,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "13th Match, Group A",
                            "matchFormat": "T20",
                            "startDate": "1717770600000",
                            "endDate": "1717783200000",
                            "state": "Complete",
                            "status": "Canada won by 12 runs",
                            "team1": {
                                "teamId": 26,
                                "teamName": "Canada",
                                "teamSName": "CAN",
                                "imageId": 172140
                            },
                            "team2": {
                                "teamId": 27,
                                "teamName": "Ireland",
                                "teamSName": "IRE",
                                "imageId": 495001
                            },
                            "venueInfo": {
                                "id": 1811,
                                "ground": "Nassau County International Cricket Stadium",
                                "city": "New York",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 26,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 137,
                                    "wickets": 7,
                                    "overs": 20
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 125,
                                    "wickets": 7,
                                    "overs": 20
                                }
                            }
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Sat, 08 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87591,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "14th Match, Group C",
                            "matchFormat": "T20",
                            "startDate": "1717803000000",
                            "endDate": "1717815600000",
                            "state": "Complete",
                            "status": "Afghanistan won by 84 runs",
                            "team1": {
                                "teamId": 96,
                                "teamName": "Afghanistan",
                                "teamSName": "AFG",
                                "imageId": 172188
                            },
                            "team2": {
                                "teamId": 13,
                                "teamName": "New Zealand",
                                "teamSName": "NZ",
                                "imageId": 172128
                            },
                            "venueInfo": {
                                "id": 110,
                                "ground": "Providence Stadium",
                                "city": "Guyana",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 96,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 159,
                                    "wickets": 6,
                                    "overs": 20
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 75,
                                    "wickets": 10,
                                    "overs": 15.2
                                }
                            }
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87598,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "15th Match, Group D",
                            "matchFormat": "T20",
                            "startDate": "1717806600000",
                            "endDate": "1717819200000",
                            "state": "Complete",
                            "status": "Bangladesh won by 2 wkts",
                            "team1": {
                                "teamId": 5,
                                "teamName": "Sri Lanka",
                                "teamSName": "SL",
                                "imageId": 172119
                            },
                            "team2": {
                                "teamId": 6,
                                "teamName": "Bangladesh",
                                "teamSName": "BAN",
                                "imageId": 172120
                            },
                            "venueInfo": {
                                "id": 1668,
                                "ground": "Grand Prairie Stadium",
                                "city": "Dallas",
                                "timezone": "-05:00"
                            },
                            "currBatTeamId": 6,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 124,
                                    "wickets": 9,
                                    "overs": 20
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 125,
                                    "wickets": 8,
                                    "overs": 19
                                }
                            }
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87605,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "16th Match, Group D",
                            "matchFormat": "T20",
                            "startDate": "1717857000000",
                            "endDate": "1717869600000",
                            "state": "Complete",
                            "status": "South Africa won by 4 wkts",
                            "team1": {
                                "teamId": 24,
                                "teamName": "Netherlands",
                                "teamSName": "NED",
                                "imageId": 172138
                            },
                            "team2": {
                                "teamId": 11,
                                "teamName": "South Africa",
                                "teamSName": "RSA",
                                "imageId": 172126
                            },
                            "venueInfo": {
                                "id": 1811,
                                "ground": "Nassau County International Cricket Stadium",
                                "city": "New York",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 11,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 103,
                                    "wickets": 9,
                                    "overs": 20
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 106,
                                    "wickets": 6,
                                    "overs": 18.5
                                }
                            }
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87612,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "17th Match, Group B",
                            "matchFormat": "T20",
                            "startDate": "1717866000000",
                            "endDate": "1717878600000",
                            "state": "Complete",
                            "status": "Australia won by 36 runs",
                            "team1": {
                                "teamId": 4,
                                "teamName": "Australia",
                                "teamSName": "AUS",
                                "imageId": 172117
                            },
                            "team2": {
                                "teamId": 9,
                                "teamName": "England",
                                "teamSName": "ENG",
                                "imageId": 172123
                            },
                            "venueInfo": {
                                "id": 55,
                                "ground": "Kensington Oval",
                                "city": "Bridgetown, Barbados",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 4,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 201,
                                    "wickets": 7,
                                    "overs": 20
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 165,
                                    "wickets": 6,
                                    "overs": 20
                                }
                            }
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Sun, 09 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87619,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "18th Match, Group C",
                            "matchFormat": "T20",
                            "startDate": "1717893000000",
                            "endDate": "1717905600000",
                            "state": "Complete",
                            "status": "West Indies won by 134 runs",
                            "team1": {
                                "teamId": 10,
                                "teamName": "West Indies",
                                "teamSName": "WI",
                                "imageId": 172124
                            },
                            "team2": {
                                "teamId": 44,
                                "teamName": "Uganda",
                                "teamSName": "UGA",
                                "imageId": 495000
                            },
                            "venueInfo": {
                                "id": 110,
                                "ground": "Providence Stadium",
                                "city": "Guyana",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 10,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 173,
                                    "wickets": 5,
                                    "overs": 20
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 39,
                                    "wickets": 10,
                                    "overs": 12
                                }
                            }
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87626,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "19th Match, Group A",
                            "matchFormat": "T20",
                            "startDate": "1717943400000",
                            "endDate": "1717956000000",
                            "state": "Complete",
                            "status": "India won by 6 runs",
                            "team1": {
                                "teamId": 2,
                                "teamName": "India",
                                "teamSName": "IND",
                                "imageId": 172115
                            },
                            "team2": {
                                "teamId": 3,
                                "teamName": "Pakistan",
                                "teamSName": "PAK",
                                "imageId": 172116
                            },
                            "venueInfo": {
                                "id": 1811,
                                "ground": "Nassau County International Cricket Stadium",
                                "city": "New York",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 2,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 119,
                                    "wickets": 10,
                                    "overs": 19
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 113,
                                    "wickets": 7,
                                    "overs": 20
                                }
                            }
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87633,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "20th Match, Group B",
                            "matchFormat": "T20",
                            "startDate": "1717952400000",
                            "endDate": "1717965000000",
                            "state": "Complete",
                            "status": "Scotland won by 7 wkts",
                            "team1": {
                                "teamId": 304,
                                "teamName": "Oman",
                                "teamSName": "OMAN",
                                "imageId": 172353
                            },
                            "team2": {
                                "teamId": 23,
                                "teamName": "Scotland",
                                "teamSName": "SCO",
                                "imageId": 172137
                            },
                            "venueInfo": {
                                "id": 109,
                                "ground": "Sir Vivian Richards Stadium",
                                "city": "North Sound, Antigua",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 23,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 150,
                                    "wickets": 7,
                                    "overs": 20
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 153,
                                    "wickets": 3,
                                    "overs": 13.1
                                }
                            }
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Mon, 10 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87640,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "21st Match, Group D",
                            "matchFormat": "T20",
                            "startDate": "1718029800000",
                            "endDate": "1718042400000",
                            "state": "Complete",
                            "status": "South Africa won by 4 runs",
                            "team1": {
                                "teamId": 11,
                                "teamName": "South Africa",
                                "teamSName": "RSA",
                                "imageId": 172126
                            },
                            "team2": {
                                "teamId": 6,
                                "teamName": "Bangladesh",
                                "teamSName": "BAN",
                                "imageId": 172120
                            },
                            "venueInfo": {
                                "id": 1811,
                                "ground": "Nassau County International Cricket Stadium",
                                "city": "New York",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 11,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 113,
                                    "wickets": 6,
                                    "overs": 20
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 109,
                                    "wickets": 7,
                                    "overs": 20
                                }
                            }
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Tue, 11 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87647,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "22nd Match, Group A",
                            "matchFormat": "T20",
                            "startDate": "1718116200000",
                            "endDate": "1718128800000",
                            "state": "Complete",
                            "status": "Pakistan won by 7 wkts",
                            "team1": {
                                "teamId": 26,
                                "teamName": "Canada",
                                "teamSName": "CAN",
                                "imageId": 172140
                            },
                            "team2": {
                                "teamId": 3,
                                "teamName": "Pakistan",
                                "teamSName": "PAK",
                                "imageId": 172116
                            },
                            "venueInfo": {
                                "id": 1811,
                                "ground": "Nassau County International Cricket Stadium",
                                "city": "New York",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 3,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 106,
                                    "wickets": 7,
                                    "overs": 20
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 107,
                                    "wickets": 3,
                                    "overs": 17.3
                                }
                            }
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Wed, 12 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87654,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "23rd Match, Group D",
                            "matchFormat": "T20",
                            "startDate": "1718148600000",
                            "endDate": "1718161200000",
                            "state": "Complete",
                            "status": "Match abandoned due to rain",
                            "team1": {
                                "teamId": 5,
                                "teamName": "Sri Lanka",
                                "teamSName": "SL",
                                "imageId": 172119
                            },
                            "team2": {
                                "teamId": 72,
                                "teamName": "Nepal",
                                "teamSName": "NEP",
                                "imageId": 172169
                            },
                            "venueInfo": {
                                "id": 270,
                                "ground": "Central Broward Regional Park Stadium Turf Ground",
                                "city": "Lauderhill, Florida",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87661,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "24th Match, Group B",
                            "matchFormat": "T20",
                            "startDate": "1718152200000",
                            "endDate": "1718164800000",
                            "state": "Complete",
                            "status": "Australia won by 9 wkts",
                            "team1": {
                                "teamId": 161,
                                "teamName": "Namibia",
                                "teamSName": "NAM",
                                "imageId": 172229
                            },
                            "team2": {
                                "teamId": 4,
                                "teamName": "Australia",
                                "teamSName": "AUS",
                                "imageId": 172117
                            },
                            "venueInfo": {
                                "id": 109,
                                "ground": "Sir Vivian Richards Stadium",
                                "city": "North Sound, Antigua",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 4,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 72,
                                    "wickets": 10,
                                    "overs": 17
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 74,
                                    "wickets": 1,
                                    "overs": 5.4
                                }
                            }
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87668,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "25th Match, Group A",
                            "matchFormat": "T20",
                            "startDate": "1718202600000",
                            "endDate": "1718215200000",
                            "state": "Complete",
                            "status": "India won by 7 wkts",
                            "team1": {
                                "teamId": 15,
                                "teamName": "United States",
                                "teamSName": "USA",
                                "imageId": 172130
                            },
                            "team2": {
                                "teamId": 2,
                                "teamName": "India",
                                "teamSName": "IND",
                                "imageId": 172115
                            },
                            "venueInfo": {
                                "id": 1811,
                                "ground": "Nassau County International Cricket Stadium",
                                "city": "New York",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 2,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 110,
                                    "wickets": 8,
                                    "overs": 20
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 111,
                                    "wickets": 3,
                                    "overs": 18.2
                                }
                            }
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Thu, 13 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87675,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "26th Match, Group C",
                            "matchFormat": "T20",
                            "startDate": "1718238600000",
                            "endDate": "1718251200000",
                            "state": "Complete",
                            "status": "West Indies won by 13 runs",
                            "team1": {
                                "teamId": 10,
                                "teamName": "West Indies",
                                "teamSName": "WI",
                                "imageId": 172124
                            },
                            "team2": {
                                "teamId": 13,
                                "teamName": "New Zealand",
                                "teamSName": "NZ",
                                "imageId": 172128
                            },
                            "venueInfo": {
                                "id": 500,
                                "ground": "Brian Lara Stadium",
                                "city": "Tarouba, Trinidad",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 10,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 149,
                                    "wickets": 9,
                                    "overs": 20
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 136,
                                    "wickets": 9,
                                    "overs": 20
                                }
                            }
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87689,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "27th Match, Group D",
                            "matchFormat": "T20",
                            "startDate": "1718289000000",
                            "endDate": "1718301600000",
                            "state": "Complete",
                            "status": "Bangladesh won by 25 runs",
                            "team1": {
                                "teamId": 6,
                                "teamName": "Bangladesh",
                                "teamSName": "BAN",
                                "imageId": 172120
                            },
                            "team2": {
                                "teamId": 24,
                                "teamName": "Netherlands",
                                "teamSName": "NED",
                                "imageId": 172138
                            },
                            "venueInfo": {
                                "id": 58,
                                "ground": "Arnos Vale Ground",
                                "city": "Kingstown, St Vincent",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 6,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 159,
                                    "wickets": 5,
                                    "overs": 20
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 134,
                                    "wickets": 8,
                                    "overs": 20
                                }
                            }
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Fri, 14 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87682,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "28th Match, Group B",
                            "matchFormat": "T20",
                            "startDate": "1718305200000",
                            "endDate": "1718317800000",
                            "state": "Complete",
                            "status": "England won by 8 wkts",
                            "team1": {
                                "teamId": 304,
                                "teamName": "Oman",
                                "teamSName": "OMAN",
                                "imageId": 172353
                            },
                            "team2": {
                                "teamId": 9,
                                "teamName": "England",
                                "teamSName": "ENG",
                                "imageId": 172123
                            },
                            "venueInfo": {
                                "id": 109,
                                "ground": "Sir Vivian Richards Stadium",
                                "city": "North Sound, Antigua",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 9,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 47,
                                    "wickets": 10,
                                    "overs": 13.2
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 50,
                                    "wickets": 2,
                                    "overs": 3.1
                                }
                            }
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87696,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "29th Match, Group C",
                            "matchFormat": "T20",
                            "startDate": "1718325000000",
                            "endDate": "1718337600000",
                            "state": "Complete",
                            "status": "Afghanistan won by 7 wkts",
                            "team1": {
                                "teamId": 287,
                                "teamName": "Papua New Guinea",
                                "teamSName": "PNG",
                                "imageId": 172336
                            },
                            "team2": {
                                "teamId": 96,
                                "teamName": "Afghanistan",
                                "teamSName": "AFG",
                                "imageId": 172188
                            },
                            "venueInfo": {
                                "id": 500,
                                "ground": "Brian Lara Stadium",
                                "city": "Tarouba, Trinidad",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 96,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 95,
                                    "wickets": 10,
                                    "overs": 19.5
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 101,
                                    "wickets": 3,
                                    "overs": 15.1
                                }
                            }
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87703,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "30th Match, Group A",
                            "matchFormat": "T20",
                            "startDate": "1718375400000",
                            "endDate": "1718388000000",
                            "state": "Complete",
                            "status": "Match abandoned due to rain",
                            "team1": {
                                "teamId": 15,
                                "teamName": "United States",
                                "teamSName": "USA",
                                "imageId": 172130
                            },
                            "team2": {
                                "teamId": 27,
                                "teamName": "Ireland",
                                "teamSName": "IRE",
                                "imageId": 495001
                            },
                            "venueInfo": {
                                "id": 270,
                                "ground": "Central Broward Regional Park Stadium Turf Ground",
                                "city": "Lauderhill, Florida",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Sat, 15 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87710,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "31st Match, Group D",
                            "matchFormat": "T20",
                            "startDate": "1718407800000",
                            "endDate": "1718420400000",
                            "state": "Complete",
                            "status": "South Africa won by 1 run",
                            "team1": {
                                "teamId": 11,
                                "teamName": "South Africa",
                                "teamSName": "RSA",
                                "imageId": 172126
                            },
                            "team2": {
                                "teamId": 72,
                                "teamName": "Nepal",
                                "teamSName": "NEP",
                                "imageId": 172169
                            },
                            "venueInfo": {
                                "id": 58,
                                "ground": "Arnos Vale Ground",
                                "city": "Kingstown, St Vincent",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 11,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 115,
                                    "wickets": 7,
                                    "overs": 20
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 114,
                                    "wickets": 7,
                                    "overs": 20
                                }
                            }
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87717,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "32nd Match, Group C",
                            "matchFormat": "T20",
                            "startDate": "1718411400000",
                            "endDate": "1718424000000",
                            "state": "Complete",
                            "status": "New Zealand won by 9 wkts",
                            "team1": {
                                "teamId": 44,
                                "teamName": "Uganda",
                                "teamSName": "UGA",
                                "imageId": 495000
                            },
                            "team2": {
                                "teamId": 13,
                                "teamName": "New Zealand",
                                "teamSName": "NZ",
                                "imageId": 172128
                            },
                            "venueInfo": {
                                "id": 500,
                                "ground": "Brian Lara Stadium",
                                "city": "Tarouba, Trinidad",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 13,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 40,
                                    "wickets": 10,
                                    "overs": 18.4
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 41,
                                    "wickets": 1,
                                    "overs": 5.2
                                }
                            }
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87724,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "33rd Match, Group A",
                            "matchFormat": "T20",
                            "startDate": "1718461800000",
                            "endDate": "1718474400000",
                            "state": "Complete",
                            "status": "Match abandoned due to wet outfield (no toss)",
                            "team1": {
                                "teamId": 2,
                                "teamName": "India",
                                "teamSName": "IND",
                                "imageId": 172115
                            },
                            "team2": {
                                "teamId": 26,
                                "teamName": "Canada",
                                "teamSName": "CAN",
                                "imageId": 172140
                            },
                            "venueInfo": {
                                "id": 270,
                                "ground": "Central Broward Regional Park Stadium Turf Ground",
                                "city": "Lauderhill, Florida",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87731,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "34th Match, Group B",
                            "matchFormat": "T20",
                            "startDate": "1718470800000",
                            "endDate": "1718483400000",
                            "state": "Complete",
                            "status": "England won by 41 runs (DLS method)",
                            "team1": {
                                "teamId": 9,
                                "teamName": "England",
                                "teamSName": "ENG",
                                "imageId": 172123
                            },
                            "team2": {
                                "teamId": 161,
                                "teamName": "Namibia",
                                "teamSName": "NAM",
                                "imageId": 172229
                            },
                            "venueInfo": {
                                "id": 109,
                                "ground": "Sir Vivian Richards Stadium",
                                "city": "North Sound, Antigua",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 9,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 122,
                                    "wickets": 5,
                                    "overs": 10
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 84,
                                    "wickets": 3,
                                    "overs": 10
                                }
                            }
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Sun, 16 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87738,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "35th Match, Group B",
                            "matchFormat": "T20",
                            "startDate": "1718497800000",
                            "endDate": "1718510400000",
                            "state": "Complete",
                            "status": "Australia won by 5 wkts",
                            "team1": {
                                "teamId": 23,
                                "teamName": "Scotland",
                                "teamSName": "SCO",
                                "imageId": 172137
                            },
                            "team2": {
                                "teamId": 4,
                                "teamName": "Australia",
                                "teamSName": "AUS",
                                "imageId": 172117
                            },
                            "venueInfo": {
                                "id": 59,
                                "ground": "Daren Sammy National Cricket Stadium",
                                "city": "Gros Islet, St Lucia",
                                "timezone": "-04:00"
                            },
                            "currBatTeamId": 4,
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        },
                        "matchScore": {
                            "team1Score": {
                                "inngs1": {
                                    "inningsId": 1,
                                    "runs": 180,
                                    "wickets": 5,
                                    "overs": 20
                                }
                            },
                            "team2Score": {
                                "inngs1": {
                                    "inningsId": 2,
                                    "runs": 186,
                                    "wickets": 5,
                                    "overs": 19.4
                                }
                            }
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87745,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "36th Match, Group A",
                            "matchFormat": "T20",
                            "startDate": "1718548200000",
                            "endDate": "1718560800000",
                            "state": "Preview",
                            "status": "Match starts at Jun 16, 14:30 GMT",
                            "team1": {
                                "teamId": 3,
                                "teamName": "Pakistan",
                                "teamSName": "PAK",
                                "imageId": 172116
                            },
                            "team2": {
                                "teamId": 27,
                                "teamName": "Ireland",
                                "teamSName": "IRE",
                                "imageId": 495001
                            },
                            "venueInfo": {
                                "id": 270,
                                "ground": "Central Broward Regional Park Stadium Turf Ground",
                                "city": "Lauderhill, Florida",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Mon, 17 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87752,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "37th Match, Group D",
                            "matchFormat": "T20",
                            "startDate": "1718580600000",
                            "endDate": "1718593200000",
                            "state": "Preview",
                            "status": "Match starts at Jun 17, 23:30 GMT",
                            "team1": {
                                "teamId": 6,
                                "teamName": "Bangladesh",
                                "teamSName": "BAN",
                                "imageId": 172120
                            },
                            "team2": {
                                "teamId": 72,
                                "teamName": "Nepal",
                                "teamSName": "NEP",
                                "imageId": 172169
                            },
                            "venueInfo": {
                                "id": 58,
                                "ground": "Arnos Vale Ground",
                                "city": "Kingstown, St Vincent",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87759,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "38th Match, Group D",
                            "matchFormat": "T20",
                            "startDate": "1718584200000",
                            "endDate": "1718596800000",
                            "state": "Preview",
                            "status": "Match starts at Jun 17, 00:30 GMT",
                            "team1": {
                                "teamId": 5,
                                "teamName": "Sri Lanka",
                                "teamSName": "SL",
                                "imageId": 172119
                            },
                            "team2": {
                                "teamId": 24,
                                "teamName": "Netherlands",
                                "teamSName": "NED",
                                "imageId": 172138
                            },
                            "venueInfo": {
                                "id": 59,
                                "ground": "Daren Sammy National Cricket Stadium",
                                "city": "Gros Islet, St Lucia",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87766,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "39th Match, Group C",
                            "matchFormat": "T20",
                            "startDate": "1718634600000",
                            "endDate": "1718647200000",
                            "state": "Upcoming",
                            "status": "Match starts at Jun 17, 14:30 GMT",
                            "team1": {
                                "teamId": 13,
                                "teamName": "New Zealand",
                                "teamSName": "NZ",
                                "imageId": 172128
                            },
                            "team2": {
                                "teamId": 287,
                                "teamName": "Papua New Guinea",
                                "teamSName": "PNG",
                                "imageId": 172336
                            },
                            "venueInfo": {
                                "id": 500,
                                "ground": "Brian Lara Stadium",
                                "city": "Tarouba, Trinidad",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Tue, 18 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87773,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "40th Match, Group C",
                            "matchFormat": "T20",
                            "startDate": "1718670600000",
                            "endDate": "1718683200000",
                            "state": "Upcoming",
                            "status": "Match starts at Jun 18, 00:30 GMT",
                            "team1": {
                                "teamId": 10,
                                "teamName": "West Indies",
                                "teamSName": "WI",
                                "imageId": 172124
                            },
                            "team2": {
                                "teamId": 96,
                                "teamName": "Afghanistan",
                                "teamSName": "AFG",
                                "imageId": 172188
                            },
                            "venueInfo": {
                                "id": 59,
                                "ground": "Daren Sammy National Cricket Stadium",
                                "city": "Gros Islet, St Lucia",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Wed, 19 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87780,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "Super 8 Group 2",
                            "matchFormat": "T20",
                            "startDate": "1718807400000",
                            "endDate": "1718820000000",
                            "state": "Upcoming",
                            "status": "Match starts at Jun 19, 14:30 GMT",
                            "team1": {
                                "teamId": 15,
                                "teamName": "United States",
                                "teamSName": "USA",
                                "imageId": 172130
                            },
                            "team2": {
                                "teamId": 11,
                                "teamName": "South Africa",
                                "teamSName": "RSA",
                                "imageId": 172126
                            },
                            "venueInfo": {
                                "id": 109,
                                "ground": "Sir Vivian Richards Stadium",
                                "city": "North Sound, Antigua",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Thu, 20 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87787,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "Super 8 Group 2",
                            "matchFormat": "T20",
                            "startDate": "1718843400000",
                            "endDate": "1718856000000",
                            "state": "Upcoming",
                            "status": "Match starts at Jun 20, 00:30 GMT",
                            "team1": {
                                "teamId": 9,
                                "teamName": "England",
                                "teamSName": "ENG",
                                "imageId": 172123
                            },
                            "team2": {
                                "teamId": 10,
                                "teamName": "West Indies",
                                "teamSName": "WI",
                                "imageId": 172124
                            },
                            "venueInfo": {
                                "id": 59,
                                "ground": "Daren Sammy National Cricket Stadium",
                                "city": "Gros Islet, St Lucia",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87794,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "Super 8 Group 1",
                            "matchFormat": "T20",
                            "startDate": "1718893800000",
                            "endDate": "1718906400000",
                            "state": "Upcoming",
                            "status": "Match starts at Jun 20, 14:30 GMT",
                            "team1": {
                                "teamId": 96,
                                "teamName": "Afghanistan",
                                "teamSName": "AFG",
                                "imageId": 172188
                            },
                            "team2": {
                                "teamId": 2,
                                "teamName": "India",
                                "teamSName": "IND",
                                "imageId": 172115
                            },
                            "venueInfo": {
                                "id": 55,
                                "ground": "Kensington Oval",
                                "city": "Bridgetown, Barbados",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Fri, 21 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87801,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "Super 8 Group 1",
                            "matchFormat": "T20",
                            "startDate": "1718929800000",
                            "endDate": "1718942400000",
                            "state": "Upcoming",
                            "status": "Match starts at Jun 21, 00:30 GMT",
                            "team1": {
                                "teamId": 4,
                                "teamName": "Australia",
                                "teamSName": "AUS",
                                "imageId": 172117
                            },
                            "team2": {
                                "teamId": 35,
                                "teamName": "D2",
                                "teamSName": "D2",
                                "imageId": 174284
                            },
                            "venueInfo": {
                                "id": 109,
                                "ground": "Sir Vivian Richards Stadium",
                                "city": "North Sound, Antigua",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87808,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "Super 8 Group 2",
                            "matchFormat": "T20",
                            "startDate": "1718980200000",
                            "endDate": "1718992800000",
                            "state": "Upcoming",
                            "status": "Match starts at Jun 21, 14:30 GMT",
                            "team1": {
                                "teamId": 9,
                                "teamName": "England",
                                "teamSName": "ENG",
                                "imageId": 172123
                            },
                            "team2": {
                                "teamId": 11,
                                "teamName": "South Africa",
                                "teamSName": "RSA",
                                "imageId": 172126
                            },
                            "venueInfo": {
                                "id": 59,
                                "ground": "Daren Sammy National Cricket Stadium",
                                "city": "Gros Islet, St Lucia",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Sat, 22 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87815,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "Super 8 Group 2",
                            "matchFormat": "T20",
                            "startDate": "1719016200000",
                            "endDate": "1719028800000",
                            "state": "Upcoming",
                            "status": "Match starts at Jun 22, 00:30 GMT",
                            "team1": {
                                "teamId": 15,
                                "teamName": "United States",
                                "teamSName": "USA",
                                "imageId": 172130
                            },
                            "team2": {
                                "teamId": 10,
                                "teamName": "West Indies",
                                "teamSName": "WI",
                                "imageId": 172124
                            },
                            "venueInfo": {
                                "id": 55,
                                "ground": "Kensington Oval",
                                "city": "Bridgetown, Barbados",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87822,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "Super 8 Group 1",
                            "matchFormat": "T20",
                            "startDate": "1719066600000",
                            "endDate": "1719079200000",
                            "state": "Upcoming",
                            "status": "Match starts at Jun 22, 14:30 GMT",
                            "team1": {
                                "teamId": 2,
                                "teamName": "India",
                                "teamSName": "IND",
                                "imageId": 172115
                            },
                            "team2": {
                                "teamId": 35,
                                "teamName": "D2",
                                "teamSName": "D2",
                                "imageId": 174284
                            },
                            "venueInfo": {
                                "id": 109,
                                "ground": "Sir Vivian Richards Stadium",
                                "city": "North Sound, Antigua",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Sun, 23 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87829,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "Super 8 Group 1",
                            "matchFormat": "T20",
                            "startDate": "1719102600000",
                            "endDate": "1719115200000",
                            "state": "Upcoming",
                            "status": "Match starts at Jun 23, 00:30 GMT",
                            "team1": {
                                "teamId": 96,
                                "teamName": "Afghanistan",
                                "teamSName": "AFG",
                                "imageId": 172188
                            },
                            "team2": {
                                "teamId": 4,
                                "teamName": "Australia",
                                "teamSName": "AUS",
                                "imageId": 172117
                            },
                            "venueInfo": {
                                "id": 58,
                                "ground": "Arnos Vale Ground",
                                "city": "Kingstown, St Vincent",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87836,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "Super 8 Group 2",
                            "matchFormat": "T20",
                            "startDate": "1719153000000",
                            "endDate": "1719165600000",
                            "state": "Upcoming",
                            "status": "Match starts at Jun 23, 14:30 GMT",
                            "team1": {
                                "teamId": 15,
                                "teamName": "United States",
                                "teamSName": "USA",
                                "imageId": 172130
                            },
                            "team2": {
                                "teamId": 9,
                                "teamName": "England",
                                "teamSName": "ENG",
                                "imageId": 172123
                            },
                            "venueInfo": {
                                "id": 55,
                                "ground": "Kensington Oval",
                                "city": "Bridgetown, Barbados",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Mon, 24 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87843,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "Super 8 Group 2",
                            "matchFormat": "T20",
                            "startDate": "1719189000000",
                            "endDate": "1719201600000",
                            "state": "Upcoming",
                            "status": "Match starts at Jun 24, 00:30 GMT",
                            "team1": {
                                "teamId": 10,
                                "teamName": "West Indies",
                                "teamSName": "WI",
                                "imageId": 172124
                            },
                            "team2": {
                                "teamId": 11,
                                "teamName": "South Africa",
                                "teamSName": "RSA",
                                "imageId": 172126
                            },
                            "venueInfo": {
                                "id": 109,
                                "ground": "Sir Vivian Richards Stadium",
                                "city": "North Sound, Antigua",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87850,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "Super 8 Group 1",
                            "matchFormat": "T20",
                            "startDate": "1719239400000",
                            "endDate": "1719252000000",
                            "state": "Upcoming",
                            "status": "Match starts at Jun 24, 14:30 GMT",
                            "team1": {
                                "teamId": 4,
                                "teamName": "Australia",
                                "teamSName": "AUS",
                                "imageId": 172117
                            },
                            "team2": {
                                "teamId": 2,
                                "teamName": "India",
                                "teamSName": "IND",
                                "imageId": 172115
                            },
                            "venueInfo": {
                                "id": 59,
                                "ground": "Daren Sammy National Cricket Stadium",
                                "city": "Gros Islet, St Lucia",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Tue, 25 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87857,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "Super 8 Group 1",
                            "matchFormat": "T20",
                            "startDate": "1719275400000",
                            "endDate": "1719288000000",
                            "state": "Upcoming",
                            "status": "Match starts at Jun 25, 00:30 GMT",
                            "team1": {
                                "teamId": 96,
                                "teamName": "Afghanistan",
                                "teamSName": "AFG",
                                "imageId": 172188
                            },
                            "team2": {
                                "teamId": 35,
                                "teamName": "D2",
                                "teamSName": "D2",
                                "imageId": 174284
                            },
                            "venueInfo": {
                                "id": 58,
                                "ground": "Arnos Vale Ground",
                                "city": "Kingstown, St Vincent",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Thu, 27 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87864,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "Semi Final 1",
                            "matchFormat": "T20",
                            "startDate": "1719448200000",
                            "endDate": "1719460800000",
                            "state": "Upcoming",
                            "status": "Match starts at Jun 27, 00:30 GMT",
                            "team1": {
                                "teamId": 106,
                                "teamName": "TBC",
                                "teamSName": "TBC",
                                "imageId": 172198
                            },
                            "team2": {
                                "teamId": 106,
                                "teamName": "TBC",
                                "teamSName": "TBC",
                                "imageId": 172198
                            },
                            "venueInfo": {
                                "id": 500,
                                "ground": "Brian Lara Stadium",
                                "city": "Tarouba, Trinidad",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        }
                    },
                    {
                        "matchInfo": {
                            "matchId": 87871,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "Semi Final 2",
                            "matchFormat": "T20",
                            "startDate": "1719498600000",
                            "endDate": "1719511200000",
                            "state": "Upcoming",
                            "status": "Match starts at Jun 27, 14:30 GMT",
                            "team1": {
                                "teamId": 106,
                                "teamName": "TBC",
                                "teamSName": "TBC",
                                "imageId": 172198
                            },
                            "team2": {
                                "teamId": 106,
                                "teamName": "TBC",
                                "teamSName": "TBC",
                                "imageId": 172198
                            },
                            "venueInfo": {
                                "id": 110,
                                "ground": "Providence Stadium",
                                "city": "Guyana",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        }
                    }
                ],
                "seriesId": 7476
            }
        },
        {
            "matchDetailsMap": {
                "key": "Sat, 29 Jun 2024",
                "match": [
                    {
                        "matchInfo": {
                            "matchId": 87878,
                            "seriesId": 7476,
                            "seriesName": "ICC Mens T20 World Cup 2024",
                            "matchDesc": "Final",
                            "matchFormat": "T20",
                            "startDate": "1719669600000",
                            "endDate": "1719682200000",
                            "state": "Upcoming",
                            "status": "Match starts at Jun 29, 14:00 GMT",
                            "team1": {
                                "teamId": 106,
                                "teamName": "TBC",
                                "teamSName": "TBC",
                                "imageId": 172198
                            },
                            "team2": {
                                "teamId": 106,
                                "teamName": "TBC",
                                "teamSName": "TBC",
                                "imageId": 172198
                            },
                            "venueInfo": {
                                "id": 55,
                                "ground": "Kensington Oval",
                                "city": "Bridgetown, Barbados",
                                "timezone": "-04:00"
                            },
                            "seriesStartDt": "1717200000000",
                            "seriesEndDt": "1719792000000",
                            "isTimeAnnounced": true
                        }
                    }
                ],
                "seriesId": 7476
            }
        }
    ]
}

  useEffect(()=>{
    //matchInfo();
    setSeriesData(data)
    
  },[])


  const matchDetails = data.matchDetails

  // console.log(seriesData);
  // console.log(matchDetails[0].matchDetailsMap);
  console.log(currMatchInfo);
  
  
  return (
    <MatchContextProvider value={{seriesData , currMatchInfo , setCurrMatchInfo }}>
      <div className='min-w-full min-h-screen bg-slate-800 '>
        <Router>
        <NavBar />
            <Routes >
                  <Route path='/' element={<Home/>} />
                  <Route path='/livescore' element={<LiveScore/>} />
                  <Route path='/matchinfo' element={<MatchInfo/>} />
            </Routes>
        </Router>
      </div>
    </MatchContextProvider>
  )
}

export default App