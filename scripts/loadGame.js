var wood = 10;
var stone = 0;
var water = 0;
var food = 0;
var villagers = 0;
var workerDist = [0, 0, 0, 0]
var notifications = [];

var newGame = true;

if(typeof(Storage) !== "undefined") {
    if (localStorage.savedGame === 1) {
        wood = localStorage.resource_game_wood;
        stone = localStorage.resource_game_stone;
        water = localStorage.resouce_game_water;
        food = localStorage.resouce_game_food;
        villagers = localStorage.resouce_game_villagers;
        notifications = localStorage.resource_game_notifications;
        workerDist = localStorage.resource_game_workerDist;

        newGame = false;
    }
}

for (i = 0; i < 100; i++) {
    document.getElementById('mainBody').innerHTML += "<p>hi</p>";
}