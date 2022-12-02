let id = (id) => document.getElementById(id);

let classes =(classes) => document.getElementsByClassName(classes);

let full = id("username"), 
    emai = id("email"),
    phonenumber = id("phonenumber"),
    select = id("select"),
    create = id("create"),
    repeate = id("repeate"),
    form = id("form"),
    errorMsg = classes ("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");
    
form.addEventListener("createaccount", (e) => {
    e.preventDefault();

    engine(full,0, "Username cannot be blank!");
    engine(email,1, "Username cannot be blank!");
    engine(phonenumber,2, "Username cannot be blank!");
    engine(select,3, "Username cannot be blank!");
    engine(create,4, "Username cannot be blank!");
    engine(repeate,5, "Username cannot be blank!");
});

let engine = (id, serial, message) => {
    if(id.value.trim() === ""){       //ham trim loai bo khoang trang (dau cach)
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";


        failureIcon[serial].style.opactity = "1";
        successIcon[serial].style.opactity = "0";
    }else{
        errorMsg[serial].innerHTML = "";
        id.style.border ="2px solid green";


        failureIcon[serial].style.opacity="0";
        successIcon[serial].style.opacity="1";
    }
}