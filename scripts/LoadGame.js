var resources = {};
resources.wood = 10;
resources.stone = 0;
resources.water = 0;
resources.food = 0;
resources.villagers = 1;

var workAllocation = {};
workAllocation.wood = 1;
workAllocation.stone = 0;
workAllocation.water = 0;
workAllocation.food = 0;
workAllocation.villagers = 0;

var notifications = ["Welcome to The Resource Game!", "Next (more recent) notification", "A REALLY REALLY REALLY REALLY REALLY REALLY LONG NOTIFICATIONNNNNNNNNN", "4", "5", "6", "7", "8", "9", "10"];
var newGame = true;

// if localStorage is enabled on their browser
if(typeof(Storage) !== "undefined") {
    if (localStorage.savedGame === 1) {
        resources = localStorage.RESOURCEGAME_resources;
        workAllocation = localStorage.RESOURCEGAME_workAllocation;
        notifications = localStorage.RESOURCEGAME_notifications;

        newGame = false;
    }
}

updateResourceVisual();
updateEventVisual();