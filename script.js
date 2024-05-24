let modebtn =  document.querySelector(".mode");
let home = document.querySelector("body");
let popbtn = document.querySelector(".login");
let login = document.querySelector(".outer");
let hbt=document.querySelector(".home");
let wrapperbtnsign=document.querySelector(".signup");
let wrapperbtnlogin=document.querySelector(".clogin");
let wrapper=document.querySelector(".outer");
let closebtn=document.querySelector(".close");
let navbar=document.querySelector(".navbar")
const Anchors=document.querySelectorAll("#anchor")
const signupbtn=document.querySelector(".signup-button");
const form2=document.querySelector(".form2")
const closeform2=document.querySelector(".close-form2")
const homepage=document.querySelector(".home-page")


//mode changing
let currmode = "dark";
modebtn.addEventListener("click", ()=>{
    if(currmode == "dark"){
        home.classList.add("light")
        currmode = "light";
        modebtn.innerHTML = "<i class='fa-solid fa-moon'></i>";
        modebtn.style.color="grey"
        navbar.style.color="black"
        Anchors.style.color="black"
        }
    else{
        currmode = "dark"
        home.classList.add("dark")
        home.classList.remove("light")
        modebtn.innerHTML = "<i class='fa-solid fa-sun'></i>";
        modebtn.style.color="yellow"
        navbar.style.color="white"
    }

})

hbt.addEventListener("click", ()=>{
    login.classList.remove("active-pop")
    wrapper.classList.remove("display-none")
    form2.classList.add("display-none")
    form2.classList.remove("display-form2")
    wrapper.classList.remove("active")
    login.classList.remove("active-pop")
    tutorpage.classList.remove("display-tutor")
    homepage.classList.remove("display-none")
})

popbtn.addEventListener("click", ()=>{
    wrapper.classList.remove("display-none")
    form2.classList.add("display-none")
    form2.classList.remove("display-form2")
 tutorpage.classList.remove("display-tutor")
    login.classList.add("active-pop")
    wrapper.classList.remove("active")
    homepage.classList.add("display-none")
        
})

wrapperbtnsign.addEventListener("click", ()=>{
    wrapper.classList.add("active")
    tutorpage.classList.remove("display-tutor")
})
wrapperbtnlogin.addEventListener("click", ()=>{
    wrapper.classList.remove("active")
    tutorpage.classList.remove("display-tutor")
})


closebtn.addEventListener("click", ()=>{
    login.classList.remove("active-pop")
    wrapper.classList.remove("display-none")
    form2.classList.add("display-none")
    form2.classList.remove("display-form2")
    wrapper.classList.remove("active")
    login.classList.remove("active-pop")
    tutorpage.classList.remove("display-tutor")
    homepage.classList.remove("display-none")
})


signupbtn.addEventListener("click", ()=>{
    form2.classList.add("display-form2")
    wrapper.classList.add("display-none")
    login.classList.remove("active-pop")
    wrapper.classList.remove("display-none")
    wrapper.classList.remove("active")
    login.classList.remove("active-pop")
    tutorpage.classList.remove("display-tutor")
    homepage.classList.add("display-none")
})

closeform2.addEventListener("click", ()=>{
    login.classList.remove("active-pop")
    wrapper.classList.remove("display-none")
    form2.classList.add("display-none")
    form2.classList.remove("display-form2")
    wrapper.classList.remove("active")
    login.classList.remove("active-pop")
    tutorpage.classList.remove("display-tutor")
    homepage.classList.remove("display-none")
})

const tutorpage=document.querySelector(".tutor-page")
const tutorials=document.querySelector(".tutorbtn")

tutorials.addEventListener("click",()=>{
    tutorpage.classList.add("display-tutor")
    form2.classList.add("display-none")
    wrapper.classList.add("display-none")
    login.classList.remove("active-pop")
    homepage.classList.add("display-none")
    
})