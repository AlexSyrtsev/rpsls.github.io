import Component from '../../views/component.js';

class PageHeader extends Component {
    render() {
        const resource = this.request.resource;
        return new Promise(resolve => {
            resolve(`
                <header style='transform: matrix(1, 0, 0, 1, 0, 0)'; class="page-header">                    
                    <a style='transform: matrix(1, 0, 0, 1, 0, 0)'; class="page-header__link ${!resource ? 'active' : ''}" href='#/'>
                        ГЛАВНАЯ
                    </a>
                    <a style='transform: matrix(1, 0, 0, 1, 0, 0)'; class='page-header__link ${resource === 'game' ? 'active' : ''}' href='#/game'>
                        ОБ ИГРЕ
                    </a>
                    <a id='top-guys'style='transform: matrix(1, 0, 0, 1, 0, 0)'; class="page-header__link ${resource === 'top-storage' ? 'active' : ''}" href='#/top'>
                        ТОП ИГРОКОВ
                    </a> 
                </header>
            `);
        });
    };
};

export default PageHeader;