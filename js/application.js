import {parseRequestURL} from './helpers/utils.js';
import PageHeader from './views/partials/header.js';
import Main from './views/pages/main-page.js';
import Game from './views/pages/game.js';
import BestPlayers from './views/pages/top/best-players.js';
import PageFooter from './views/partials/footer.js';
import NotFound from './views/pages/page-not-found.js';



const Pages = {
    '/': Main,
    '/game': Game,
    '/top': BestPlayers
};

function routing() {
    const headerBlock = document.getElementsByClassName('header')[0],
        footerBlock = document.getElementsByClassName('footer')[0],
        contentBlock = document.getElementsByClassName('content')[0],
        header = new PageHeader(),
        footer = new PageFooter();

    header.render().then(html => headerBlock.innerHTML = html);

    const request = parseRequestURL(),
        parsedURL = `/${request.resource || ''}${request.id ? '/game' : ''}${request.action ? `/${request.action}` : ''}`,
        page = Pages[parsedURL] ? new Pages[parsedURL]() : new NotFound();

    page.render().then(html => {
        contentBlock.innerHTML = html;
        page.afterRender();

    });

    footer.render().then(html => footerBlock.innerHTML = html);
}

window.addEventListener('load', routing);
window.addEventListener('hashchange', routing);