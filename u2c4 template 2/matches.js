// write js code here corresponding to matches.html

  var marr=JSON.parse(localStorage.getItem("schedule"))
  displayData(marr);

  var farr=JSON.parse(localStorage.getItem("favourites")) || [];

function displayData(data){

   document.querySelector("tbody").innerHTML="";
    data.foreach(function(elem){
        var tr=document.createElement("tr");

        var  td1=document.createElement("td");
        td1.innerText=elem.matchNum;
        var td2=document.createElement("td");
        td2.innerText=elem.teamA;
        var td3=document.createElement("td");
        td4.innerText=elem.teamB;
        var td4=document.createElement("td");
        td4.innerText=elem.date;
        var td5=document.createElement("td");
        td5.innerText=elem.venue;
        var td6=document.createElement("td");
        td6.innerText="favourites"
        td6.style.color="green";
        td6.addEventListener("click",function(){
            favoritefun(elem);
        });
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);

    })
    function  favoritefun(elem){
        farr.push(elem)
        localStorage.setItem("favourites", JSON.stringify(farr));
       
    }
}

