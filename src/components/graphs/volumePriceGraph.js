import TableBarChart from "../barcharts/tableBarChart";

const style_td = {
  border: "1px solid green", borderRadius: 10, padding: 5, color: "green", textAlign: "center"
}
  
const MiniChartTable = ({data}) => {

    if(!Object.keys(data).includes("columns") || !Object.keys(data).includes("rows")) return (
      <p style={{color: "red", textAlign: "center"}}>
        Cannot display table!<br/> Please check data format!
      </p>
    )

    return (
      <table style={{borderSpacing: "3px"}}>
        <thead>
          {data.columns.map((column, key) => (
            (key !== 0)? (
              <th key={key} style={{ backgroundColor: "#DDD", padding: 5}}>{column}</th>
            ):(
              <th key={key}></th>
            )
          ))}
        </thead>
        <tbody>
          {data.rows.map((row, key) => (
            <tr key={key}>
              {Object.keys(row).map((item, index) => (
                <td key={index} style={style_td}>{row[item]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
}

export default function VolumePriceGraph({chartData, tableData, title, currency}) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 20,
      border: "1px solid #DDD",
      borderRadius: 10,
      width : "100%",
      height: 500,
      padding: 15
    }}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }}>
        <div></div>
        <h2 style={{ textAlign: "center", color: "gray"}}>
          {title}
          <br/>
          <i style={{fontWeight: "lighter"}}>
            ({currency})
          </i>
        </h2>
        <MiniChartTable data={tableData} />
      </div>
      <TableBarChart data={chartData} />
    </div>
  );
}