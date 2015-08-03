function updateResourceVisual() {
   var numResourceListing = "<tr><td class = \"tableHeader\"><p>Type</p></td>";
   numResourceListing += "<td class = \"lastInResourceTable tableHeader\"><p>We have</p></td></tr>";

   for (var key in resources) {
      if (resources.hasOwnProperty(key)) {
        numResourceListing += "<tr>";
        numResourceListing += "<td><p>" + key + "</p></td>";
        numResourceListing += "<td class = \"lastInResourceTable\"><p>" + resources[key].toString() + "</p></td>";
        numResourceListing += "</tr>\n";
      }
    }

   document.getElementById('resourceListing').innerHTML = numResourceListing;
}

function updateEventVisual() {
    var notificationBody = document.getElementById('notificationBody');
    notificationBody.innerHTML = "";

    for (var i = notifications.length - 1; i >= 0; i--) {
        notificationBody.innerHTML += "<p class = \"notificationText\">" + notifications[i] + "</p>";
    }
}