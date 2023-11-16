import React, { useState } from "react"
import { Map, Marker, Overlay } from "pigeon-maps"
import { graph2Data } from "@/data/graph2Data"
import InteractiveBarChart from "../barcharts/interactiveBarChart"


const data = [
    [31.628084143239843, -8.00031285135198298],
    [60.44128171109847, 56.4568140137763],
    [-28.82517292162509, -65.47013422188664]
];


export default function AdvancedMap() {

    const [chartSize, setchartSize] = useState(300);
    const [hideChart, setHideChart] = useState(false);

    function zoomHandler({ center, zoom, bounds, initial }) {
        if(zoom > 2.5) {
            setchartSize(zoom * 70);
            if(hideChart) {
                setHideChart(false);
            }
        } else {
            setHideChart(true);
        }
    }
  return (
    <Map defaultCenter={[31.628084143239843, -8.00031285135198298]} defaultZoom={4}
        onBoundsChanged={zoomHandler}
    >
        {data.map((e, k) => (
            hideChart? <Marker key={k} width={50} anchor={e} />:
            <Overlay key={k} anchor={e} offset={[150, 150]}>
                <div style={{ width: chartSize+"px", height: chartSize+"px", backgroundColor: "transparent" }}>
                    <InteractiveBarChart data={graph2Data} interactive={false} />
                </div>
            </Overlay>
        ))}
        
    </Map>
  )
}