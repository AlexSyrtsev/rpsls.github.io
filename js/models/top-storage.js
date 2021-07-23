class TopStorage {
    constructor() {
        this.gamersList = [
            {
                name: 'Джон'
            },
            {
                name: 'Пол'
            },
            {
                name: 'Ринго'
            },
            {
                name: 'Джордж'
            }
        ];
    }

    getGamersFromLS() {
        return JSON.parse(localStorage.getItem('TopGamersInfo')) || this.gamersList && TopStorage.setGamersToLS(this.gamersList);
    }

    static setGamersToLS(gamers) {
        localStorage.setItem('TopGamersInfo', JSON.stringify(gamers));
    }
}

export default TopStorage;