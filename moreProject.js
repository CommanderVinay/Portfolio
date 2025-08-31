// Toggle the dropdown menu
      function more() {
    const card5 = document.getElementById("projectCard5");
    const isHidden = window.getComputedStyle(card5).display === "none";

    if (isHidden) {
        document.getElementById("moreBtn").innerHTML = 'Less <i class="fas fa-chevron-up"></i>';
        document.getElementById("projectCard5").style.display = "block";
        document.getElementById("projectCard6").style.display = "block";
        document.getElementById("projectCard7").style.display = "block";
        document.getElementById("projectCard8").style.display = "block";
        
    } else {
        document.getElementById("projectCard5").style.display = "none";
        document.getElementById("projectCard6").style.display = "none";
        document.getElementById("projectCard7").style.display = "none";
        document.getElementById("projectCard8").style.display = "none";
        document.getElementById("Projectssec").scrollIntoView({
            behavior: "smooth",   // smooth scroll
            block: "start"        // align to top
        });
        document.getElementById("moreBtn").innerHTML = 'More Projects <i class="fas fa-chevron-down"></i>';
    }
}
      
