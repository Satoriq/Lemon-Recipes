function openBurger() {
              var x = document.getElementById("nav__js");
              if (x.className === "nav__menu") {
                  x.className += " nav__menu--open";
              } 
              else {
                  x.className = "nav__menu";
              }

              var y = document.getElementById("logo__js");
              if (y.className === "nav__logo") {
                  y.className += " nav__logo--open";
              } 
              else {
                  y.className = "nav__logo";
              }

              var z = document.getElementById("input__js");
              if (z.className === "nav__input") {
                  z.className += " nav__input--open";
              } 
              else {
                  z.className = "nav__input"; //First bug in my life was here, it's so cute^^
              }
              var a = document.getElementById("icon__js");
              if (a.className === "nav__menu-icon") {
                  a.className += " nav__menu-icon--open";
              } 
              else {
                  a.className = "nav__menu-icon";
              }
          }