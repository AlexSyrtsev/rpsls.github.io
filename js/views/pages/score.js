import Component from '../component.js';

class Score extends Component {
    async render() {
        return new Promise(resolve => {
            resolve(`
                <div class="page-content">
                    <button id='best-players'>Get Users List</button>
            
                    <div class="main-block">
                        <div class="users-tabs"></div>
                        <div class="info-blocks"></div>
                    </div>
                </div>
            `);
        })
    }

    afterRender() {
        this.drawTabs();
    }

    btnGet = document.getElementsByTagName('button')[0];
    mainBlock = document.getElementsByClassName('main-block')[0];
    usersTabs = mainBlock.getElementsByClassName('users-tabs')[0];
    infoBlock = mainBlock.getElementsByClassName('info-block')[0];

    btnGet.onclick = function() {
        var usersData = JSON.parse(localStorage.getItem('usersData'));

        if (usersData) {
            drawTabs(usersData);
        } else {
            var ajaxRequest = new XMLHttpRequest();

            ajaxRequest.open('GET', 'https://reqres.in/api/users?page=2');

            ajaxRequest.onload = function() {
                try {
                    var usersData = JSON.parse(this.response).data;

                    if (usersData.length) {
                        localStorage.setItem('usersData', JSON.stringify(usersData));

                        drawTabs(usersData);
                    } else {
                        showError();
                    }
                } catch {
                    showError();
                }
            };

            ajaxRequest.onerror = function() {
                showError();
            };

            ajaxRequest.send();
        }
    };

    drawTabs(usersData) {
        usersTabs.innerHTML = '';

        usersData.forEach(function(user, i) {
            usersTabs.innerHTML +=
                '<div class="user-tab ' + (!i ? 'active' : '') + '" id="' + i + '">' +
                    'User ' + (i + 1) +
                '</div>';

            !i && renderInfo(user);
        });

        usersTabs.onclick = setActiveTab;
    }

    setActiveTab() {
        var target = event.target;

        if (target.classList.contains('user-tab')) {
            usersTabs.getElementsByClassName('active')[0].classList.remove('active');
            target.classList.add('active');

            var usersData = JSON.parse(localStorage.getItem('usersData'));

            renderInfo(usersData[+target.id]);
        }
    }

    renderInfo(user) {
        infoBlock.innerHTML =
            '<img src="' + user.avatar + '">' +
            '<p>' +
                'First Name: ' + user.first_name + '<br>' +
                'Last Name: ' + user.last_name +
            '</p>';
    }

    showError() {
        mainBlock.innerHTML = '<div class="error">Сервер недоступен.</div>';
    }
};

export default Score;