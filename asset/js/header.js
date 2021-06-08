// Get the input field
var input = document.getElementById("Search__Text");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    console.log("recherche depuis le header")
    setTimeout(() => {
      document.getElementById("Search__BTN").removeAttribute("disabled");
      document.getElementById("Search__BTN").click();
    }, 2000);
  }
});

document.getElementById("close_post").addEventListener("click", ()=>{
    document.getElementById('pop_post_add').style.display = "none"
})
document.getElementById("Post_add").addEventListener("click", ()=>{
    document.getElementById('pop_post_add').style.display = "block"
})

document.getElementsByClassName("Login")[0].addEventListener("click", (event)=>{
    document.getElementById("Pop_up").style.display = "block"
    event.stopPropagation()
})
document.addEventListener("click", ()=>{
    document.getElementById("Pop_up").style.display = "none"
})
document.cookie = "Login ='{'user':'Clem','mail':'mail@cookie.com','nb_posts':'10','nb_likes':'15'}'"
let my_cookie_header = Select_Login_cookie()
if (my_cookie_header != ""){
    my_cookie_header = JSON.parse(Cookie_cooker(my_cookie_header))
    console.log(my_cookie_header)
    if (my_cookie_header.user != ""){
        document.getElementsByClassName("Login")[0].setAttribute("src", "https://img.icons8.com/fluent-systems-regular/45/000000/user-male-circle.png")
        document.getElementById("Post_add").style.display = "flex"
        document.getElementById("First_pop").innerHTML = "Profile"
        document.getElementById("First_pop").setAttribute("href","/profile")
        document.getElementById("Second_pop").innerHTML = "Logout"
        document.getElementById("Second_pop").setAttribute("href","/")
    }
}else{
    document.getElementsByClassName("Login")[0].setAttribute("src", "https://img.icons8.com/windows/50/000000/user-ninja.png")
    document.getElementById("First_pop").innerHTML = "Register"
    document.getElementById("First_pop").setAttribute("href","/register")
    document.getElementById("Second_pop").innerHTML = "Login"
    document.getElementById("Second_pop").setAttribute("href","/login")
}

function Select_Login_cookie (){
    let my_cookie_login = ""

    document.cookie.split("; ").forEach((elem)=>{
        // console.log(elem.slice(0, 5))
        // console.log(elem)
        if (elem.slice(0,5) == "Login"){
            my_cookie_login = elem.slice(7,-1)
        }
    })
    // console.log(my_cookie_login)
    return my_cookie_login
}

function Cookie_cooker (initial_cookie){
    // initial_cookie.replace(/\'/, "\"")
    const new_hot_cookie = initial_cookie.split("")
    new_hot_cookie.forEach((element, index) => {
        if (element == "'"){
            new_hot_cookie[index] = '"'
        }
    });
    return new_hot_cookie.join("")
}
