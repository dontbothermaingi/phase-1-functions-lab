// Code your solution in this file!
let start = 50;
 function distanceFromHqInBlocks(start){
    const headquaterStreet = 42;
    const distanceInBlocks = Math.abs(start- headquaterStreet);
    return distanceInBlocks;
}

const blockDistance = 264;
function distanceFromHqInFeet(start){
    const distanceInBlocks = distanceFromHqInBlocks(start);
    const distanceInFeet = blockDistance * distanceInBlocks;
    return distanceInFeet;
}

let destination = 60;
function distanceTravelledInFeet(start,destination){
        const distanceTravelledInBlocks = Math.abs(destination-start);
        const distanceTravelledByFeet = distanceTravelledInBlocks * blockDistance;
        return distanceTravelledByFeet;
       
}



function calculatesFarePrice(start, destination){
    const distanceTravelledByFeet = distanceTravelledInFeet(start,destination);
   
    if(distanceTravelledByFeet <= 400){
        return 0
    }else if(distanceTravelledByFeet <= 2000){
        const price = 0.02;
        const actualDistanceTravelled = distanceTravelledByFeet - 400;
        const fairPrice = actualDistanceTravelled * price;
        return fairPrice;
    }else if( distanceTravelledByFeet <= 2500){
        return 25
    }else{
        return "cannot travel that far"
    }
}

