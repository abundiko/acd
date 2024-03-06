import RoundedBars from "./RoundedBars";
import SecurityRating from "./SecurityRating";
import StructuralComplianceMetrics from "./StructuralComplianceMetrics";

export default function Dashboard() {
  return (
    <section className="grid grid-cols-11 gap-4 bg-light-gray p-4">
      <RoundedBars />
      <SecurityRating />
      <StructuralComplianceMetrics />
    </section>
  );
}
