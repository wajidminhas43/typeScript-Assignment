




function make_great(magicians:any) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

function show_magicians(magicians:any) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

const magicians = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];
  
  make_great(magicians);
  show_magicians(magicians);
  
