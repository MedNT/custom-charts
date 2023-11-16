import { BarChart, Bar, ResponsiveContainer, XAxis, Cell} from 'recharts';
import styles from "./interactiveBarChart.module.css"
import { useEffect, useRef, useState } from 'react';
import { percentageDifference } from '@/helpers/helpers';


const barColors = ["gray", "green", "blue", "lightblue", "bluemarine"];


const DifferenceCalculator = ({data}) => {
  return (
    <div style={{
        width: "100%",
        height: "100%",
        marginLeft: data.positions[0]+"px",
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.centerBox}>
          <p style={{ fontSize: "18px", fontWeight: 800}}>{data.difference} 
            <br/> 
            {data.difference<0 && "-"}  {data.percentage}%
          </p>
        </div>
        <div style={{
            zIndex: 0,
            position: "absolute",
            backgroundColor: "transparent",
            top: "40%",
            left: -(data.positions[0] - data.positions[1]) + (60) + "px",
            width: (data.positions[2] - data.positions[1]) + "px",
            height: "200px",
            borderColor: "green",
            borderStyle: "dashed",
            borderWidth: "1px 1px 0px 1px"
          }}></div>
      </div>
    </div>
  )
}


export default function InteractiveBarChart({data, interactive=true}) {

  const [graphsData, setGraphsData] = useState([]);
  const [selectedGraphs, setSelectedGraphs] = useState([]);
  const [results, setResults] = useState({
    positions: [0, 0, 0],
    difference: 0,
    percentage: 0,
  });

  // tracking graphsData
  useEffect(() => {
    if(graphsData.length == 2) {
      // computing the middle point between two bars
      let middlePoint = graphsData[0].x + ((graphsData[1].x - graphsData[0].x)/2);
      setResults({
        // position === [circlePosition, firtbarPosition, secondBarPosition]
        positions: [middlePoint, graphsData[0].x, graphsData[1].x],
        difference: graphsData[1].value-graphsData[0].value,
        percentage: percentageDifference(graphsData[0].value, graphsData[1].value)
      });
    } else if(graphsData.length > 2) {
      clearData();
    }
  }, [graphsData])

  function barClickHandler(data, index) {
    // tracking selected graphs data
    if(selectedGraphs.length === 1) {
      if(index === selectedGraphs[0]) {
        alert('Operation Not Authorized');
        clearData();
        return;
      }
      if(index < selectedGraphs[0]) {
        alert('Operation Not Authorized');
        clearData();
        return;
      }
    }
    setGraphsData(p => [...p, {x: data.x, value: data.value}]);
    // tracking selected graphs indexes 
    // (used for graph coloriation purpose)
    setSelectedGraphs(p => [...p, index]);
  }

  function clearData() {
    setResults({
      positions: [0, 0, 0],
      difference: 0,
      percentage: 0
    });
    setGraphsData([]);
    setSelectedGraphs([]);
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100%",
      width: "100%",
    }}>
      <div style={{
        zIndex: 0,
        width: "100%",
        height: "20%",
        display: results.positions[0] === 0? 'none': 'flex'
      }}>
        <DifferenceCalculator data={results} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={730} height={250} data={data} margin={{top: 20, right: 20, bottom: 20, left: 20}}  >
            <XAxis dataKey="day" />
            <Bar dataKey="value" fill="#8884d8" label={{position: 'top'}} onClick={interactive? barClickHandler: () => {}}>
                {
                    data.map((entry, index) => (
                        <Cell
                          stroke={selectedGraphs.includes(index)? 'green': 'transparent'} 
                          strokeDasharray={"5 5"}
                          key={`cell-${index}`} 
                          fill={selectedGraphs.includes(index)? "lightgreen": barColors[index % 20]}
                        />
                    ))
                }
            </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
