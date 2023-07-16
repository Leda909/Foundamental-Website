// Onclick Hamburger menu
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// Margin above Footer
    //  const mainDiv = document.querySelector('.main');
    //  const navcontainer = document.querySelector('.navcontainer');
    //  const footer = document.querySelector('.footer');

    //  mainDiv.style.marginTop = `${navcontainer.offsetHeight}px`;
    //  mainDiv.style.marginBottom = `${footer.offsetHeight}px`;