const Usname = prompt("enter your name pls: ");
const surname = prompt("enter your surname pls: ");
if (surname == "" &&  Usname == "") {
    console.log("undefined name" );
} else if (Usname == "") {
    console.log("user`s surname is ", surname )
} else if (surname == "" ){
    console.log("user`s name is ", Usname)
} else if (surname !== "" &&  Usname !== "" ){
    console.log("user`s full name is ", Usname, surname)
}


