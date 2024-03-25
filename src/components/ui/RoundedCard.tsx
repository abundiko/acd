import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function RoundedCard({
  title,
  value,
  color,
  label,
  showBlueBar
}: {
  title: string;
  value: number;
  color: string;
  showBlueBar?: boolean;
  label?: string;
}) {
  return (
    <div className=" bg-light flex flex-col  gap-3 items-center justify-between rounded-lg overflow-hidden text-center border">
      <div className="p-3 flex flex-col gap-3">
        <h1 className="text-[.6rem] opacity-80 ">
          {title}
        </h1>
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            rotation: 0,
            textSize: "16px",
            pathTransitionDuration: 0.5,
            pathColor: color,
            textColor: "#121212",
            trailColor: "fefefe",
            backgroundColor: "#00000000"
          })}
        />
        {label &&
          <p className="font-semibold text-sm">
            {label}
          </p>}
      </div>
      {showBlueBar &&
        <div className="px-3 text-xs font-[500] py-2 bg-primary text-light w-full">
          Point Scored {value / 10}/10
        </div>}
    </div>
  );
}
