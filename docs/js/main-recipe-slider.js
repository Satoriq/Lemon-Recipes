var slideIndex = 1;
      showDivs(slideIndex);
      
      function slide(n) {
        showDivs(slideIndex += n);
      }
      
      function currentDiv(n) {
        showDivs(slideIndex = n);
      }
      
      function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("main-recipe");
        var dots = x[slideIndex-1].getElementsByClassName("main-recipe__switcher-circle");
        if (n > x.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
           x[i].className = "main-recipe main-recipe--hide";
        }
        for (i = 0; i < dots.length; i++) {
           dots[i].className = dots[i].className.replace(" main-recipe__switcher-circle--checked", "");
        }
        x[slideIndex-1].className = "main-recipe main-recipe--show";  
        dots[slideIndex-1].className += " main-recipe__switcher-circle--checked ";
      }