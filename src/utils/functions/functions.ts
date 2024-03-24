export function isBefore(a: Date, b: Date) {
  return a.getTime() < b.getTime();
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return date.toLocaleDateString("en-US", options);
}

export function getSuitableTitleForScore(
  score: number,
  metric: "accessibility" | "compliance"
): string {
  const title = metric == "compliance" ? "Compliant" : "Accessible";
  if (score < 25) {
    return metric == "compliance" ? "Non-Compliant" : "Inaccessible";
  } else if (score < 50) {
    return `Poorly ${title}`;
  } else if (score < 75) {
    return `Moderately ${title}`;
  } else return `${title}`;
}
