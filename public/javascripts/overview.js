var logs = [{
    "id" : 0,
    "content" : "God Jul!",
    "date" : "2020-12-24",
    "favorite" : "true",
    "mood" : "😃",
    "authorId" : 0
},
{
    "id" : 1,
    "content" : "Merry Christmas!",
    "date" : "2020-12-25",
    "favorite" : "true",
    "mood" : "😃",
    "authorId" : 0  
},
{
    "id" : 2,
    "content" : "Happy Boxing Day!",
    "date" : "2020-12-26",
    "favorite" : "false",
    "mood" : "😃",
    "authorId" : 0  
},
{
    "id" : 3,
    "content" : "I very sad, no more chrimbus nooo ooooooo oooooo ooooo ooooo",
    "date" : "2020-12-29",
    "favorite" : "false",
    "mood" : "🙁",
    "authorId" : 0  
},
{
    "id" : 4,
    "content" : "It's New Years Eve!",
    "date" : "2020-12-31",
    "favorite" : "false",
    "mood" : "😃",
    "authorId" : 0  
},
{
    "id" : 5,
    "content" : "Goodbye 2020!",
    "date" : "2021-01-01",
    "favorite" : "true",
    "mood" : "😃",
    "authorId" : 0  
},
]

var ul = document.getElementById('entries');

var userLogs = logs.filter(x => x.authorId === 0);
console.log(userLogs);

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
