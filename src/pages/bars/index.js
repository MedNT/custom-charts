import TurnoverVariation from "@/components/graphs/turnoverVariation";
import VolumePriceGraph from "@/components/graphs/volumePriceGraph";
import { graph1Data, graph1Table } from "@/data/graph1Data";
import { graph2Data } from "@/data/graph2Data";

function Bars() {
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "30px", alignItems: "center"}}>
            <VolumePriceGraph 
                chartData={graph1Data}
                tableData={graph1Table}
                title={"Effet volume et Effet prix (YTD vs YTD-1)"} 
                currency={"MMAD"}
            />
            <TurnoverVariation 
                chartData={graph2Data}
                title={"Variation du Chiffre d'affaire"}
                currency={"MMAD"}
            />
        </div>
    );
}

export default Bars;