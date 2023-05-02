let time = 0;
let letters = ["W" , "I" , "L" , "S" , "O" , "N" , "-" , "2"];
function typewriter () {
    if (time < letters.length) {
      console.log(letters[time]);
      time++;
    }
  };


//function typewriter () {
//    letters.forEach (console.log);

//};

//setInterval(typewriter, 1000); 


