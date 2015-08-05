var resources = {};
resources.wood = 0;
resources.stone = 0;
resources.water = 5;
resources.food = 5;
resources.gold = 0;

var workAllocation = {};
workAllocation.wood = 0;
workAllocation.stone = 0;
workAllocation.water = 0;
workAllocation.food = 0;
workAllocation.gold = 0;

var notifications = ["A new dawn rises on your empire..."];
var newGame = true;

// if localStorage is enabled on their browser
if(typeof(Storage) !== "undefined") {
    if (localStorage.savedGame === "1") {
        resources = JSON.parse(localStorage.RESOURCEGAME_resources);
        workAllocation = JSON.parse(localStorage.RESOURCEGAME_workAllocation);
        notifications = JSON.parse(localStorage.RESOURCEGAME_notifications);

        newGame = false;
    }
}

if (newGame === true) {
    createNewGameVisual();
} else {
    enableGame();
}

function enableGame() {
    clearNewGameVisual();
    createResourceVisual();
    createEventVisual();
    enableTimers();
}