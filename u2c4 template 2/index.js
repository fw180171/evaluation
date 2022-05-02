// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",match);
var matcArr = JSON.parse(localStorage.getItem("schedule")) || [];
function match(){
    event.preventDefault();
 var obj={
    matchNumber:masaiForm.matchNum.value,
    team1:masaiForm.teamA.value,
    team2:masaiForm.teamB.value,
    date:masaiForm.date.value,
    venue:masaiForm.venue.value,
  }
  console.log(obj)
  matcArr.push(obj)
  localStorage.setItem("schedule", JSON.stringify(matcArr));
 window.location.href="matches.html";
}


 

  

