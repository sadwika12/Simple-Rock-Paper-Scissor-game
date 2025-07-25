const score={
    wins:0,
    lose:0,
    tie:0
};
let result=''

//function to track the player move and declare the result
function playgame(playermove){
    pickmove();
    if(playermove==='Scissor'){
        if(computermove ==='Rock'){
            result='Oh!you lost';
        }else if(computermove ==='Paper'){
            result='Hurray!you won';
        }else if(computermove ==='Scissor'){
            result='It\'s a tie'
        }
        scorecalculation();
    }else if(playermove==='Paper'){
        pickmove();
        if(computermove ==='Rock'){
            result='Hurray!you won';
        }else if(computermove ==='Paper'){
            result='It\'s a tie';
        }else if(computermove ==='Scissor'){
            result='Oh!you lost';
        }
        scorecalculation();
    }else if(playermove==='Rock'){
        pickmove();
        if(computermove ==='Rock'){
            result='It\'s a tie';
        }else if(computermove ==='Paper'){
            result='Oh!you lost';
        }else if(computermove ==='Scissor'){
            result='Hurray!you won';
        }
        scorecalculation();
    }
    document.querySelector('.choice').innerHTML=`Computer choosen:${computermove}.
    <br>You choosen:${playermove}`;
    document.querySelector('.result').innerHTML=`Result:${result}`;

}

//function to calculate the score
function scorecalculation(){
        if(result==='Hurray!you won'){
        score.wins=score.wins+1;
    }
    else if(result==='Oh!you lost'){
        score.lose+=1;
    }else if(result==='It\'s a tie'){
        score.tie+=1;
    }
    document.querySelector('.score').innerHTML=`Wins:${score.wins},Losses:${score.lose},Tie:${score.tie}`;
}
function resetscore(){
    score.wins=0;
    score.lose=0;
    score.tie=0
    document.querySelector('.score').innerHTML=`Wins:${score.wins},Losses:${score.lose},Tie:${score.tie}`;

}
let computermove='';

//function to make the random computer move
function pickmove(){
    const randomnumber=Math.random();
    if(randomnumber>=0 && randomnumber<1/3){
    computermove='Rock';
    }else if(randomnumber>=1/3 && randomnumber<2/3){
        computermove='Paper';
    }else if(randomnumber>=2/3 && randomnumber<1){
        computermove='Scissor';
    }
}