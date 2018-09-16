function initialization() {
    let storage = window.localStorage;
    storage.setItem("curr_notification", '0');
    // storage.removeItem("tips");
    if (!storage['tips']) {
        storage.setItem('tips', 'true');
    }
    if (storage.getItem('tips') == 'true') {
        setTimeout(function () { document.getElementsByClassName("notification")[0].style.display = "block"; }, 5000);
        setHelpfulInf(0);
    }
}

function setHelpfulInf(i) {
    let helpfulInformation = ["BAKING AND DESSERTS",
        "ALOHA!",
        "How to check the quality of eggs?",
        "Warning!!!",
        "Goodbye :)"];
    let l = helpfulInformation.length;
    (i > 0) ? i %= l
        : i = -i % l;
    let el = document.getElementsByClassName("helpful_inf");
    el[0].innerHTML = helpfulInformation[i];
}

function notificationClose() {
    if (disableTips.checked) {
        let storage = window.localStorage;
        storage.setItem('tips', 'false');
    }
    let notif = document.getElementsByClassName("notification");
    notif[0].style.display = 'none';
}

function getPrevNotification() {
    let storage = window.localStorage;
    storage['curr_notification'] = parseInt(storage['curr_notification'], 10) - 1;
    setHelpfulInf(storage['curr_notification']);
}

function getNextNotification() {
    let storage = window.localStorage;
    storage['curr_notification'] = parseInt(storage['curr_notification'], 10) + 1;
    setHelpfulInf(storage['curr_notification']);
}