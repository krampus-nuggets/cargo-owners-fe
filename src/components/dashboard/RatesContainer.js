import React from "react";
import TransporterGrid from "./TransporterGrid";
import AveragesGrid from "./AveragesGrid";
import { transportArray } from "../global/modelData";

const RatesContainer = () => {
    const [showGrid, setShowGrid] = React.useState(true);

    return (
        <div className="w-full flex flex-col">
            <div id="rate-button-container" className="w-full flex flex-row p-4 gap-x-4" >
                <button className="w-60 py-2 bg-black text-white font-medium rounded-md" onClick={ () => setShowGrid(true) }>
                    Transporter Rates
                </button>
                <button className="w-60 py-2 bg-black text-white hover:bg-white hover:text-black font-medium rounded-md" onClick={ () => setShowGrid(false) }>
                    Average Rates
                </button>
            </div>
                {
                    showGrid ? <TransporterGrid dataArray={ transportArray } /> : <AveragesGrid dataArray={ transportArray } routeID="RFG_ROUTE906" />
                }
        </div>
    )
}

export default RatesContainer;