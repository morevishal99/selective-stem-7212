let user = JSON.parse(localStorage.getItem("signIndetail")) || [];

let userstatus = JSON.parse(localStorage.getItem("User"));

// ----------topslide--------------

let startFrame = 0;
showFrames(startFrame);

function nextFrame() {
  showFrames((startFrame += 1));
}

function prevFrame() {
  showFrames((startFrame -= 1));
}

function showFrames(changeTo) {
  let slides = document.getElementsByClassName("slide");

  if (changeTo > slides.length) {
    startFrame = 1;
  }
  if (changeTo < 1) {
    startFrame = slides.length;
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[startFrame - 1].style.display = "block";
}

// ----------------midleslide---------------

let startFrames = 0;
showFrame(startFrames);

function nextF() {
  showFrame((startFrames += 1));
}

function prevF() {
  showFrame((startFrames -= 1));
}

function showFrame(changeTo) {
  let slide = document.getElementsByClassName("slidee");

  if (changeTo > slide.length) {
    startFrames = 1;
  }
  if (changeTo < 1) {
    startFrames = slide.length;
  }

  for (let slidee of slide) {
    slidee.style.display = "none";
  }
  slide[startFrames - 1].style.display = "block";
}

display(user);

function display(ele) {
  user.forEach(function (ele) {
    document.querySelector("#displayname").innerText = ele.name ;
    document.querySelector("#UserName").innerText ="Welcome Back"+" " + ele.name+"!" ;
  });
}

// function alert() {
//   alert = "SignIn first";
//   window.location.href = "signin.html";
// }

if (userstatus==true){
    document.querySelector("#login").innerText =null ;
    document.querySelector("#Link").innerText =`<a href="login.html">Log In/sign IN</a>`+"ok" ;
    
}else{
    document.querySelector("#login").innerHTML= `<a href="login.html">Log In/sign IN</a>`
}
