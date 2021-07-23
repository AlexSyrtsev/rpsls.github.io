import Component from '../../views/component.js';

class Main extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
                <div class='main'> 
                    <h1 class='title'>BAZONGO!</h1>                   
                    <p class='main__info'>Азарт противостояния, радость победы или разочарование поражения:<br>всё это позволяет получить BAZONGO! – приятный тайм-киллер,<br>с которым легко скоротать время.</p>
                    <a class='main__btn-start button' href='#/game'>Начнём?</a>
                </div>
            `);
        });
    };

};

export default Main;