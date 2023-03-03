



// Store the person's name in a variable
var personName = 'abbas ali';

// Print the person's name in lowercase
console.log(personName.toLowerCase());

// Print the person's name in uppercase
console.log(personName.toUpperCase());

// Print the person's name in titlecase
function toTitleCase(str:any) {
  return str.replace(
    /\w\S*/g,
    function(txt:any) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

console.log(toTitleCase(personName));
