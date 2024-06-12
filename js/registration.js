let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let psw = document.getElementById("psw");
let btn = document.getElementById("btn");

const yourDataKey = 'user'; 

form.addEventListener("submit", (e) => {
    console.log(username.value)
       jsonData.push({
        "name":username.value,
        "email":email.value,
        "pass":password.value
})
let updatedJsonString = JSON.stringify(jsonData);
localStorage.setItem(yourDataKey, updatedJsonString);    if(validateInput()){
        
    }
  e.preventDefault();
});
const setError = (ele, msg) => {
  let box = ele.parentElement;
  let error = box.querySelector(".error");

  error.innerText = msg;
  box.classList.add("error");
  box.classList.remove("success");
};
const setSuccess = (ele) => {
  let box = ele.parentElement;
  let error = box.querySelector(".error");

  error.innerText = "";
  box.classList.add("success");
  box.classList.remove("error");
};
const mailFormat = (e) => {
  const re = /\w+@\w+.\w+/;
  return re.test(String(e).toLowerCase());
};
const passFormat = (p) => {
    const re = /([0-9]|[a-z A-Z]){8,}/gmu;
    return re.test(p);
}
const userFormat = (u) => {
    const re = /[^0-9]/;
    return re.test(u);
}
// btn.addEventListener("click", () => {
//   let localItems = JSON.parse(localStorage.getItem("localItem"));
//   if (localItems === null) {
//     itemsList = [];
//   } else {
//     itemsList = localItems;
//   }
//   itemsList.push(username.value);
//   itemsList.push(email.value);
//   itemsList.push(password.value);
//   itemsList.push(psw.value);
//   localStorage.setItem("localItem", JSON.stringify(itemsList));
// });

/***
 * validate data entered by user 
 * return true if data vaild else return false 
 */
function validateInput() {
//   let user = username.value.trim();
//   let mail = email.value.trim();
//   let pass1 = password.value.trim();
//   let pass2 = psw.value.trim();
  if(true &&  true && true && true){
    return true
  }else {
    return false;
  }
}

//get json from local storage    1
// sat data to var                2  
// append new item to var         3
// from JSON to String            4
// save to lcal storage   
 //-------------------------key
//  [{
//     "name":d
//  },{}]

let jsonDataString = localStorage.getItem(yourDataKey);

let jsonData;
// console.log(jsonDataString)
if (jsonDataString != null) { 
    
      jsonData = JSON.parse(jsonDataString);
} else {
    jsonData = [];
}
//------  jsonData.append-------------
// [].append()




// ===========================================================================jsonData.push(newItem)
// localStorage.setItem('userData', JSON.stringify(jsondata));


//   {

//     user: "[{name,pass,}]"
//     JSON.parse()

//   }


//   if (user === "") {
//     setError(username, "Username is required");
//   } else if (!userFormat(user)) {
//     setError(username, "Digital are not allowed");
//   } else {
//     setSuccess(username);
//   }
//   if (mail === "") {
//     setError(email, "Email is required");
//   } else if (!mailFormat(mail)) {
//     setError(email, "Please enter a valid email");
//   } else {
//     setSuccess(email);
//   }
//   if (pass1 === "") {
//     setError(password, "Password is required");
//   } else if (!passFormat(pass1)) {
//     setError(password, "Password must be a minimum of 8 characters including number, Upper, Lower And one special character");
//   } else {
//     setSuccess(password);
//   }
//   if (pass2 === "") {
//     setError(psw, "Please confirm your password");
//   } else if (pass2 != pass1) {
//     setError(psw, "Passwords does't match");
//   } else {
//     setSuccess(psw);
//   }