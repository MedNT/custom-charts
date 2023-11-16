import InteractiveBarChart from "../barcharts/interactiveBarChart";

export default function TurnoverVariation({chartData, title, currency}) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            border: "1px solid #DDD",
            borderRadius: 10,
            height: "100%",
            width : "100%",
            padding: 15
          }}
        >
            <h2 style={{ textAlign: "center", color: "gray"}}>{title}<br/><i style={{fontWeight: "lighter"}}>({currency})</i></h2>
            <InteractiveBarChart data={chartData} />
        </div>
    );
}