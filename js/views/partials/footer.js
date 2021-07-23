import Component from '../../views/component.js';

class PageFooter extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
                <footer style='transform: matrix(1, 0, 0, 1, 0, 0)'; class='page-footer'>                   
                    <a class='page-footer__info' href='https://github.com/AlexSyrtsev'>
                        &copy; 2021 | by Aleks Syrtsev
                    </a>           
                </footer>
            `);
        });
    };
};

export default PageFooter;