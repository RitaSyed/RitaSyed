var blogs = [
  {
    id: "blog1", 
    title: "Week 1 of NSS", 
    date: "02/20/18", 
    post: "I think the most interesting topic this week was GIT and github. GIT is challenging to learn at first because of it unique concept. However, once I practiced using GIT, I understood how it makes 'life' easier for developers. I wish that before I started NSS, I had used GIT and github for practice on my own. On the other hand, GIT commands should be used carefully, especially git rm command!"
    },
    {
    id: "blog2", 
    title: "Week 3 of NSS", 
    date: "03/06/18", 
    post: "Week 3 of NSS started with “introduction” of JavaScript. I put it in quotes because I felt that this introduction to JavaScript accelerated to more advance topics such as looping through arrays on the second day of class after we started JavaScript. Moreover, there was a homework of array challenges! This is where I wrote and solved my very FIRST JavaScript challenges! Every time I solved a challenge, I felt rush of energy! I think I am addicted to coding..."
    },
    {
    id: "blog3", 
    title: "Week 4 of NSS", 
    date: "03/13/18", 
    post: "Week 4 of NSS. I learned Objects and Functions. And of course, more homework challenges on Objects and Functions!!! I think it’s getting easier to solve challenges and it’s less time consuming. I spend a lot of time reading MDN and researching to complete challenges using different approaches."
    },
    {
    id: "blog4", 
    title: "Week 6 of NSS", 
    date: "03/27/18", 
    post: "Weeks 5 and 6 of NSS. I completed a limited Language Translator, Music Band website, and Travel Diary projects. The Translator project translates from English to 3 other predefined languages with limited vocabulary. While completing this project, I learned to break down project into small and simple steps. This approach helped me complete this and the following projects, and helped me write tickets more efficiently. Music Band Website was a team project where each member wrote tickets and completed it. I, as a team member, was working on a specific part of the project according to the picked ticket and then pushed it to GitHub. I resolved my GitHub conflicts, reviewed and approved pull requests of other team members. Communication was the key to successful completion of the project before deadline.The Travel Diary project was one of my favorite projects. I completed all the bonus assignments, including delete and edit a diary entry. I would rather go and do more coding then write about it... LOL I enjoy working on projects with a team but I am also comfortable to work on projects alone, and research and solve code issues."
    }
];

function writeToDom(stringToPrint, divId){
  //take string and innerHTML to the div
  var myDiv = document.getElementById(divId);
  // console.log("myDiv", myDiv);
  myDiv.innerHTML += stringToPrint;
}

function createBlogPosts(){
  for(var i=0; i<blogs.length; i++){
    var blogsString = "";
    blogsString += "<article class='content-container'><h3>" + blogs[i].title + "</h3>";
    blogsString += "<p>" + blogs[i].date + "</p>";
    blogsString += "<p>" + blogs[i].post + "</p>";
    blogsString += "</article>";
    writeToDom(blogsString, "my-projects");
  }
}
createBlogPosts();

/* <h2>Week 1 of NSS</h2>
    <p>I think the most interesting topic this week was GIT and github. GIT is challenging to learn at first because of it unique concept. However, once I practiced using GIT, I understood how it makes "life" easier for developers. I wish that before I started NSS, I had used GIT and github for practice on my own. On the other hand, GIT commands should be used carefully, especially git rm command!</p>
    <h2>Week 3 of NSS</h2>
    <p>Week 3 of NSS started with “introduction” of JavaScript. I put it in quotes because I felt that this introduction to JavaScript accelerated to more advance topics such as looping through arrays on the second day of class after we started JavaScript. Moreover, there was a homework of array challenges! This is where I wrote and solved my very FIRST JavaScript challenges! Every time I solved a challenge, I felt rush of energy! I think I am addicted to coding...</p>
    <h2>Week 4 of NSS</h2>
    <p>Week 4 of NSS. I learned Objects and Functions. And of course, more homework challenges on Objects and Functions!!! I think it’s getting easier to solve challenges and it’s less time consuming. I spend a lot of time reading MDN and researching to complete challenges using different approaches.</p> */