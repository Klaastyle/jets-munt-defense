import { TechnicalIcon, type TechnicalIconName } from "./TechnicalIcon";

type IconCardProps = {
  icon: TechnicalIconName;
  title: string;
  description: string;
  orientation?: "vertical" | "horizontal";
  className?: string;
};

export function IconCard({
  icon,
  title,
  description,
  orientation = "horizontal",
  className,
}: IconCardProps) {
  return (
    <article className={`jm-icon-card jm-icon-card-${orientation}${className ? ` ${className}` : ""}`}>
      <div className="jm-icon-card-mark">
        <TechnicalIcon name={icon} size={34} />
      </div>
      <div className="jm-icon-card-copy">
        <h3>{title}</h3>
        <div className="jm-icon-card-rule" />
        <p>{description}</p>
      </div>
    </article>
  );
}
