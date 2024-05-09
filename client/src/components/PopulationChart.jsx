import PropTypes from "prop-types";
import { Authorization } from "../App";
import { useContext } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

function PopulationChart({ data }) {
  const [isLoggedIn] = useContext(Authorization);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  let barChartData;

  if (isLoggedIn) {
    barChartData = {
      labels: ["5 km", "10 km", "30 km", "100 km"], 
      datasets: [
        {
        label: "population", 
          data: [
            data.population_5km,
            data.population_10km,
            data.population_30km,
            data.population_100km,
          ],
          backgroundColor: ["#C63D2F", "#E25E3E", "#FF9B50", "#FFBB5C"],
          borderColor: ["#C63D2F", "#E25E3E", "#FF9B50", "#FFBB5C"],
          borderWidth: 1,
        }
      ],
    };
  }

  return (
    <>
      <Bar data={barChartData} />
    </>
  );
}

PopulationChart.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
};
export default PopulationChart;
