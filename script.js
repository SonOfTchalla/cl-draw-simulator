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

function genRandomLoc(){
    let number = genRandomNum(2);
    if(number === 0){
        return " (H)";
    }else{
        return " (A)";
    }
}

let team = "";
let opponent = "";

//count variables for number of teams from each pot drawn
let teamP1Count = 0;
let teamP2Count = 0;
let teamP3Count = 0;
let teamP4Count = 0;

//event listener
let drawFired = false
drawBtn.addEventListener("click", () => {
    if(!drawFired){
        team = teams[genRandomNum(36)];
        teamEl.textContent += team.name;
        drawFired = true;
    }
})

//step 4: for that team, randomly select n/4 team that they will play, exluding themseles. randomly selecting wheher home or away. 
let fixtureList = [];
let fixtureCount = 1;
let genFired = false;
let place = "";

genBtn.addEventListener("click", () => {
    if(!genFired){
        while(fixtureCount != 9){
            opponent = teams[genRandomNum(36)];
            place = genRandomLoc();
            if(place === " (H)"){
                if(team.homeGames === 4){
                    fixtureList.push(" " + opponent.name + " (A)")
                    fixtureCount++;
                    team.awayGames++;
                }else{
                    fixtureList.push(" " + opponent.name + place)
                    fixtureCount++;
                    team.homeGames++;
                }
            }
            else{
                if(team.awayGames === 4){
                    fixtureList.push(" " + opponent.name + " (H)")
                    fixtureCount++;
                    team.homeGames++;
                }else{
                    fixtureList.push(" " + opponent.name + place)
                    fixtureCount++;
                    team.awayGames++;
                }
            }
        }
        genFired = true;
        fixEl.textContent += fixtureList;
    }  
})


/*
To-do: notes for next step

1. Randomly select 8 teams but no more than two from each pot and explicitly exclude self
2. Randomly select home or away but no more than 4 home and away fixtures EACH, eight in total (done)
3. Will likely need pot count variable for each pot and home and away count variable for each team, those should be in object. Utilise them
 */