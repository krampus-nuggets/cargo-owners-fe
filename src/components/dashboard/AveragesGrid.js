import React from "react";
import AverageCard from "./AverageCard";

const AveragesGrid = ({ dataArray, routeID }) => {
    function constructAverageObject(ratesArray, route) {
        let allRates = [];
        let outputObject = {};

        for (let i = 0; i < ratesArray.length; i++) {
            if (route === ratesArray[i]["route_id"]) {
                allRates.push(ratesArray[i]["latest_rate"]);
            }
        }

        const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
        const max = Math.max(...allRates);
        const min = Math.min(...allRates);

        outputObject["avg_rate"] = average(allRates);
        outputObject["highest_rate"] = max;
        outputObject["lowest_rate"] = min;

        return outputObject;
    }

    let rateData = constructAverageObject(dataArray, routeID);

    let averageArray = [
        {
            "route_id": "RFG_ROUTE906",
            "loading_place": "Western Cape - Wellington",
            "destination": "North-West - Lichtenburg",
            "load_type": "Part load",
            "vehicle_type": "34 Ton - Tautliner (Superlink) Part load",
            "avg_rate": rateData.avg_rate,
            "highest_rate": rateData.highest_rate,
            "lowest_rate": rateData.lowest_rate,
            "trip_configuration": "One way"
        }
    ]

    return (
        <div className="w-full p-4">
            <div className="h-full flex float-right mb-4">
                <div className="flex items-center">
                    <img className="rounded-full h-10 bg-black" src="https://robohash.org/geoff.png" alt="project-repository-icon" />
                </div>
                <div className="flex items-center float-right">
                    <span className="font-bold p-1 ml-2 text-black text-2xl">
                        All Transporter Routes
                    </span>
                </div>
            </div>
            <div className="w-full flex flex-row flex-none overflow-x-auto gap-x-8">
                {
                    averageArray.map((value) => {
                        return (
                            <AverageCard transporterData={value} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default AveragesGrid;