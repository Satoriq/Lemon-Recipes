function openBurger() {
              var x = document.getElementById("js-nav__menu");
              if (x.className === "nav__menu") {
                  x.className += " nav__menu--open";
              } 
              else {
                  x.className = "nav__menu";
              }

              var y = document.getElementById("js-nav__logo");
              if (y.className === "nav__logo") {
                  y.className += " nav__logo--open";
              } 
              else {
                  y.className = "nav__logo";
              }

              var z = document.getElementById("js-nav__input");
              if (z.className === "nav__input") {
                  z.className += " nav__input--open";
              } 
              else {
                  z.className = "nav__input"; //First bug in my life was here, it's so cute^^
              }
              
              var a = document.getElementById("js-nav__menu-icon");
              if (a.className === "nav__menu-icon") {
                  a.className += " nav__menu-icon--open";
              } 
              else {
                  a.className = "nav__menu-icon";
              }
          }