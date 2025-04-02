// Define the function
function speedDetector(speed) {
    const speedLimit = 70;  // Speed limit
    const pointPerKM = 5;   // 1 demerit point per 5km above speed limit

    // If speed is 70 or below, print "OK"
    if (speed <= speedLimit) {
        console.log("OK");
        return;
    }

    // Calculate demerit points
    let points = Math.floor((speed - speedLimit) / pointPerKM);

    // If points exceed 12, suspend license
    if (points > 12) {
        console.log("License suspended");
    } else {
        console.log(`Points: ${points}`);
    }
}


