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
  if (metric === "compliance") {
    const title = "Compliant";
    if (score < 1) {
      return `Non-${title}`;
    } else if (score < 3) {
      return `Poorly ${title}`;
    } else if (score < 5) {
      return `Moderately ${title}`;
    } else return `${title}`;
  } else {
    const title = "Accessible";
    if (score < 25) {
      return "Inaccessible";
    } else if (score < 50) {
      return `Poorly ${title}`;
    } else if (score < 75) {
      return `Moderately ${title}`;
    } else return `${title}`;
  }
}
