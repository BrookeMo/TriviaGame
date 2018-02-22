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
        if(timeleft === 0){
            var questionNames = ['city','school','country','relation','color','gang','band'];
        for (i=0; i<questionNames.length; i++){
        var question = $('input[name=' + questionNames[i] + ']:checked').val(); 
        if (question === 'correct'){
            guessesCorrect++;}
        else {
        guessesIncorrect++;}
        }
        $("#correct").html('Correct Answers: ' + guessesCorrect);
        $("#incorrect").html('Incorrect Answers: ' + guessesIncorrect);
        console.log(guessesCorrect);
        console.log(guessesIncorrect);
        var x = document.getElementById("score");
        var y = document.getElementById("interactive");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "none";
        } else {
            x.style.display = "block";
            y.style.display = "none";
        }
        }
        },1000);
    });
    

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
        $("#correct").html('Correct Answers: ' + guessesCorrect);
        $("#incorrect").html('Incorrect Answers: ' + guessesIncorrect);
        console.log(guessesCorrect);
        console.log(guessesIncorrect);
        var x = document.getElementById("score");
        var y = document.getElementById("interactive");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "none";
        } else {
            x.style.display = "block";
            y.style.display = "none";
        }
    });  
});