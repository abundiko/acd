"use client";

import { useDashboardState } from "@/state/dashboardStore";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Suspense } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export const options = {
  indexAxis: "y" as const,
  scales: {
    x: {
      beginAtZero: true,
      suggestedMax: 100,
    },
  },
  elements: {
    bar: {
      borderWidth: 2,
      borderRadius: 12,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      color: '#fff',
      font: {
        weight: 500
      },
      anchor: "center" as const,
      align: "center" as const,
      formatter: function (value: string, context: any) {
        return (Number(value) / 10) + "/10";
      },
    },
  },
};

const labels = [
  ["Access to Building","(External way finding)"],
  ["Accessible"," Goods and Services"],
  ["Accessible furniture"," Fixtures & Utilities"],
  ["Accessible Additional"," Amenities"],
];

export default function StructuralComplianceMetrics() {
  const { amenities, fixtures, goods, external } = useDashboardState(
    (s) => s.org
  );

  const data: ChartData<"bar", number[], string> = {
    labels:labels as any as string[],
    datasets: [
      {
        label: "",
        data: [external, goods, fixtures, amenities].map((_) => Number(_) ?? 0),
        borderColor: "#1AA367",
        backgroundColor: "#1AA367",
      },
    ],
  };

  return (
    <div className="dashboard-card flex flex-col gap-3">
      <h3 className="font-semiblod text-sm">Structural Compliance Metrics</h3>
      <div className="w-[300px]">
        <Suspense>
          <Bar options={options} data={data} className="w-full h-[200px]" style={{
            height: "300"
          }} />
        </Suspense>
      </div>
    </div>
  );
}
