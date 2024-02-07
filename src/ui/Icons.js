import { Link } from "react-router-dom";

import "./Icons.scss";

export function ChevronLeftIcon() {
  // Used on every page except the Home page
  const icon = "\u2039";
  return (
    <Link to={`/`}>
      <div className="chevronLeftIcon colorize_icons">{icon}</div>
    </Link>
  );
}
export function ChevronDownIcon() {
  // Used Capital page's input
  const icon = "\u2039";

  return <div className="chevronDownIcon colorize_icons">{icon}</div>;
}

export function PlusIcon() {
  // Used on the Home page, to add new capitals
  const icon = "\u002B";
  return <div className="plusIcon">{icon}</div>;
}
export function MinusIcon() {
  // Used on the Home page
  const icon = "\u2212";
  return <div className="minusIcon">{icon}</div>;
}

export function ThermometerIcon() {
  // Used on the Home page, to add new capitals
  const icon = "\u{1f321}";
  return <div className="thermometerIcon colorize_icons">{icon}</div>;
}

export function SunriseIcon() {
  // Used on the Home page, to add new capitals
  const icon = "\u2600";
  return <div className="sunriseIcon colorize_icons">{icon}</div>;
}

export function SunsetIcon() {
  // Used on the Home page, to add new capitals
  const icon = "\u2600";
  return <div className="sunsetIcon colorize_icons">{icon}</div>;
}
