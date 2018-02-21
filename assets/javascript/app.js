$(document).ready(function () {
    var guessesCorrect = 0;
    var guessesIncorrect = 0;
    var timeleft = 30;
    $('#start').click(function(){
        var x = document.getElementById("start");
        var y = document.getElementById("interactive");
        if (x.style.display === "block") {
            x.style.display = "none";
            y.style.display = "block";
        } else {
            x.style.display = "block";
            y.style.display = "none";
        }
        var downloadTimer = setInterval(function(){
        timeleft--;
        document.getElementById("countdowntimer").textContent = timeleft;
        if(timeleft <= 0)
            clearInterval(downloadTimer);
        },1000);
    })
    

    $("#submit").click(function(){
        event.preventDefault();
        var questionNames = ['city','school','country','relation','color','gang','band'];
        for (i=0; i<questionNames.length; i++){
        var question = $('input[name=' + questionNames[i] + ']:checked').val(); 
        if (question === 'correct'){
            guessesCorrect++;}
        else {
        guessesIncorrect++;}
        }
        console.log(guessesCorrect);
        console.log(guessesIncorrect);
    });
    
});