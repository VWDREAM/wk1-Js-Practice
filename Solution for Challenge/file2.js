//define the function
function speedDetector(speed){
    const speedLimit = 70
    const pointPerKM = 5
//if spped is less or equal to 70 its okay
    if(speed <= speedLimit){
   console.log("OK");
   return
    }
    //points calculation where for every 5km above speed limit which is 70 gives driver 1 demerit point
    let points = Math.floor((speed - speedLimit) /pointPerKM);
    //if  they are more than 12 gives back License suspended
    if (points > 12) {
        console.log("License suspended");
    } else {
        console.log(`Points: ${points}`);
    }
}
speedDetector(20);
