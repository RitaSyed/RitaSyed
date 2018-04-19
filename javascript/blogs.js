
const writeToDom = (stringToPrint, divId) => {
  //take string and innerHTML to the div
  var myDiv = document.getElementById(divId);
  // console.log("myDiv", myDiv);
  myDiv.innerHTML += stringToPrint;
}

const createBlogPosts = (blogsArray) => {

  for(var i=0; i<blogsArray.length; i++){
    var blogsString = "";
    blogsString += "<article><h3>" + blogsArray[i].title + "</h3>";
    blogsString += "<p>" + blogsArray[i].date + "</p>";
    blogsString += "<p>" + blogsArray[i].post + "</p>";
    blogsString += "</article>";
    writeToDom(blogsString, "my-projects");
  }
}

function executeThisCodeIfXHRFails () {
  console.log("error");
}

function executeThisCodeAfterFileLoaded () {
  const data = JSON.parse(this.responseText);
  createBlogPosts(data.blogs);
  console.log(data.blogs);
}

const startApplication = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("GET","../db/projects.json");
  myRequest.send();
  // console.log(myRequest);
};

startApplication ();


