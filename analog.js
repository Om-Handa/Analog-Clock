    function setdate() {
        let sechand = document.getElementById("shand"); 
        let minhand = document.getElementById("mhand"); 
        let hourhand = document.getElementById("hrhand"); 
        let d = new Date();
        let sec = d.getSeconds()*6;
        let min = d.getMinutes()*6;
        let hour = d.getHours()*30 + Math.round(min/12);
        sechand.style.transform="rotate("+ sec + "deg)";
        minhand.style.transform="rotate("+ min + "deg)";
        hourhand.style.transform="rotate("+ hour + "deg)";
    }
    setInterval(setdate, 1000);
    setdate(); 