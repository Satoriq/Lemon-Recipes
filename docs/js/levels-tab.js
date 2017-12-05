function openRecipe(evt, difficulty) {
         var i, tabcontent, tablinks;

         tabcontent = document.getElementsByClassName("level-recipes__content");
         for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
         }

         tablinks = document.getElementsByClassName("level-recipes__button");
         for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" level-recipes__button--picked", "");
         }
         
         document.getElementById(difficulty).style.display = "block";
         evt.currentTarget.className += " level-recipes__button--picked";  
        }
        document.getElementById("js-default-open").click();