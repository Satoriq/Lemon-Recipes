var slideIndex2 = 1;
          showDivs2(slideIndex2);
          
          function slide2(n) {
            showDivs2(slideIndex2 += n);
          }
          
          function currentDiv2(n) {
            showDivs2(slideIndex2 = n);
          }
          
          function showDivs2(n) {
            var i2;
            var x2 = document.getElementsByClassName("small-recipe__recipe");
    
            var dots2 = document.getElementsByClassName("small-recipe__circle");
            if (n > x2.length) {slideIndex2 = 1}    
            if (n < 1) {slideIndex2 = x.length}
            for (i = 0; i < x2.length; i++) {
               x2[i].style.display = "none";  
            }
            for (i = 0; i < dots2.length; i++) {
               dots2[i].className = dots2[i].className.replace(" small-recipe__circle--checked", "");
            }
            x2[slideIndex2-1].style.display = "block";  
            dots2[slideIndex2-1].className += " small-recipe__circle--checked";
          }