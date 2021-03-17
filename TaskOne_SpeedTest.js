function speedtest(speed) {

    if (speed <= 10) {
        console.log("Slow");
    } else if (speed > 10 && speed <= 40) {
        console.log("Average");
    } else if (speed > 40 && speed <= 100) {
        console.log("Fast");
    } else if (speed > 100 && speed <= 180) {
        console.log("Very Fast");
    } else {
        console.log("Extermely Fast");
    }
}
speedtest();  // Pass any Values to Check This Output 
