// console.log("subash chandra bose");
let input_value=document.querySelector("#text_area")
const divide=document.querySelector("#divide")
divide.addEventListener("click",()=>{
if(input_value===""){
   alert("please the team members")
    
}
  else{
    //shufle the array using the ifhser
        function shuffle(players) {
  for (let i = 0; i <players.length; i++) {   //for(let i=players.length-1;i>0;i--)
    let j = Math.floor(Math.random() * (players.length)); 
    [players[i], players[j]] = [players[j], players[i]];
  }
return players;
}
let result=shuffle(input_value.value.split(","));
let team_a=result.slice(0,Math.ceil(result.length/2));
let team_b=result.slice(Math.ceil(result.length/2));
console.log(team_a);
console.log(team_b);



  }

})









