
function typewriter() {
    let letters = ["W", "i", "l", "s", "o", "n", "-", "2"];
    let index = 0;
    let outputElement = document.getElementById("typewriter");
    let intervalId = setInterval(() => {
      outputElement.innerHTML += letters[index];
      index++;
  
      if (index === letters.length) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  typewriter();

  
