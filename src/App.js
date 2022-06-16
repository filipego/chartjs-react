import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#0A95BC",
          "#B92F18",
          "#E86A14",
          "#E2C335",
          "#99B461"
        ],
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="App">
      <div style={{ maxWidth: 700 }}>
        <h2>Bar Chart</h2>
        <BarChart chartData={userData} />
      </div>
      <div style={{ maxWidth: 700 }}>
        <h2>Line Chart</h2>
        <LineChart chartData={userData} />
      </div>
      <div style={{ maxWidth: 500 }}>
        <h2>Pie Chart</h2>
        <PieChart chartData={userData} />
      </div>
    </div >
  );
}

export default App;