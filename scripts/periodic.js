// Game saves every 10 seconds
window.setInterval(function(){
    if(typeof(Storage) !== "undefined") {
        localStorage.savedGame = 1;
        
        localStorage.RESOURCEGAME_resources = resources;
        localStorage.RESOURCEGAME_workAllocation = workAllocation;
        localStorage.RESOURCEGAME_notifications = notifications;
    }
}, 10000)

// Resource amounts get updated every 5 seconds
window.setInterval(function(){
   resources.wood += workAllocation.wood;
   resources.stone += workAllocation.stone;
   resources.water += workAllocation.water;
   resources.food += workAllocation.food;

   updateResourceVisual();
}, 5000)

// Events get updated every 1 second
window.setInterval(function(){
   updateEventVisual();
}, 1000)