let score = JSON.parse(localStorage.getItem('score'));

            if(!score){
                score = {
                    wins: 0,
                    losses: 0,
                    ties: 0
                };
            }

            updateScore();

            let isAutoPlaying = false;
            let intervalId; 

            //const autoPlay = () =>{

            //};

            function autoPlay(){
                if(!isAutoPlaying){
                    intervalId = setInterval(() => {
                        //we are making the comp play with comp itself so we have automated it
                        const userMove = pickCompMove();
                        playGame(userMove);
                    },1000);
                    isAutoPlaying = true;
                }else{
                    clearInterval(intervalId);
                    isAutoPlaying = false;
                }
            }

            document.querySelector('.js-rock-button').addEventListener('click', ()=>{
                playGame('rock');
            });
            
            document.querySelector('.js-paper-button').addEventListener('click',()=>{
                playGame('paper');
            });

            document.querySelector('.js-scissor-button').addEventListener('click',()=>{
                playGame('scissor');
            });

            document.body.addEventListener('keydown',(event)=>{
                if(event.key==='r'){
                    playGame('rock');
                }else if(event.key==='p'){
                    playGame('paper');
                }else if(event.key==='s'){
                    playGame('scissor');
                }
            });

            
            function playGame(userMove){
                let compMove = pickCompMove();
                let result;
                if(userMove === 'rock'){
                    if(compMove === 'rock'){
                        result = 'Tie';
                    }
                    else if(compMove === 'paper'){
                        result = 'You lose';
                    }
                    else if(compMove === 'scissor'){
                        result = 'You win';
                    }
                }
                else if(userMove === 'paper'){
                    if(compMove === 'rock'){
                        result = 'You win';
                    }
                    else if(compMove === 'paper'){
                        result = 'Tie';
                    }
                    else if(compMove === 'scissor'){
                        result = 'You lose';
                    }
                }
                else if(userMove === 'scissor'){
                    if(compMove === 'rock'){
                        result = 'You lose';
                    }
                    else if(compMove === 'paper'){
                        result = 'You win';
                    }
                    else if(compMove === 'scissor'){
                        result = 'Tie';
                    }
                }

                if (result === 'You win'){
                    score.wins += 1;
                } else if(result === 'You lose'){
                    score.losses += 1;
                } else if(result === 'Tie'){
                    score.ties += 1;
                }

                localStorage.setItem('score', JSON.stringify(score));

                document.querySelector('.js-result').innerHTML = result;
                document.querySelector('.js-moves').innerHTML = `You <img src="images/${userMove}-emoji.png" class="move-icon"> 
                <img src="images/${compMove}-emoji.png" class="move-icon">Computer`;

                updateScore();
                
                
            }

            function updateScore(){
                document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
            }

            function pickCompMove(){
                const ranNo = Math.random();
                let compMove = '';
                
                if(ranNo >= 0 && ranNo < 1/3){
                    compMove = 'rock';
                }
                else if(ranNo >= 1/3 && ranNo < 2/3){
                    compMove = 'paper';
                }
                else if(ranNo >= 2/3 && ranNo < 1){
                    compMove = 'scissor';
                }

                console.log(compMove);
                return compMove;
            }

            function resetScore() {
                score.wins = 0;
                score.losses = 0;
                score.ties = 0;
                localStorage.removeItem('score');
                updateScore();
            }