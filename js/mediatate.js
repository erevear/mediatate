var currentSlide = 1;
var x = Math.floor((Math.random() * 2) + 1);
x-=1;
var userGroup = ["Variation", "Control"]
var designation = userGroup[x];

window.onload = function () {
  createSlideshow();
  renderNewsletterSignup();
  document.getElementById('previous-slide').addEventListener('click', function() {
    createSlideshow('back');
  });
  document.getElementById('next-slide').addEventListener('click', function() {
    createSlideshow('forward');
  });
  document.getElementById('show-list').addEventListener('click', function() {
    switchView();
  });
  document.getElementById('show-slide').addEventListener('click', function() {
    createSlideshow()
    var controls = document.getElementsByClassName("slideshow-control");
    for (i = 0; i < controls.length; i++) {
      controls[i].style.display = "block";
    }
    document.getElementById("show-list").style.display = "block";
    document.getElementById("show-slide").style.display = "none";
  });
  document.getElementById('show-slide').addEventListener('click', function() {
    createSlideshow()
    var controls = document.getElementsByClassName("slideshow-control");
    for (i = 0; i < controls.length; i++) {
      controls[i].style.display = "block";
    }
  });
  var thumbs = document.getElementsByClassName('like')
  for (var i = 0; i < thumbs.length; i++) {
      thumbs[i].addEventListener('click', function() {
      like(this.id);
    });
  }
  document.getElementById('submit-email').addEventListener('click', function() {
    validateEmail(document.getElementById('email-form'));
  });
  document.getElementById('close').addEventListener('click', function() {
    document.getElementById('submit_email_container').style.display = "none";
  });
}
function createSlideshow(clicked){
  var slides = document.getElementsByClassName("slide");
  if(clicked == "forward"){
    if(currentSlide >= slides.length){
      currentSlide = 1;
    }else{
      currentSlide +=1;
    }
  }
  if(clicked == "back"){
    if(currentSlide < slides.length){
      currentSlide = slides.length;
    }else{
      currentSlide -=1;
    }
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[currentSlide-1].style.display = "block";
}
function switchView(){
  var slides = document.getElementsByClassName("slide");
  var controls = document.getElementsByClassName("slideshow-control");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "block";
  }
  for (i = 0; i < controls.length; i++) {
      controls[i].style.display = "none";
  }
  document.getElementById("show-slide").style.display = "block";
  document.getElementById("show-list").style.display = "none";
}
function like(image_liked){
  numLikes = document.getElementById(image_liked).childNodes[1].innerHTML;
  numLikes = parseInt(numLikes) + 1;
  document.getElementById(image_liked).childNodes[1].innerHTML = numLikes;
}
function validateEmail(form){
  var email = form.elements[0].value
  var emailPattern = /[A-z0-9]+@[A-z0-9]+\.[A-z]{2,}/
  var validEmail = new RegExp(emailPattern)
  var email = form.elements[0].value
  if(!email.length || !validEmail.test(email)){
    alert("please enter a valid email address")
  }
  if(email.length && validEmail.test(email)){
    document.getElementById("email-form").style.display="none";
    document.getElementById("thankyou").style.display="block";
  }
}
function renderNewsletterSignup(){
  var emailBox = document.getElementById("submit_email_container");
  if (designation == "Control"){
    emailBox.className += "";
  }
  if (designation == "Variation"){
    emailBox.className += " popup";
    document.getElementById('close').style.display = "block";
  }
}
