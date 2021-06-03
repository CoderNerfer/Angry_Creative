const Btn_Edit = document.getElementById("Edit_profil_btn")
const Overview = document.getElementById("Overview")
const Profile = document.getElementById("Manage_Profile")
const Profile_Close = document.getElementById("Close")
const Modify_username = document.getElementById("user_btn")

const Profil_Mod = document.getElementById("Special_modif")




Btn_Edit.addEventListener("click", ()=>{
    Overview.style.display = "none"
    Profile.style.display = "block"
})

Profile_Close.addEventListener("click", ()=>{
    Profile.style.display = "none"
    Overview.style.display = "block"
})

Modify_username.addEventListener("click", ()=>{
    Profile.style.display = "none"

})