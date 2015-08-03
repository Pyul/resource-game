window.setInterval(function(){
    if(typeof(Storage) !== "undefined") {
        localStorage.savedGame = 1;
        localStorage.resource_game_wood = wood;
        localStorage.resource_game_stone = stone;
        localStorage.resouce_game_water = water;
        localStorage.resouce_game_food = food;
        localStorage.resouce_game_villagers = villagers;
        localStorage.resource_game_notifications = notifications;
        localStorage.resource_game_workerDist = workerDist;
    }
}, 10000)

window.setInterval(function(){
   wood += workerDist[0];
   stone += workerDist[1];
   water += workerDist[2];
   food += workerDist[3];

   newResourceListing 

   document.getElementById('resourceListing').innerHTML = newResourceListing;
}, 1000)