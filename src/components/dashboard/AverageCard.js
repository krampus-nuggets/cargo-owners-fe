import React from 'react';
import TransporterCardInfo from './TransporterCardInfo';

const AverageCard = ({ transporterData: averageData }) => {
    return (
        <div class='w-80 flex flex-col flex-wrap flex-none bg-gradient-to-r from-green-400 to-blue-500 rounded-md p-3'>
            <div className="flex items-center justify-center mb-4">
                <img className="rounded-full h-14 bg-black" src="https://robohash.org/steve.png" alt="project-repository-icon" />
            </div>
            <TransporterCardInfo heading="START" content={ averageData.loading_place } />
            <TransporterCardInfo heading="END" content={ averageData.destination } />
            <TransporterCardInfo heading="LOAD TYPE" content={ averageData.load_type } />
            <TransporterCardInfo heading="VEHICLE TYPE" content={ averageData.vehicle_type } />
            <TransporterCardInfo heading="AVERAGE RATE" content={ averageData.avg_rate } />
            <TransporterCardInfo heading="HIGHEST RATE" content={ averageData.highest_rate } />
            <TransporterCardInfo heading="LOWEST RATE" content={ averageData.lowest_rate } />
            <TransporterCardInfo heading="TRIP CONFIGURATION" content={ averageData.trip_configuration } />
        </div>
    );
}

export default AverageCard;