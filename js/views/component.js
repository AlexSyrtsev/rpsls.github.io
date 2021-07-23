import {parseRequestURL} from '../helpers/utils.js';

import TopStorage from '../models/top-storage.js';

class Component {
    constructor() {
        this.request = parseRequestURL();
        this.gamers = new TopStorage().getGamersFromLS();
    }
    
    afterRender() {}
}

export default Component;