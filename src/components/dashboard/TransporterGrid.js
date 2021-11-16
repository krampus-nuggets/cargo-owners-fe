import React from "react";
import TransporterCard from "./TransporterCard";

const TransporterGrid = ({ dataArray }) => {
    return (
        <div className="w-full p-4">
            <div className="h-full flex float-right mb-4">
                <div className="flex items-center">
                    <img className="rounded-full h-10 bg-black" src="https://robohash.org/geoff.png" alt="project-repository-icon" />
                </div>
                <div className="flex items-center float-right">
                    <span className="font-bold p-1 ml-2 text-black text-2xl">
                        All Transporter Rates
                    </span>
                </div>
            </div>
            <div className="w-full flex flex-row flex-none overflow-x-auto gap-x-8">
                {
                    dataArray.map((value) => {
                        return (
                            <TransporterCard transporterData={value} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default TransporterGrid;