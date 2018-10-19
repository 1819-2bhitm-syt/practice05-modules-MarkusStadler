function startProgram(waitTime, programName, program) {
    console.log("***  " + programName + " will start in " + waitTime + " seconds. ***");

    setTimeout(() => {
        console.log("*** Starting " + programName + " ***");
        program();
    }, waitTime * 1000);
}

module.exports.startProgram = startProgram;
