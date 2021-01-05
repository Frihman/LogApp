

fetch(window.location.origin + '/log')
.then(response => response.json())
.then(data => {
var ul = document.getElementById('entries');

var userLogs = data.filter(x => x.authorId === 0);

userLogs.forEach(item => {
    var li = document.createElement(li);
    li.classList.add('entry');
    var cMarkup

    var markup = `
    <div class='entry'>
    <div class='contentDate'>
    <h3>${item.content}</h3>
    <p class='entryDate'>${item.date}</p>
    `;

    if (item.favorite == 'true') {
        cMarkup = `
        <img src='/images/star-filled.png'>
        </div>
        <div class='moodFavorite'>
        <p class='entryMood'>${item.mood}</p>
        </div>
        </div>
        <hr>
        `;
    } else {
        cMarkup = `
        <img src='/images/star.png'>
        </div>
        <div class='moodFavorite'>
        <p class='entryMood'>${item.mood}</p>
        </div>
        </div>
        <hr>
        `;
    }

    li.innerHTML = markup + cMarkup;
    ul.appendChild(li);
    });

});




