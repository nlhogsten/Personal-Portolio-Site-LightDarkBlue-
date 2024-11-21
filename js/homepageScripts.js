/*----------------------------- Light Dark Blue Header Events ----------------------------------*/
var homepageVideo = document.getElementById("homepage-video");
/*---------------------- Light ----------------------*/ 
var lightTitle = document.getElementsByClassName("light-header")[0];

lightTitle.addEventListener("click", function() {
    if (homepageVideo.src.endsWith("assets/Homepage.assets/homepage01.mp4")) {
        homepageVideo.src = "assets/Homepage.assets/homepage02.mp4";
      } else {
        homepageVideo.src = "assets/Homepage.assets/homepage01.mp4";
    }
});
/*----------------------- Dark ------------------------*/ 
var darkTitle = document.getElementsByClassName("dark-header")[0];

darkTitle.addEventListener("click", function() {
    if (homepageVideo.src.endsWith("assets/Homepage.assets/homepage01.mp4")) {
        homepageVideo.style.transition = 'ease-out 5s';
        homepageVideo.src = "assets/Homepage.assets/homepage03.mp4";
      } else {
        homepageVideo.src = "assets/Homepage.assets/homepage01.mp4";
    }
});
/*------------------------ Blue ------------------------*/ 
var blueTitle = document.getElementsByClassName("blue-header")[0];

blueTitle.addEventListener("click", function(){
    if (homepageVideo.src.endsWith("assets/Homepage.assets/homepage01.mp4")) {
        homepageVideo.src = "assets/Homepage.assets/homepage04.mp4";
      } else {
        homepageVideo.src = "assets/Homepage.assets/homepage01.mp4";
    }
});

