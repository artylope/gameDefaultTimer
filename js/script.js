const gameIntroScreen = document.querySelector('#game-intro');
const inGameScreen    = document.querySelector('#in-game');
const gameEndScreen   = document.querySelector('#game-end');

const timebar  = document.querySelector('#timebar');
const time            = 10; //in seconds
var timeLeft          = time;

var gameRunning     = false;



var returnIntro = function(){
  console.clear();
  gameIntroScreen.style.visibility = 'visible';
  inGameScreen.style.visibility = 'hidden';
  gameEndScreen.style.visibility = 'hidden';
}


var startGame = function(){
  //reset timer
  console.clear();
  timeLeft = time;

  console.log('start game');
  gameIntroScreen.style.visibility = 'hidden';
  inGameScreen.style.visibility = 'visible';
  gameEndScreen.style.visibility = 'hidden';

  gameRunning = true;
  startTimer();
}

var startTimer = function(){
    var countdown = setInterval( function(){
        // console.log('timeleft ' + timeLeft);
        // console.log('gameRunning = ' + gameRunning);

        timebar.style.width = ((timeLeft/time)*100) + "%";

        timeLeft = timeLeft - .1;
      },100);

    var stopTimer = setTimeout(
                      function(){
                        gameRunning = false;
                        console.log('gameRunning = ' + gameRunning);
                        endGame();
                        clearInterval(countdown);
                      }, (time * 1000)
                    );
}

var endGame = function(){
  gameIntroScreen.style.visibility = 'visible';
  inGameScreen.style.visibility = 'hidden';
  gameEndScreen.style.visibility = 'visible';
}
