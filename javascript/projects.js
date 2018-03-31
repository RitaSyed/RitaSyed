const writeToDom = (stringToPrint, divId) => {
  //take string and innerHTML to the div
  var myDiv = document.getElementById(divId);
  // console.log("myDiv", myDiv);
  myDiv.innerHTML += stringToPrint;
}

const createProjectCards = (projectsArray) => {
  for(var i=0; i<projectsArray.length; i++){
    var arrayString = "";
    arrayString += "<div><h3>" + projectsArray[i].title + "</h3>";
    arrayString += "<img src='"+projectsArray[i].imageUrl+"'>";
    arrayString += "<p>" + projectsArray[i].description + "</p>";
    arrayString += "<div><a href='"+projectsArray[i].githubUrl+"'/a>";
    arrayString += "Check out my GitHub" + "</div>";
    arrayString += "</div>";
    writeToDom(arrayString, "project1");
  }
}

function executeThisCodeIfXHRFails () {
  console.log("error");
}

function executeThisCodeAfterFileLoaded () {
  const data = JSON.parse(this.responseText);
  createProjectCards(data.projects);
  console.log(data.projects);
}

const startApplication = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("GET","../db/projects.json");
  myRequest.send();
  console.log(myRequest);
};

startApplication ();


