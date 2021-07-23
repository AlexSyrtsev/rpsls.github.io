import Component from '../component.js';

class Game extends Component {
    pScore = 0;
    cScore = 0;

    async render() {
        return new Promise(resolve => {
            resolve(`
                <section class='game'>
                    <div style='transform: matrix(1, 0, 0, 1, 0, 0)' class='score'>
                    <div class='player-score'>
                        <h2>Игрок</h2>
                        <p id='human'>0</p>
                    </div>
                    <div class='computer-score'>
                        <h2>Машина</h2>
                        <p id='machine'>0</p>
                    </div>
                    </div>
            
                    <div style='transform: matrix(1, 0, 0, 1, 0, 0)'; class='intro'>
                        <div class='rpsls' style='font-family: fantasy; font-size:45px'>
                            <span class='line1'>
                                <span class='R'>К</span>
                                <img class='o' src='./assets/diamond.png' style='margin-bottom: 0px; opacity:1; transform: matrix(1, 0, 0, 1, 0, 0); margin-left: -8px; visibility: visible;'>
                                <span class='ck'>мень</span>
                                <span class='S'>Н</span>
                                <img class='c' src='./assets/scissors-art.png' style='margin-bottom: 0px; transform: matrix(1, 0, 0, 1, 0, 0); opacity:1; visibility: visible;'>
                                <span class='issors'>жницы</span>
                                </span>
                                <span class='line2'>
                                <span class='P'>Б</span>
                                <img class='a' src='./assets/plane.png' style='margin-bottom: 0px; opacity:1; transform: matrix(1, 0, 0, 1, 0, 0); visibility: visible; margin-left: -18px'>
                                <span class='per'>мага</span>
                                <span class='L'>Я</span>
                                <img class='i' src='./assets/lizard-cover.png' style='margin-bottom: 0px; transform: matrix(1, 0, 0, 1, 0, 0); opacity:1; visibility: visible;'>
                                <span class='zard'>ерица</span>
                                </span>
                                <span class='line3'>
                                <span class='Sp'>Сп</span>
                                <img class='o' src='./assets/spock-cover.png' style='margin-bottom: 0px; margin-top: 10px; opacity:1; transform: matrix(1, 0, 0, 1, 0, 0); visibility: visible; margin-left: -8px'>
                                <span class='ck'>к</span>
                            </span>
                        </div>
            
                        <h2><b>Почему Камень-Ножницы-Бумага-Ящерица-Спок?</b><br>В классической версии соперники сыграют вничью в 75% случаев из-за ограниченного числа возможных исходов. Камень-Ножницы-Бумага-Ящерица-Спок была создана пионером Интернета Сэмом Кассом, как усовершенствование классической игры. Да здравствует Сэм Касс!</h2>
            
                        <h3><b>Какой символ бьет какой?</b><br>Это очень просто: Ножницы режут Бумагу. Бумага покрывает Камень. Камень давит Ящерицу. Ящерица отравляет Спока. Спок разрушает Ножницы. Ножницы обезглавливают Ящерицу. Ящерица ест Бумагу. Бумага опровергает Спока. Спок испаряет Камень. И, как всегда, Камень ломает Ножницы.</h3>
            
                        <button style='transform: matrix(1, 0, 0, 1, 0, 0);'>Играть</button>
                        
                    </div>               
            
                    <div class='match fadeOut'>
                        <h2 class='winner'>Выбирай с умом</h2>
                        <div class='hands'>
                            <img class='player-hand' src='./../../../assets/камень.png' alt='' />
                            <img class='computer-hand' src='./../../../assets/камень.png' alt='' />
                        </div>
                        <div class='options'>
                        <button class='rock'>камень</button>
                        <button class='scissors'>ножницы</button>
                        <button class='paper'>бумага</button>
                        <button class='lizard'>ящерица</button>
                        <button class='spock'>спок</button>
                        </div>
                    </div>
                
                    <div class='snowflakes' aria-hidden='true'>
                        <div class='snowflake'>
                        ★
                        </div>
                        <div class='snowflake'>
                        ★
                        </div>
                        <div class='snowflake'>
                        ★
                        </div>
                        <div class='snowflake'>
                        ★
                        </div>
                        <div class='snowflake'>
                        ★
                        </div>
                        <div class='snowflake'>
                        ★
                        </div>
                        <div class='snowflake'>
                        ★
                        </div>
                        <div class='snowflake'>
                        ★
                        </div>
                        <div class='snowflake'>
                        ★
                        </div>
                        <div class='snowflake'>
                        ★
                        </div>
                    </div>
                </section>
            `);
        })
    }

    afterRender() {
        localStorage.setItem('playerScore', 0);
        localStorage.setItem('computerScore', 0);
        this.startGame();
        this.playMatch();
    }

    startGame = () => {
        const playBtn = document.querySelector('.intro button'),
            introScreen = document.querySelector('.intro'),
            match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    playMatch = () => {
        console.log(this);
        const options = document.querySelectorAll('.options button'),
            playerHand = document.querySelector('.player-hand'),
            computerHand = document.querySelector('.computer-hand'),
            hands = document.querySelectorAll('.hands img');

            try {
                console.log('Приложение запускается...');
                hands != document.querySelectorAll('.hands img');
                console.log('Всё в порядке.');
            }
            catch(ex) {
                console.error('Возникло исключение!');
                console.error('Тип исключения: ' + ex.name);
                console.error('Текст исключения: ' + ex.message);
            }
            finally {
                console.log('Finally: приложение работает.')
            }

        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
            });
        });
        //Опции
        const computerOptions = ['камень', 'бумага', 'ножницы', 'ящерица', 'спок'];

        options.forEach(option => {
            option.addEventListener('click', (event) => {
                //Выбор варианта компьютером
                const computerNumber = Math.floor(Math.random() * 5);
                const computerChoice = computerOptions[computerNumber];
                const playerChoice = event.target.innerHTML;
                setTimeout(() => {
                    //Вызываем сравнение рук
                    this.compareHands(playerChoice, computerChoice);
                    //Обновляем картинки
                    playerHand.src = `./assets/${playerChoice}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);
                //Анимация
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            });
        });
    }

    updateScore = () => {
        const playerScore = document.querySelector('.player-score p'),
            computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = localStorage.getItem('playerScore');
        computerScore.textContent = localStorage.getItem('computerScore');
    };

    incrementScore = (key) => {
        let score = localStorage.getItem(key);
        localStorage.setItem(key, parseInt(score) + 1);
    };

    compareHands = (playerChoice, computerChoice) => {
        //Объявляем победителя раунда
        const winner = document.querySelector('.winner');
        //Проверка на ничью
        if (playerChoice === computerChoice) {
            winner.textContent = 'Ничья';
            return;
        }
        //Камень
        if (playerChoice === 'камень') {
            if (computerChoice === 'ножницы' || computerChoice === 'ящерица') {
                winner.textContent = 'Победа!';
                this.incrementScore('playerScore')
            } else {
                winner.textContent = 'Уфф...';
                this.incrementScore('computerScore')
            }
        }
        //Бумага
        if (playerChoice === 'бумага') {
            if (computerChoice === 'ножницы' || computerChoice === 'ящерица') {
                winner.textContent = 'Уфф...';
                this.incrementScore('computerScore')
            } else {
                winner.textContent = 'Победа!';
                this.incrementScore('playerScore')
            }
        }
        //Ножницы
        if (playerChoice === 'ножницы') {
            if (computerChoice === 'камень' || computerChoice === 'спок') {
                winner.textContent = 'Уфф...';
                this.incrementScore('computerScore')
            } else {
                winner.textContent = 'Победа!';
                this.incrementScore('playerScore')
            }
        }

        //Ящерица
        if (playerChoice === 'ящерица') {
            if (computerChoice === 'ножницы' || computerChoice === 'камень') {
                winner.textContent = 'Уфф...';
                this.incrementScore('computerScore')
            } else {
                winner.textContent = 'Победа!';
                this.incrementScore('playerScore')
            }
        }

        //Спок
        if (playerChoice === 'спок') {
            if (computerChoice === 'ящерица' || computerChoice === 'бумага') {
                winner.textContent = 'Уфф...';
                this.incrementScore('computerScore')
            } else {
                winner.textContent = 'Победа!';
                this.incrementScore('playerScore')
            }
        }
        this.updateScore();
    };
}

export default Game;