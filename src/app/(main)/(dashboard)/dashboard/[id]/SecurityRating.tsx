export default function SecurityRating() {
  return (
    <div className="dashboard-card col-span-5 flex flex-col gap-3">
      <h1 className="opacity-80 text-xs">SECURITY RATING</h1>
      {tiles({
        security: true,
        emergency: true,
        surveillance: false,
        muster: true
      }).map(tile => <SecurityRatingCard key={tile.title} {...tile} />)}
      <div className="flex justify-end gap-1">
        <span>Security Rating:</span>
        <span className="font-semibold">80%</span>
      </div>
    </div>
  );
}

export type SecurityRatingProps = {
  security: boolean;
  emergency: boolean;
  surveillance: boolean;
  muster: boolean;
};

const tiles = ({
  security,
  emergency,
  surveillance,
  muster
}: SecurityRatingProps) => [
  {
    title: "Security Post",
    available: security
  },
  {
    title: "Emargency Exit",
    available: emergency
  },
  {
    title: "Surveillance Camera",
    available: surveillance
  },
  {
    title: "Muster Point",
    available: muster
  }
];

export type SecurityRatingCardProps = {
  title: string;
  available: boolean;
};
function SecurityRatingCard({ title, available }: SecurityRatingCardProps) {
  const buttonClass = "rounded border p-1 text-nowrap flex-shrink-0 ";
  const successButtonClass = !available
    ? ""
    : "border-green-700 bg-green-100 text-green-800";
  const errorButtonClass = available
    ? ""
    : "border-red-700 bg-red-100 text-red-800";
  return (
    <div className="flex items-center gap-3 text-[.69rem]">
      <h1 className="border rounded py-1 px-3 w-full">
        {title}
      </h1>
      <div className={`${buttonClass} ${successButtonClass}`}>Available</div>
      <div className={`${buttonClass} ${errorButtonClass}`}>Not Available</div>
    </div>
  );
}
