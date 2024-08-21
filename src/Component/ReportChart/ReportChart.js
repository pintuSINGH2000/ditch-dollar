import React, { useState } from "react";
import styles from "./reportChart.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { RiDownloadLine } from "react-icons/ri";
import { GRAPHDATA } from "../../Utility/GraphData";

const ReportChart = () => {
  const [filter,setFilter] = useState(2);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Overview</div>
        <div className={styles.download}>
          <RiDownloadLine className={styles.downloadIcon}/>
          Download Report
        </div>
      </div>
      <div className={styles.filter}>
          <div className={`${filter===1&&styles.active} ${styles.filterMenu}`} onClick={()=>setFilter(1)}>Monthly</div>
          <div className={`${filter===2&&styles.active} ${styles.filterMenu}`} onClick={()=>setFilter(2)}>Yearly</div>
        </div>
      <div style={{ width: "100%", height: "300px" }}>
        <ResponsiveContainer>
          <BarChart
            data={GRAPHDATA[filter-1]}
            margin={{ top: 0, right: 30, left: -10, bottom: 0 }}
            width={25}
          >
            <XAxis
              dataKey="name"
              tick={{
                fill: "rgba(152, 162, 179, 1)",
                fontFamily: "Manrope",
                fontSize: 12,
                fontWeight: 600,
                lineHeight: "13.2px",
              }}
              axisLine={false} 
              tickLine={false}
            />
            <YAxis
              domain={[0, 1500]}
              ticks={[0, 250, 500, 1000, 1500]}
              tickFormatter={(value) => `$${value}`}
              tick={{
                fill: "rgba(152, 162, 179, 1)",
                fontFamily: "Manrope",
                fontSize: 12,
                fontWeight: 600,
                lineHeight: "13.2px",
              }}
              tickLine={false}
              stroke="rgba(234, 236, 240, 1)"
            />
            <Tooltip />
            
            <Bar dataKey="value" fill="#8884d8" barSize={25} radius={[4.8, 4.8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReportChart;
