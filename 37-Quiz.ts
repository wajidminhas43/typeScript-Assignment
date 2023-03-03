//Large Shirts: Modify the make_shirt() function so that shirts 
// are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message. 

function makeShirt(size="large", message="I love TypeScript"){
    if(size == "large"){
    console.log("i love Typescript")
    }else if (size == "medium"){
        console.log("i love js")
    }
}
makeShirt();
makeShirt("medium", "i love js");