function createResourceVisual() {
   var numResourceListing = "<tr><td class = 'tableHeader'><p>Item Name</p></td>";
   numResourceListing += "<td class = 'lastColumn tableHeader'><p>Rate Every 5 Seconds</p></td></tr>";

   for (var key in resources) {
      if (resources.hasOwnProperty(key)) {
        rate = formatRateString(workAllocation[key].toString());

        numResourceListing += "<tr>";
        numResourceListing += "<td><p class = 'inline' id = '" + key + "Amount'>" + resources[key].toString() + "</p> <p class = 'inline'>" + key + "</p></td>";
        numResourceListing += "<td class = 'lastColumn'><p id = '" + key + "Rate'>" + rate + "</p></td>";
        numResourceListing += "</tr>\n";
      }
    }

   document.getElementById('resourceListing').innerHTML = numResourceListing;
}

function createNewGameVisual() {
    var mainBody = document.getElementById('mainBody');
    mainBody.innerHTML = "<p>You have recently been crowned king of a new exoplanet colony.</p>";
    mainBody.innerHTML += "<p>Your goal is to maximize the colony's chance of survival, by any means.</p>";
    mainBody.innerHTML += "<p>Good luck!</p>"; 
    mainBody.innerHTML += "<p class = 'button' id = 'startGame'> Start Game </p>";

    document.getElementById('startGame').addEventListener("click", function() {
        enableGame();
    });
}

function createEventVisual() {
    var notificationBody = document.getElementById('notificationBody');
    notificationBody.innerHTML = "";

    for (var i = notifications.length - 1; i >= notifications.length - 10 && i >= 0; i--) {
        notificationBody.innerHTML += "<p class = 'notificationText'>" + notifications[i] + "</p>";
    }
}

function updateResourceVisual() {
    for (var key in resources) {
        if (resources.hasOwnProperty(key)) {
            document.getElementById(key + "Amount").innerHTML = resources[key].toString();

            var rate = formatRateString(workAllocation[key].toString());
            document.getElementById(key + "Rate").innerHTML = rate;
        }
    }
}

function updateEventVisual() {
    var notificationBody = document.getElementById('notificationBody');
    var newNotificationHTML = "<p class = 'notificationText' id = 'newNotification'>" + notifications[notifications.length - 1] + "</p>";
    notificationBody.innerHTML = newNotificationHTML + notificationBody.innerHTML;

    newNotification = document.getElementById('newNotification');
    newNotification.style.opacity = 0.00;
    
    setTimeout(function increaseOpacity(){ 
        newNotification.style.opacity += 1;
    }, 100);

    newNotification.id = "";

    var allNotifications = notificationBody.getElementsByClassName('notificationText');

    if (allNotifications.length > 10) {
        allNotifications[allNotifications.length - 1].outerHTML = "";
    }
}

function clearNewGameVisual() {
    document.getElementById('mainBody').innerHTML = "";
}

function formatRateString(resourceRate) {
    var rate = resourceRate.toString();

    if (resourceRate > 0) {
        rate = "+" + rate;
    } else if (resourceRate < 0) {
        rate = "-" + rate;
    }

    return rate;
}