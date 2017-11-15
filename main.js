function userClickRock() {
  document.getElementById('user-choice').src = "resources/images/rock.png"
  var rock = console.log( "resources/images/rock.png" )
}
function userClickPaper(){
  document.getElementById('user-choice').src = "resources/images/paper.png"
  var paper = console.log( "resources/images/paper.png" )
}
function userClickScissors(){
  document.getElementById('user-choice').src = "resources/images/scissors.png"
  var scissors = console.log( "resources/images/scissors.png" )
}


var ImageArray = ['rock', 'paper', 'scissors']
function computerChoice() {
  num = Math.floor( Math.random() * ImageArray.length)
  img = ImageArray[num]
  imgString = 'resources/images/' + img + '.png'
  document.getElementById('comp-choice').src = imgString
  var comp = console.log( imgString ) 
}

Case 

if ( "user-choice" == "comp-choice" )
{
  greeting = "It's a tie!"
  document.getElementById("result").innerHTML = greeting
}

function logit(value){
  console.log(value);
}
logit("something");






