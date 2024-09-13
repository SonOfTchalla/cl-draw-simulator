//How will Champions League simulator work

//Step 1: Create objects of n teams
let teams = [
    {
        "name" : "REAL MADRID",
        "Pot" : 1,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "MANCHESTER CITY",
        "Pot" : 1,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "BAYERN MUNCHEN",
        "Pot" : 1,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "PARIS SAINT-GERMAIN",
        "Pot" : 1,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "LIVERPOOL",
        "Pot" : 1,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "INTER",
        "Pot" : 1,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "DORTMUND",
        "Pot" : 1,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "LEIPZIG",
        "Pot" : 1,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "BARCELONA",
        "Pot" : 1,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "LEVERKUSEN",
        "Pot" : 2,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "ATLETICO DE MADRID",
        "Pot" : 2,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "ATALANTA",
        "Pot" : 2,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "JUVENTUS",
        "Pot" : 2,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "BENFICA",
        "Pot" : 2,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "ARSENAL",
        "Pot" : 2,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "CLUB BRUGGE",
        "Pot" : 2,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "SHAKHTAR DONETSK",
        "Pot" : 2,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "AC MILAN",
        "Pot" : 2,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "FEYENOORD",
        "Pot" : 3,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "SPORTING CP",
        "Pot" : 3,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "PSV EINDHOVEN",
        "Pot" : 3,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "GNK DINAMO",
        "Pot" : 3,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "SALZBURG",
        "Pot" : 3,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "LILLE",
        "Pot" : 3,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "CRVENA ZDVEZDA",
        "Pot" : 3,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "YOUNG BOYS",
        "Pot" : 3,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "CELTIC",
        "Pot" : 3,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "SLOVAN BRATISLAVA",
        "Pot" : 4,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "MONACO",
        "Pot" : 4,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "SPARTA PRAHA",
        "Pot" : 4,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "ASTON VILLA",
        "Pot" : 4,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "BOLOGNA",
        "Pot" : 4,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "GIRONA",
        "Pot" : 4,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "STUTTGART",
        "Pot" : 4,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "STRUM GRAZ",
        "Pot" : 4,
        "homeGames": 0,
        "awayGames": 0
    },
    {
        "name" : "BREST",
        "Pot" : 4,
        "homeGames": 0,
        "awayGames": 0
    },
]
//step 2: create 4 pot arrays, each containing n/4 team objects
let pot1 = [];
let pot2 = [];
let pot3 = [];
let pot4 = [];

teams.map((team) => {
    if(team.Pot === 1){
        pot1.push(team);
    }else if(team.Pot === 2){
        pot2.push(team);
    }else if(team.Pot === 3){
        pot3.push(team);
    }else{
        pot4.push(team);
    }
});

//step 3: start the draw, randomly select a team from all the pots.

//Query Selectors
let drawBtn = document.querySelector(".gen");
let teamEl = document.querySelector("#team");
let genBtn = document.querySelector("#genFix");
let fixEl = document.querySelector("#fixtures");

//random number generator
function genRandomNum(num){
    return Math.floor(Math.random() * num);
}

//step 4: for that team, randomly select n/4 team that they will play, exluding themseles. ranmly selecting wheher home or away. 