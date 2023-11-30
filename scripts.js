"use strict";

const albums = [
    {
        name:"Living Room",
        desc:"Our first album! Where it all started!",
        imgSrc: "images/livingRoom.png",
        albumID: 0
    },
    {
        name:"The Click",
        desc:"This album is home to some of our most iconic tunes such as Weak and Burn the House Down!",
        imgSrc: "images/theClick.jpg",
        albumID: 1
    },
    {
        name:"Neotheatre",
        desc:"Welcome to the Neotheater, won't everybody take their seats?",
        imgSrc: "images/neotheater.jpg",
        albumID: 2
    },
    {
        name:"OKO",
        desc:"Home of our most popular song of all time, Bang!",
        imgSrc: "images/oko.jpg",
        albumID: 3
    },
    {
        name:"Maybe Man",
        desc:"Our newest album! Kickstarting our Arena tour!",
        imgSrc: "images/maybeMan.jpeg",
        albumID: 4
    }
]

let newUser = {
    userFullName: "",
    userEmail: "",
    userPhone: "",
    userComments: "",
    getUser() {
      return "<strong>Full Name:</strong> " + this.userFullName + "<br><strong>Email:</strong> " + this.userEmail + "<br><strong>Phone Number:</strong> " + this.userPhone + "<br><strong>Comments:</strong> " + this.userComments;
    }
  };

let messages = {
    success: "The form was submitted successfully",
    failure: "There was an issue when trying to submit the form, please correct your errors and try again",
    fullNameMsg: "Full name must have two characters per name and no special characters",
    emailMsg: "Please enter a valid email address",
    phoneMsg: "Please enter a valid phone",
    commentsMsg: "Please enter comments"
};

//Starting Product Picker//
let currentIndex = 0
let currentAlbum = albums[currentIndex];
//-----------------------//

const currentAlbumSelectionImage = document.getElementById("currentAlbumSelectionImage");
const currentAlbumSelectionName = document.getElementById("currentAlbumSelectionName");
const currentAlbumSelectionDesc = document.getElementById("currentAlbumSelectionDesc");

const item1 = document.getElementById("album1");
const item2 = document.getElementById("album2");
const item3 = document.getElementById("album3");
const item4 = document.getElementById("album4");
const item5 = document.getElementById("album5");

const currentRandomNumber = getRandomNumber();
console.log(currentRandomNumber);
const userInput = document.getElementById("userInput");
let resultsP = document.getElementById("results");
const playBtn = document.getElementById("gamePlay");
playBtn.addEventListener('click',checkForWinner);

currentAlbumSelectionImage.src = albums[currentIndex].imgSrc;
currentAlbumSelectionName.innerText = albums[currentIndex].name;
currentAlbumSelectionDesc.innerText = albums[currentIndex].desc;

let currentMode = "darkMode";
const pageBody = document.getElementById("pageBody");
const darkLightBtn = document.getElementById("darkLightBtn");
const pageFooter = document.getElementById("pageFooter");
darkLightBtn.addEventListener('click',toggleMode)

console.log(item1);

item1.addEventListener('click',()=>{
    currentIndex = 0;
    checkAlbum();
});

item2.addEventListener('click',()=>{
    currentIndex = 1;
    checkAlbum();
});

item3.addEventListener('click',()=>{
    currentIndex = 2;
    checkAlbum();
});

item4.addEventListener('click',()=>{
    currentIndex = 3;
    checkAlbum();
});

item5.addEventListener('click',()=>{
    currentIndex = 4;
    checkAlbum();
});

function checkAlbum(){
    console.log(currentIndex);
    for(let album of albums){
        if(currentIndex == album.albumID){
            currentAlbumSelectionImage.src = album.imgSrc;
            currentAlbumSelectionName.innerText = album.name;
            currentAlbumSelectionDesc.innerText = album.desc;
        }
    }
}

function checkForWinner(){
    if(userInput.value == currentRandomNumber){
        resultsP.innerText = "YOU WON! CONGRATULATIONS!!!..... annnnnnd Ticketmaster lost your ticket";
        resultsP.classList.remove("hidden")
    }else{
        resultsP.innerText = "Sorry, wrong answer. Try Again!";
        resultsP.classList.remove("hidden")
    }
}

function toggleMode(){
    if (currentMode == "darkMode"){
        currentMode = "lightMode";
        pageBody.classList.add("lightMode");
        pageBody.classList.remove("darkMode");
        pageFooter.classList.add("lightMode");
        pageFooter.classList.remove("darkMode");
        console.log(currentMode);
    }else{
        currentMode = "darkMode";
        pageBody.classList.add("darkMode");
        pageBody.classList.remove("lightMode");
        pageFooter.classList.add("darkMode");
        pageFooter.classList.remove("lightMode");
        console.log(currentMode);
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}




function validateForm(event){
    // prevent the form from submitting while we perform validation
    event.preventDefault();
    
    // the inputs
    let fullName = document.getElementById("fullName");
    let email = document.getElementById("email");
    let phoneN = document.getElementById("phoneNumber");
    let fieldset = document.querySelector("fieldset");
    let comments = document.getElementById("comments")
    let confirm = document.getElementById("confirm");
    
    // the regular expressions
    let fullNameRegex = /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/;
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,3})$/;
    let phoneRegex = /^\d{10}$/;
    
    // remove the border class given to inputs on previous submit of error
    fullName.classList.remove("error");
    email.classList.remove("error");
    phoneN.classList.remove("error");

    confirm.classList.add("hidden");

    // hide any previous error messages
    fullName.nextSibling.classList.add("hidden");
    email.nextSibling.classList.add("hidden");
    phoneN.nextSibling.classList.add("hidden");

    confirm.innerHTML = ""; 
  
    // variable to track whether or not the form is valid
    let isValid = true;
    
    // when the user has agreed to terms and conditions, validate other form inputs
  
      // ensure that username matches pattern, give feedback to user if not
      if(fullName.value === "" || !(fullNameRegex.test(fullName.value))){
        // change our boolean value, form is not valid
        isValid = false; 
        // add error class to input
        fullName.classList.add("error");
        // display error message for user about this input
        fullName.nextElementSibling.classList.remove("hidden");
        // use the map to add an error message to the console
        console.error(messages["fullNameMsg"]);
      }else{
        // add this property to our object
        newUser.userFullName = fullName.value;
      }
  
      // ensure that email address is correct/matches pattern
      if(email.value === "" || !(emailRegex.test(email.value))){
        // change our boolean value, form is not valid
        isValid = false;
        // add error class to input
        email.classList.add("error");
        // show error message for user about this input
        email.nextElementSibling.classList.remove("hidden");
        // log the error message to the console from the map above
        console.error(messages["emailMsg"]);
      }else{
        // add this property to our object
        newUser.userEmail = email.value;
      }
  
      // ensure that the phone number is 10 digits only
      if(phoneN.value === "" || !(phoneRegex.test(phoneN.value))){
        // change our boolean value, form is not valid
        isValid = false;
        // add error class to input
        phoneN.classList.add("error");
        // show error message for user about this input
        phoneN.nextElementSibling.classList.remove("hidden");
        // use the map to add an error message to the console
        console.error(messages["phoneMsg"]);
      }else{
        // add this property to our object
        newUser.userPhone = phoneN.value;
      }

      if(comments.value === ""){
        // change our boolean value, form is not valid
        isValid = false;
        // add error class to input
        comments.classList.add("error");
        // show error message for user about this input
        comments.nextElementSibling.classList.remove("hidden");
        // use the map to add an error message to the console
        console.error(messages["commentsMsg"]);
      }else{
        // add this property to our object
        newUser.userComments = comments.value;
      }
      
      // if the form is valid, submit it and add the user info to the object
      if(isValid){
  
        // call the display submission function to display the user object on the screen (you'd also actually submit here)
        // displaySubmission(); 
  
        // reset values
        fullName.value = "";
        email.value = "";
        phoneN.value = "";
        comments.value = ""
  
        // clear out any error messages
        fullName.nextElementSibling.classList.add("hidden");
        email.nextElementSibling.classList.add("hidden");
        phoneN.nextElementSibling.classList.add("hidden");
        comments.nextElementSibling.classList.add("hidden");
        
        // You'd also add the code to actually submit to the server here in cases where you have a server to connect to - we are not including that in this activity
        // display the success message from the map to the user
        window.alert(`${messages["success"]}`);
        confirm.innerHTML = "Thanks for Contacting Us!:<br>" + newUser.getUser();
        confirm.classList.remove("hidden");
      }
    }

document.getElementById("newContact").addEventListener("submit", validateForm);