import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import TurnoverVariation from "../graphs/turnoverVariation";
import { graph2Data } from "@/data/graph2Data";
import InteractiveBarChart from "../barcharts/interactiveBarChart";

const markers = [
    {
      markerOffset: -15,
      name: "Buenos Aires",
      coordinates: [-58.3816, -34.6037]
    }
  ];
  

export default function SimpleMap() {

    function countryClickHandler(data, geo) {
        console.log(geo);
        console.log(data);
    }

    return (
        <div style={{ width: "100%", height: "90vh", position: "relative" }}>
            <ComposableMap
                style={{ position: "absolute", left: 0, top: 0, border: "1px solid red" }}
                projectionConfig={{
                    rotate: [-10, 0, 0],
                    scale: 200
                }}
            >
                <Geographies
                    geography="/worldmap.json"
                    fill="#D6D6DA"
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                >
                    {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography 
                            key={geo.rsmKey} 
                            geography={geo} 
                            fill="#242424" 
                            strokeWidth={0} 
                            onClick={(data) => countryClickHandler(data, geo)} 
                        />
                    ))
                    }
                </Geographies>
                {markers.map(({ name, coordinates, markerOffset }) => (
                    <Marker key={name} coordinates={coordinates} width={100} height={100}>
                        
                        
                    </Marker>
                ))}
            </ComposableMap>
            <div style={{position: "absolute", top: 406, left: 568, width: "15%", height: "25%", backgroundColor: "transparent", border: "1px solid blue"}}>
                <InteractiveBarChart data={graph2Data} />
            </div>
        </div>
    );
};