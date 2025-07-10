// Toggle the dropdown menu
        function more()
       {
        if( document.getElementById("projectCard5").style.display==="none")
        {
           
            document.getElementById("moreBtn").innerHTML='Less <i class="fas fa-chevron-up"> </i>';
            document.getElementById("projectCard5").style.display="block";
            document.getElementById("projectCard6").style.display="block";
            document.getElementById("projectCard7").style.display="block";
            
        }
    else
    {
           
            document.getElementById("projectCard5").style.display="none";
            document.getElementById("projectCard6").style.display="none";
            document.getElementById("projectCard7").style.display="none";
            document.getElementById("moreBtn").innerHTML = 'More Projects <i class="fas fa-chevron-down"></i>';

        }
       }
      
