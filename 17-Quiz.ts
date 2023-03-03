// Original guest list
var guests = ["Ahsan", "sajid", "Lara", "majeed", "nabeel"];

// Print the original guest list
for (var i = 0; i < guests.length; i++) {
  console.log('Dear ' + guests[i] + ', you are invited to dinner.');
}

// Print a message saying we can invite only two people
console.log("Sorry, we can invite only two people for dinner.");

// Remove guests from the list until only two names remain
while (guests.length > 2) {
  var removedGuest = guests.pop();
  console.log('Sorry ' + removedGuest + ', we can\'t invite you to dinner.');
}

// Print a message to each of the two remaining guests
for (var i = 0; i < guests.length; i++) {
  console.log('Dear ' + guests[i] + ', you are still invited to dinner.');
}

// Remove the last two names from the list
guests.pop();
guests.pop();

// Print the final guest list to make sure it's empty
console.log(guests);
