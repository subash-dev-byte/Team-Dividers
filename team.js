//get element
let inputValues = document.querySelector("#input_values");
let divideTeams = document.querySelector("#divide_teams");
let reset = document.querySelector("#reset");

//varaible intialze for the sepate team
let result;
let teamA;
let teamB;

//apeend in the teams
const section = document.querySelector("#section");
let container = document.querySelector("#container");
let team1 = document.querySelector("#team1");
let team2 = document.querySelector("#team2");

divideTeams.addEventListener("click", () => {
  if (inputValues.value === "") {
    alert("enter the team members");
  } else {
    function team(players) {
  for (let i = players.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));  
    [players[i], players[j]] = [players[j], players[i]];
  }
  return players; 
}
  //  console.log(team(inputValues.value.split(",")));
   

    result = team(inputValues.value.split(","));

    console.log(result)
    teamA = result.slice(0, Math.ceil(result.length / 2));
    teamB = result.slice(Math.ceil(result.length / 2));
    console.log(teamA);
    console.log(teamB)

    team1.className =
      " sm:w-[550px] ps-[25px] pe-[50px] pt-[30px] rounded-[10px]  bg-white  shadow-sm sm:shadow-lg ";

    team2.className =
      "  sm:w-[550px] ps-[25px] pe-[50px] pt-[30px] rounded-[10px] bg-white  shadow-sm sm:shadow-lg";

    //team names
    const teamFirstName = document.createElement("h2");
    teamFirstName.innerText = "Team A";
    teamFirstName.className =
      "text-3xl font-semibold text-center text-[#164765] mb-8";
    team1.appendChild(teamFirstName);

    const teamSecondName = document.createElement("h2");
    teamSecondName.innerText = "Team B";
    teamSecondName.className =
      "text-3xl font-semibold text-center text-[#164765] mb-8";
    team2.appendChild(teamSecondName);

    //team members-1
    teamA.forEach((element, i) => {
      const teamMemberContainers = document.createElement("div");
      teamMemberContainers.className =
        "flex items-center gap-4 bg-[#eaf4f7] px-6 py-4  rounded-xl shadow-sm mb-[25px] ";
      const memebers = document.createElement("p");
      memebers.className = "text-lg text-[#194e64] font-medium";
      memebers.innerText = `${i + 1}.${element}`;
      teamMemberContainers.appendChild(memebers);

      team1.appendChild(teamMemberContainers);
    });

    //team-members-2

    teamB.forEach((element, i) => {
      const teamMemberContainers = document.createElement("div");
      teamMemberContainers.className =
        "flex items-center gap-4 bg-[#eaf4f7] px-6 py-4 rounded-xl shadow-sm mb-[25px]";
      const memebers = document.createElement("p");
      memebers.className = "text-lg text-[#194e64] font-medium";
      memebers.innerText = `${i + 1}.${element}`;
      teamMemberContainers.appendChild(memebers);

      team2.appendChild(teamMemberContainers);
    });
  }
});

reset.addEventListener("click", () => {
  inputValues.value = "";
  section.style.display = "none";
});
