import React from 'react';
import TransporterCardInfo from './TransporterCardInfo';

const TransporterCard = ({ transporterData }) => {
    return (
        <div class='w-80 flex flex-col flex-wrap flex-none bg-gradient-to-r from-green-400 to-blue-500 rounded-md p-3'>
            <div className="flex items-center justify-center mb-4">
                <img className="rounded-full h-14 bg-black" src="https://robohash.org/geoff.png" alt="project-repository-icon" />
            </div>
            <TransporterCardInfo heading="COMPANY" content={ transporterData.cob_name } />
            <TransporterCardInfo heading="ROUTE-ID" content={ transporterData.route_id } />
            <TransporterCardInfo heading="START" content={ transporterData.loading_place } />
            <TransporterCardInfo heading="END" content={ transporterData.destination } />
            <TransporterCardInfo heading="LOAD TYPE" content={ transporterData.load_type } />
            <TransporterCardInfo heading="VEHICLE TYPE" content={ transporterData.vehicle_type } />
            <TransporterCardInfo heading="LATEST RATE" content={ transporterData.latest_rate } />
            <TransporterCardInfo heading="TRIP RATE" content={ transporterData.trip_configuration } />
        </div>
    );
}

export default TransporterCard;