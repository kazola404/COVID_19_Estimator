// Estimator input data received
const inputData = {
    region: {
    name: "Africa",
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
    },
    periodType: "days",
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
};

//output result
const outputData = {
    data: inputData,           // the input data you got
    impact: {},         // your best case estimation
    severeImpact: {}    // your severe case estimation
};

const covid19ImpactEstimator = (data) => data;

//variable declaration to hold the result of covid19ImpactEstimator function call
const currentlyInfected = covid19ImpactEstimator(inputData.reportedCases);
const totalHospitalBeds = inputData.totalHospitalBeds;
//const impactPercent = Math.floor((35/100) * totalHospitalBeds);

const challengeEstimator = (currentlyInfected, totalHospitalBeds) => {
    return (
/********************CHALLENGE - 1 *******************************/
        //property currentlyInfected added to the impact object
        outputData.impact["currentlyInfected"] = currentlyInfected * 10,
        //property currentlyInfected added to the severeImpact object
        outputData.severeImpact["currentlyInfected"] = currentlyInfected * 50,

        //property infectionsByRequestedTime, added to the impact object
        outputData.impact["infectionsByRequestedTime"] = outputData.impact.currentlyInfected * Math.pow(2, 9),

        //property infectionsByRequestedTime, added to the severeImpact object
        outputData.severeImpact["infectionsByRequestedTime"] = outputData.severeImpact.currentlyInfected * Math.pow(2, 9),

/********************CHALLENGE - 2 *******************************/
        
        //property severeCasesByRequestedTime, added to the impact object
        outputData.impact["severeCasesByRequestedTime"] = (15/100) * outputData.impact.infectionsByRequestedTime,

        //property severeCasesByRequestedTime, added to the severeImpact object
        outputData.severeImpact["severeCasesByRequestedTime"] = (15/100) * outputData.severeImpact.infectionsByRequestedTime,

        //property hospitalBedsByRequestedTime, added to the impact object
        outputData.impact["hospitalBedsByRequestedTime"] = Math.floor((35/100) * totalHospitalBeds),

        //property hospitalBedsByRequestedTime, added to the severeImpact object
        outputData.severeImpact["hospitalBedsByRequestedTime"] = Math.floor((35/100) * totalHospitalBeds),

        
/********************CHALLENGE - 3 *******************************/

        //property casesForICUByRequestedTime, added to the impact object
        outputData.impact["casesForICUByRequestedTime"] = Math.floor((5/100) * outputData.impact.infectionsByRequestedTime),

        //property casesForICUByRequestedTime, added to the severeImpact object
        outputData.severeImpact["casesForICUByRequestedTime"] = Math.floor((5/100) * outputData.severeImpact.infectionsByRequestedTime),

        //property casesForVentilatorsByRequestedTime, added to the impact object
        outputData.impact["casesForVentilatorsByRequestedTime"] = Math.floor((2/100) * outputData.impact.infectionsByRequestedTime),

        //property casesForVentilatorsByRequestedTime, added to the severeImpact object
        outputData.severeImpact["casesForVentilatorsByRequestedTime"] = Math.floor((2/100) * outputData.severeImpact.infectionsByRequestedTime),

        //property dollarsInFlight, added to the impact object
        outputData.impact["dollarsInFlight"] = Math.floor((outputData.impact.infectionsByRequestedTime * 0.65 * 1.5)/30),

        //property dollarsInFlight, added to the severeImpact object
        outputData.severeImpact["dollarsInFlight"] = Math.floor((outputData.severeImpact.infectionsByRequestedTime * 0.65 * 1.5)/30)
    );
};


export default covid19ImpactEstimator;
export default challengeEstimator;