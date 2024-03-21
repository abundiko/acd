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
  ChartData
} from "chart.js";
import { Suspense } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export const options = {
  indexAxis: 'y' as const,
  scales: {
            x: {
                beginAtZero: true,
                suggestedMax: 100
            }
        },
  elements: {
    bar: {
      borderWidth: 2,
      borderRadius: 12
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
                anchor: 'end',
                align: 'end',
                formatter: function(value:string, context:any) {
                    return value+"%";
                }},
  },
};

const labels = [
  'Access to Building',
  'Enterance, Reception,\rWaiting Area',
  'Rooms/Halls/Offices',
  'Circulation paths/\rInternal Way-finding',
  'General toilets',
  'Accessible toilets',
  'Lifts/Stair lifts',
  ];


export default function StructuralComplianceMetrics() {
  const {building, entrance, room, paths, gtoilet, atoilet, lifts} = useDashboardState(s=>s.org);

  const data:ChartData<"bar", number[], string> = {
  labels,
  datasets: [
    {
      label: '',
      data: [building, entrance, room, paths, gtoilet, atoilet, lifts].map(_=>Number(_)??0),
      borderColor: '#1AA367',
      backgroundColor: '#1AA367',
    },
  ],
};
  
  return (
    <div className="dashboard-card flex flex-col gap-3">
      <h1 className="font-semiblod text-sm">Structural Compliance Metrics</h1>
      <div className="w-full">
        <Suspense>
          <Bar options={options} data={data} className="w-full" />
        </Suspense>
      </div>
    </div>
  );
}
