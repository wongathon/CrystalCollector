
$(document).ready(function(){

function getRandomInt(min, max){
	return Math.floor(Math.random() * (max-min+1)) + min;
}

//variable holder for Main number, crystals' numbers
var randomMain;
var crystals = [];
var crystalsTotal = 0;
var winNum = 0;
var lossNum = 0;


function gameStart(){
	//start random values
	randomMain = getRandomInt(13, 50);
	$("#random-num-box").html(randomMain);

	crystalsTotal = 0;
	$("#score-tracker-box").html(crystalsTotal);

	//array for random crystal numbers. 
	for(var i=0; i<4; i++){
		crystals[i] = getRandomInt(1,10);
	}

	//attach values to crystals. data attr?
	$("#crystal-1").attr("data-number", crystals[0]);
	$("#crystal-2").attr("data-number", crystals[1]);
	$("#crystal-3").attr("data-number", crystals[2]);
	$("#crystal-4").attr("data-number", crystals[3]);
	//jQuery to get variables in there. 
}

//button functions
$(".crystal").on("click", function(){
	crystalsTotal += parseInt($(this).attr("data-number"));
	$("#score-tracker-box").html(crystalsTotal);
	conditions();
});

//crystal floater function
$(".crystal").hover(function(){
	$(this).animate({
});


function conditions(){
	//if matches number, you win, restart game
	if (crystalsTotal === randomMain){
		$("#windicator").html("You win!!!");
		winNum++;
		$("#wincount").html(winNum);
		gameStart();
	} else if (crystalsTotal > randomMain){
		$("#windicator").html("You lose!!!");
		lossNum++;
		$("#losscount").html(lossNum);
		gameStart();
	}

	//if goes over, you lose, restart game
	//lose/win ++
	//jQuery to get variables in there
}

gameStart();

});