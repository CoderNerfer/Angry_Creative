const Email = document.getElementById("Email__input")
const Username = document.getElementById("Username__input")
const Password = document.getElementById("Password__input")
const Password_Verif = document.getElementById("Password_Verif__input")
const Submit_btn = document.getElementsByClassName("submit")

Email.addEventListener("input", (event)=>{
    let email_value = Email.value
    console.log(email_value.charCodeAt(email_value.length -1))
    if (email_value == ""){
        Email.style.borderColor = "red";
    }else if(!Email_Verification(email_value)){
        Email.style.borderColor = "red";
    }else{
        Email.style.borderColor = "#fff";
    }
    console.log(Email_Verification(email_value))
})

function Email_Verification (email){

    let good = true
    let double_mail = 0

    // email.split("").forEach(element => {
    //     let ascii = element.charCodeAt(0)
    //     if((ascii < 97 || ascii > 122) && (ascii < 64 || ascii > 90) && () && 46){
    //         good = false
    //     }
    // });

    email.split("").forEach((element, index)=> {
        if (element == " "){
            good = false
        }
        if (element == "@"){
            double_mail ++
        }
        // if (index > 1){
        //     if (element == "." && email[index -1] == "."){
        //         good = false
        //     }
        // }
    })
    if (double_mail != 1 ){
        good = false
    }
    return good
}
