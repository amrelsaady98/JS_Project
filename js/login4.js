const login = document.getElementById("login"); //button
var usernameInput = document.getElementById("username"); //input data (variable)
var passwordInput = document.getElementById("password");

var usersData; //null or list of objects   13

login.onclick = (e) => {
  //anonymous function تتنفذ
  e.preventDefault(); //again

  // console.log(JSON.parse(localStorage.getItem ('user')))

  // console.log(usersData)
  usersData = JSON.parse(localStorage.getItem("user"));

  if (usersData !== null) {
    for (let i = 0; i < usersData.length; i++) {

      if (
        usernameInput.value == usersData[i].name &&
        passwordInput.value == usersData[i].pass
      ) {
        console.log(usersData[i]);
        sessionStorage.setItem('currentUser',JSON.stringify(usersData[i]))
     window.location.replace('../index.html')
      }
    }

 if(sessionStorage.getItem('currentUser')==null){
    alert("Invalid username or password")
 }

  } else {
    alert("Invalid username or password.");
    return;
  }
}



