const totalScore ={ComputerScore:0,PlayerScore:0}

function getComputerChoice(){
	const rpsChoice =[' Rock','Paper','Sissor']
	const randomNumber= Math.floor(Math.random() * 3)
	return rpsChoice[randomNumber]
}

function getResult(PlayerChoice,ComputerChoice){
	let score;
	if(PlayerChoice==ComputerChoice){
		score=0
	}
	else if(PlayerChoice=='Rock' && ComputerChoice=='Sissor'){
		score=1
	}
	else if(PlayerChoice=='Paper' && ComputerChoice=='Rock'){
		score=1
	}
	else if(PlayerChoice=='Sissor' && ComputerChoice=='Paper'){
		score=1
	}
	else{
		score= -1
	}
	return score
}
function playGame(){
	const rpsButtons=document.querySelectorAll('.rpsButton')

	rpsButtons.forEach(rpsButtons =>{
		rpsButtons.onclick=()=> onclickRPS(rpsButtons.value)
	})
	const endGameButton=document.getElementById('endGameButton')
	const finalresultButton=document.getElementById('final')
	endGameButton.onclick=()=>endGame(totalScore)
	finalresultButton.onclick=()=>final(totalScore)

}
function onclickRPS(PlayerChoice){
	//console.log({PlayerChoice})
	const ComputerChoice=getComputerChoice()
	const score=getResult(PlayerChoice,ComputerChoice)
	// console.log(score)
	// totalScore['PlayerScore']+=score
	// console.log(totalScore['PlayerScore'])
	// totalScore['ComputerScore']-+score
	// console.log(totalScore['ComputerScore'])
	if (score==1){
		totalScore['PlayerScore']+=1;
	}
	else if (score== -1){
		totalScore['ComputerScore']+=1;
	}
	//console.log(totalScore['PlayerScore'])
	//console.log(totalScore['ComputerScore'])
	showResult(score,PlayerChoice,ComputerChoice)
}
function showResult(score,PlayerChoice,ComputerChoice){
	const resultDiv=document.getElementById('result')
	const handsDiv=document.getElementById('hands')
	const playerscoreDiv=document.getElementById('player-score')
	if(score== -1){
		resultDiv.innerText ="You Lose!"
	}else if(score ==0){
		resultDiv.innerText = "It's a Tie!"
	}else{
		resultDiv.innerText = "You Won!"
	}
	handsDiv.innerText = `${PlayerChoice} VS ${ComputerChoice}`
	playerscoreDiv.innerText = `Your Score: ${totalScore['PlayerScore']} VS Computer Score: ${totalScore['ComputerScore']}`
}
function endGame(totalScore){
	totalScore['PlayerScore']=0
	totalScore['ComputerScore']=0
	const resultDiv=document.getElementById('result')
	const handsDiv=document.getElementById('hands')
	const playerscoreDiv=document.getElementById('player-score')
	const finalresDiv=document.getElementById('finalres')
	resultDiv.innerText=''
	handsDiv.innerText=''
	playerscoreDiv.innerText=''
	finalresDiv.innerText=''
}
function final(totalScore){
	const finalresDiv=document.getElementById('finalres')
	if(totalScore['PlayerScore']>totalScore['ComputerScore']){
		finalresDiv.innerText='You Won'
	}
	else if(totalScore['PlayerScore']==totalScore['ComputerScore']){
		finalresDiv.innerText='Its a Tie!'
	}
	else{
		finalresDiv.innerText='You Lose!! Better Luck next time'
	}
}
playGame()