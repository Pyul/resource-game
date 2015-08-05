function enableTimers() {
    // Game saves every 1 second
    window.setInterval(function(){
        if(typeof(Storage) !== "undefined") {
            localStorage.savedGame = 1;
        
            localStorage.RESOURCEGAME_resources = JSON.stringify(resources);
            localStorage.RESOURCEGAME_workAllocation = JSON.stringify(workAllocation);
            localStorage.RESOURCEGAME_notifications = JSON.stringify(notifications);
        }
    }, 1000)

    // Resource amounts get updated every 5 seconds
    window.setInterval(function(){
       resources.wood += workAllocation.wood;
       resources.stone += workAllocation.stone;
       resources.water += workAllocation.water;
       resources.food += workAllocation.food;

       updateResourceVisual();
    }, 5000)

    window.setInterval(function(){
        notifications.push("next");
        updateEventVisual();
    }, 5000)
}