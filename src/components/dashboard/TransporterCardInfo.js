import React from "react";
import Divider from "../global/Divider";

const TransporterCardInfo = ({ heading, content }) => {
    return (
        <div className="border-0">
            <div className="flex">
                <span className="font-bold text-sm">{ (heading) ? heading : 'NULL' }</span>
            </div>
            <Divider />
                <span className="text-sm">
                    { content }
                </span>
        </div>
    );
}

export default TransporterCardInfo;