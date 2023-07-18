// Code your solution in this file!

function distanceFromHqInBlocks (someValue){
    const hQBlock = 42;
    return Math.abs(someValue - hQBlock);
}

function distanceFromHqInFeet (someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet (start, destination) {
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice (start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {   
        return 0;
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
        return ((distanceTravelledInFeet(start, destination) - 400) * 0.02);
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return 25.00
    } else return 'cannot travel that far';
}