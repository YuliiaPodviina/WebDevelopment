const setup = () => {
    let btnGo = document.getElementById("btnGo");
    
    btnGo.addEventListener("click",search)
    showHistory();
}

const search = () => {
    let input = document.getElementById('inputSearch').value;
    let inputSplited = input.split(' ');

    let command = {};
    let prefix = inputSplited[0];
    let ending = '';

    for (let i = 1; i < inputSplited.length; i++) {
        ending += ' ' + inputSplited[i];
    }

    let urlStart = defineUrlStartAndTitle(prefix).urlStart;
    let urlEnding = defineUrlEnding(ending);
    let url = urlStart+urlEnding;

     if (prefix.indexOf("/") !== -1 && urlStart === undefined) {
         window.alert('Unknown command prefix');
     } else if (urlStart === undefined) {
         window.alert('Invalid command');
     } else {
        // save to local storage
        command.title = defineUrlStartAndTitle(prefix).title;
        command.url = url;
        command.text = ending.trim();
        command.cardStyle = defineUrlStartAndTitle(prefix).cardStyle;
        command.btnStyle = defineUrlStartAndTitle(prefix).btnStyle;

        let commands = JSON.parse(localStorage.getItem('commands')) || [];
        commands.push(command);
        let commandsJSON = JSON.stringify(commands);
        localStorage.setItem('commands', commandsJSON);

        // open in new tab
        window.open(url);

        // add to the history
        addToTheHistory(command);
    }

    // clear input
    document.getElementById('inputSearch').value = '';
}

const addToTheHistory = command => {
    let container = document.getElementById('history_container');

    let card = document.createElement("div");
    card.classList.add("card", "col-4", "border-light", command.cardStyle);

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = command.title;
    cardBody.appendChild(cardTitle);

    let cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerText = command.text;
    cardBody.appendChild(cardText);

    let cardBtn = document.createElement("button");
    cardBtn.classList.add("btn",command.btnStyle);
    cardBtn.innerText = "Go!"
    cardBtn.addEventListener("click",() =>
        open(command.url));
    cardBody.appendChild(cardBtn);

    container.appendChild(card);
}

const showHistory = () => {
    let commands = JSON.parse(localStorage.getItem('commands')) || [];
    for (let i = 0; i < commands.length; i++) {
        addToTheHistory(commands[i]);
    }
}

const defineUrlStartAndTitle = prefix => {
    let urlStart;
    let cardStyle;
    let btnStyle;
    let title;
    let urlStartAndTitle = {};
    if (prefix === "/g"){
        urlStart = "https://www.google.com/search?q=";
        title = "Google";
        cardStyle = "google-card"
        btnStyle = "google-btn"
    }else if(prefix === "/y"){
        urlStart = "https://www.youtube.com/results?search_query=";
        title = "YouTube";
        cardStyle = "youtube-card"
        btnStyle = "youtube-btn"
    }else if(prefix === "/t"){
        urlStart = "https://twitter.com/hashtag/";
        title = "Twitter";
        cardStyle = "twitter-card"
        btnStyle = "twitter-btn"
    }else if (prefix === "/i"){
        urlStart = "http://www.instagram.com/explore/tags/";
        title = "Instagram";
        cardStyle = "instagram-card"
        btnStyle = "instagram-btn"
    }else{
        urlStart = undefined;
        title = undefined;
        cardStyle = undefined;
        btnStyle = undefined;
    }
    urlStartAndTitle.urlStart = urlStart;
    urlStartAndTitle.title = title;
    urlStartAndTitle.cardStyle = cardStyle;
    urlStartAndTitle.btnStyle = btnStyle;
    return urlStartAndTitle;
}


const defineUrlEnding = ending => {
    return ending.trim().replace(' ', '+');
}


window.addEventListener("load", setup);
