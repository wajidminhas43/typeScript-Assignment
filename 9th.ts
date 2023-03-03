
// Store your favorite number in a variable

const name1 = "wajid shabbir \n "

const date = new Date();
 let day = date.getDate();
 let month = date.getMonth()  + 1;
 let year = date.getFullYear()
 let currentDate = `${day}, ${month}, ${year}`
document.write(name1, currentDate, );

const favNumber = prompt("  Enter your Favorite Number \n ");

document.write(` you favorite Number is   ${favNumber}.`)