values=["rock","paper","scissors"]
var computerScore=0;
var playerScore=0;
document.getElementById('computer-score-result').innerHTML=`Computer : ${computerScore}`;
document.getElementById('player-score-result').innerHTML=`Player : ${playerScore}`;
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
function getComputerChoice()
{
  return values[getRndInteger(0, 3)];
}
function gameAction(playerValue)
{
  document.getElementById("player-result").innerHTML=playerValue.charAt(0).toUpperCase()+playerValue.slice(1);
  document.getElementById("player-result-img").src=`assets/images/player-${playerValue}.png`;
  var ComputerChoice=getComputerChoice();
  document.getElementById("computer-result").innerHTML=ComputerChoice.charAt(0).toUpperCase()+ComputerChoice.slice(1);
  document.getElementById("computer-result-img").src=`assets/images/computer-${ComputerChoice}.png`;
 
  if(playerValue==ComputerChoice)
  {
    document.getElementById('player-title').style.color='#000';
        document.getElementById('computer-title').style.color='#000';
  }
  if(playerValue!=ComputerChoice)
  {
    if(playerValue=='rock'&& ComputerChoice=='scissors')
    {
        playerScore+=1;
        document.getElementById('player-score-result').innerHTML=`Player : ${playerScore}`;
        document.getElementById('player-title').style.color='#0f0';
        document.getElementById('computer-title').style.color='#f00';
    }
    else if(playerValue=='rock'&& ComputerChoice=='paper')
    {
      computerScore+=1;
      document.getElementById('computer-score-result').innerHTML=`Computer : ${computerScore}`;
      document.getElementById('player-title').style.color='#f00';
      document.getElementById('computer-title').style.color='#0f0';

    }
    else if(playerValue=='paper'&& ComputerChoice=='scissors')
    {
      computerScore+=1;
      document.getElementById('computer-score-result').innerHTML=`Computer : ${computerScore}`;
      document.getElementById('player-title').style.color='#f00';
      document.getElementById('computer-title').style.color='#0f0';
    }else if(playerValue=='paper'&& ComputerChoice=='rock')
    {
        playerScore+=1;
        document.getElementById('player-score-result').innerHTML=`Player : ${playerScore}`;
        document.getElementById('player-title').style.color='#0f0';
        document.getElementById('computer-title').style.color='#f00';
    }else if(playerValue=='scissors'&& ComputerChoice=='paper')
    {
      playerScore+=1;
      document.getElementById('player-score-result').innerHTML=`Player : ${playerScore}`;
      document.getElementById('player-title').style.color='#0f0';
      document.getElementById('computer-title').style.color='#f00';
    }
    else if(playerValue=='scissors'&& ComputerChoice=='rock')
    {
      computerScore+=1;
      document.getElementById('computer-score-result').innerHTML=`Computer : ${computerScore}`;
      document.getElementById('player-title').style.color='#f00';
      document.getElementById('computer-title').style.color='#0f0';
    }
  }
  if(playerScore==5 || computerScore==5)
  {
    alert(`!!!!!!!!${computerScore==5?'Computer':'Player'} Wins!!!!!!!!`);
    restartGame();
  }
}
function restartGame()
{
   computerScore=0;
   playerScore=0;
   document.getElementById('computer-score-result').innerHTML=`Computer : ${computerScore}`;
   document.getElementById('player-score-result').innerHTML=`Player : ${playerScore}`;
}