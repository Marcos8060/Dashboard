"use client";

import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import { useState } from "react";
import { useTheme } from "@mui/material";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

const Dashboard = () => {
  const theme = useTheme();
  const [options, setOptions] = useState({
    chart: {
      // height: 540,
      style: {
        fontFamily: "inherit", // Set the desired font family
        fontSize: "14px", // Set the desired font size
      },
    },
    title: {
      text: "Tech Pay Gap in Kenya",
    },
    xAxis: {
      title: {
          text: 'Years'
      },
      categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    series: [
      {
        name: "",
        data: [10000, 30000, 32000, 40000, 60000, 70000],
        color: theme.palette.secondary.main,
      },
    ],
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
  });
  return (
    <>
      <section className="p-4 space-y-4 bg-[#DFEAF0] h-[88vh]">
        <h1 className="text-2xl">Tech Renumeration in Kenya</h1>
        <div className="bg-white shadow-2xl w-11/12 rounded">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
