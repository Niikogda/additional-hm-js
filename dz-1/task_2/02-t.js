
const firstName = prompt("Enter your first name, please: ");
let lastName = "";
let nickName = "";
const anonim = "хтось то там";

if (firstName === "") {
    lastName = prompt("Enter your last name, please: ");
} else {
    console.log(firstName, " is СуперКодер");
}
if(lastName !== "" && firstName === ""){
    console.log(lastName, " is СуперКодер");
} else if (lastName === "" && firstName === "") {
    nickName = prompt("Enter your nick name, please: ");
}
if(lastName === "" && firstName === "" && nickName!==""){
    console.log(nickName, " is СуперКодер");
} else if (lastName === "" && firstName === "" && nickName=="") {
    console.log(anonim, " is СуперКодер");
}









