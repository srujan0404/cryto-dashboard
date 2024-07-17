import { Box } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";

const AnalyticsChart = ({ type }) => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: type === "volume" ? "Transaction Volume" : "Revenue",
        data:
          type === "volume"
            ? [10, 20, 30, 40, 50, 60]
            : [15, 25, 35, 45, 55, 65],
        fill: false,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <Box>
      <Line data={data} />
    </Box>
  );
};

export default AnalyticsChart;
