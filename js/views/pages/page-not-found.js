import Component from '../../views/component.js';

class NotFound extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`                
                <h1 class='title'>Ошибка 404! Здесь Базонги нет.</h1>              
            `);
        });
    };
};

export default NotFound;