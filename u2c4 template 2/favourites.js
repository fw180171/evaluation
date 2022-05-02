// write js code here corresponding to favourites.htm
var farr=JSON.parse(localStorage.getItem("favourites"))
displayData(farr);

function displayData(data){

 document.querySelector("tbody").innerHTML="";
  data.foreach(function(elem,index){
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
      td6.innerText="Delete"
      td6.style.color="red";
      td6.addEventListener("click",function(){
          deleteFun(elem,index);
      });
      tr.append(td1,td2,td3,td4,td5,td6);
      document.querySelector("tbody").append(tr);

  })
  function  deleteFun(elem){
      farr.push(elem,index)
      localStorage.setItem("favourites", JSON.stringify(farr));
     window.location.reload();
  }
}

  
  
  