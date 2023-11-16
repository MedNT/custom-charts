import AdvancedMap from "@/components/worldMaps/AdvancedMap";
import SimpleMap from "@/components/worldMaps/SimpleMap";

function Maps() {
    return (
        <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", gap: "30px", alignItems: "center"}}>
            {/* <SimpleMap /> */}
            <AdvancedMap />
        </div>
    );
}

export default Maps;