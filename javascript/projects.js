var projects = [
  {
    id: "project1", 
    title: "Project title 1", 
    imageUrl: "http://www.themalaysiantimes.com.my/wp-content/uploads/2017/05/06-train-cat-shake-hands-1024x682.jpg", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum id officia quos sint minus enim nihil? Dicta, nihil voluptatibus ipsa reprehenderit odio quod architecto, dolorum impedit, ullam pariatur placeat.",
    githubUrl: "https://github.com/RitaSyed/RitaSyed.github.io"
    },
    {
    id: "project2", 
    title: "Project title 2", 
    imageUrl: "http://www.themalaysiantimes.com.my/wp-content/uploads/2017/05/06-train-cat-shake-hands-1024x682.jpg", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum id officia quos sint minus enim nihil? Dicta, nihil voluptatibus ipsa reprehenderit odio quod architecto, dolorum impedit, ullam pariatur placeat.",
    githubUrl: "https://github.com/RitaSyed/RitaSyed.github.io"
    },
    {
    id: "project3", 
    title: "Project title 3", 
    imageUrl: "http://www.themalaysiantimes.com.my/wp-content/uploads/2017/05/06-train-cat-shake-hands-1024x682.jpg", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum id officia quos sint minus enim nihil? Dicta, nihil voluptatibus ipsa reprehenderit odio quod architecto, dolorum impedit, ullam pariatur placeat.",
    githubUrl: "https://github.com/RitaSyed/RitaSyed.github.io"
    },
    {
    id: "project4", 
    title: "Project title 4", 
    imageUrl: "http://www.themalaysiantimes.com.my/wp-content/uploads/2017/05/06-train-cat-shake-hands-1024x682.jpg", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum id officia quos sint minus enim nihil? Dicta, nihil voluptatibus ipsa reprehenderit odio quod architecto, dolorum impedit, ullam pariatur placeat.",
    githubUrl: "https://github.com/RitaSyed/RitaSyed.github.io"
    },
    {
    id: "project5", 
    title: "Project title 5", 
    imageUrl: "http://www.themalaysiantimes.com.my/wp-content/uploads/2017/05/06-train-cat-shake-hands-1024x682.jpg", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum id officia quos sint minus enim nihil? Dicta, nihil voluptatibus ipsa reprehenderit odio quod architecto, dolorum impedit, ullam pariatur placeat.",
    githubUrl: "https://github.com/RitaSyed/RitaSyed.github.io"
    },
    {
    id: "project6", 
    title: "Project title 6", 
    imageUrl: "http://www.themalaysiantimes.com.my/wp-content/uploads/2017/05/06-train-cat-shake-hands-1024x682.jpg", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum id officia quos sint minus enim nihil? Dicta, nihil voluptatibus ipsa reprehenderit odio quod architecto, dolorum impedit, ullam pariatur placeat.",
    githubUrl: "https://github.com/RitaSyed/RitaSyed.github.io"
    }
];

function writeToDom(stringToPrint, divId){
  //take string and innerHTML to the div
  var myDiv = document.getElementById(divId);
  // console.log("myDiv", myDiv);
  myDiv.innerHTML += stringToPrint;
}

function createProjectCards(){
  for(var i=0; i<projects.length; i++){
    var arrayString = "";
    arrayString += "<div><h3>" + projects[i].title + "</h3>";
    arrayString += "<img src='"+projects[i].imageUrl+"'>";
    arrayString += "<p>" + projects[i].description + "</p>";
    arrayString += "<div><a href='"+projects[i].githubUrl+"'/a>";
    arrayString += "Check out my GitHub" + "</div>";
    arrayString += "</div>";
    writeToDom(arrayString, "project1");
  }
}
createProjectCards();