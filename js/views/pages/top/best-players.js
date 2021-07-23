import {createID} from '../../../helpers/utils.js';

import Component from '../../../views/component.js';

class BestPlayers extends Component {
    render() {
        let htmlList = '';

        this.gamers.forEach((item, key) => {
            htmlList += `<div>
                            <input id='ac-` + key + `' name='accordion-` + key + `' type='checkbox'/>
                            <label htmlFor='ac-` + key + `'>` + item.name + `</label>
                            <article>
                                <p>Уровень: ` + item.level + `</p>
                            </article>
                        </div>`;
        })

        return new Promise(resolve => {
            resolve(`
                <section class='ac-container'>
                    <h1 class='page-title'>ТОП ИГРОКОВ</h1>
                    ` + htmlList + `
                </section>     
            `);
        });
    }
}

export default BestPlayers;