
// Stages of Life: Write an if-else chain that determines a person’s stage of life.
//  Set a value for the variable age, and then:

const PERSON = 10

if (PERSON < 2){
    console.log("Person is baby")
}else if (PERSON > 2 && PERSON < 4){
    console.log("Person is Toddler")
}else if (PERSON > 4 && PERSON < 13){
    console.log("Person is kid")
}else if (PERSON > 13 && PERSON < 20){
    console.log("Person is Teenager")
}else if(PERSON > 20 && PERSON < 65){
    console.log("Person is adult")
}else if (PERSON > 65){
    console.log("Person is Old man")
}