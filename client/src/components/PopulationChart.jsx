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
      labels: ["5km", "10km", "30km", "100km"],
      datasets: [
        {
          label: "population",
          data: [
            data.population_5km,
            data.population_10km,
            data.population_30km,
            data.population_100km,
          ],
          backgoundColor: "rgba(155, 99,123,0.2)",
          borderColor: "rgba(155, 99,123,0.2)",
          borderWidth: 1,
        },
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
