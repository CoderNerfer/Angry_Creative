const Email = document.getElementById("Email__input")
const Username = document.getElementById("Username__input")
const Password = document.getElementById("Password__input")
const Password_Verif = document.getElementById("Password_Verif__input")
const Submit_btn = document.getElementsByClassName("submit")

Email.addEventListener("input", (event)=>{
    let email_value = Email.value
    if (email_value == ""){
        Email.style.borderColor = "red";
    }else if(!Email_Verification(email_value)){
        Email.style.borderColor = "red";
    }else{
        Email.style.borderColor = "green";
    }
})

function Email_Verification (email){
    let good = true
    let double_mail = 0

    email.split("").forEach((element, index)=> {
        if (element == " "){
            good = false
        }
        if (element == "@"){
            double_mail ++

        }
        if (index > 1){
            if (element == "." && email[index -1] == "."){
                good = false
            }
            if (element == "@" && email[index -1] == "."){
                good = false
            }
        }
    })
    if (double_mail != 1 ){
        good = false
    }
    return good
}

Username.addEventListener("input", (event)=>{
    let username_value = Username.value

    if(username_value.length < 4 || username_value.length > 12){
        Username.style.borderColor = "red";
    }else{
        if (!Username_Verification(username_value)){
            Username.style.borderColor = "red";
        }else{
            Username.style.borderColor = "green";
        }
    }
})

function Username_Verification (user){
    let good = true
    
    user.split("").forEach((element, index)=> {
        if (element == " "){
            good = false
        }
    })
    return good
}

Password.addEventListener("input", (event)=>{
    let pwd_value = Password.value

    if(pwd_value.length < 6){
        Password.style.borderColor = "red";
    }else{
        if (!Password_Verification(pwd_value)){
            Password.style.borderColor = "red";
        }else{
            Password.style.borderColor = "green";
        }
    }
})

function Password_Verification (user){
    let good = true
    let Lower = 0
    let Upper = 0
    let Nb = 0
    
    user.split("").forEach((element, index)=> {
        let ascii = element.charCodeAt(0)
        if (element == " "){
            good = false
        }
        if (ascii >= 65 && ascii <= 90){
            Upper ++
        }else if (ascii >= 97 && ascii <= 122){
            Lower ++
        }else if (ascii >= 48 && ascii <= 57){
            Nb ++
        }
    })
    console.log(Lower, Upper, Nb)
    if (Lower < 1 || Upper < 1 || Nb < 1){
        good = false
    }
    return good
}

Password_Verif.addEventListener("input", (event)=>{
    let pwd_verif_value = Password_Verif.value
    let pwd_value = Password.value

    if(pwd_verif_value != pwd_value ){
        Password_Verif.style.borderColor = "red";
    }else{
        Password_Verif.style.borderColor = "green";
    }
})

    // Submit_btn[0].removeAttribute('disabled')

