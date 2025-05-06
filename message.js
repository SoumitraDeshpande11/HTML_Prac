/*
let v = 7;
for (let i = 1; i <= 10; i++) { 
    
    console.log(v*i);

}
let a = 1;
while(a<=10){
    console.log(a*v);
    a++;

}

let day =Number(prompt("enter the day")) ;
switch(day) {
    case 1:console.log("Monday");
        break;
    case 2:console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("there are only 7 days u idiot");

}
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Blue",
    
};*/
let student = {
    name: "soumitra",
    degree: "Btech-CSE",
    age:18,
    dob:"11:07:2006",
    password: "soumi11"


}
let a = prompt("enter your name")
let p = prompt("enter your password")

student.address = "Kolkata, India";
for(x in student){
    if(student.name == a && student.password == p){
        console.log("authorised")

    }else {
        console.log("not authorised")
    }
}
