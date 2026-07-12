 
import { TechnicalIcon, type TechnicalIconName } from "./TechnicalIcon";

export type TechnicalFeatureItem = {
  icon: TechnicalIconName;
  title: string;
  description: string;
};

type TechnicalFeatureListProps = {
  title?: string;
  items: TechnicalFeatureItem[];
  columns?: 1 | 2;
  className?: string;
};

export function TechnicalFeatureList({
  title,
  items,
  columns = 1,
  className,
}: TechnicalFeatureListProps) {
  return (
    <section className={`jm-feature-list jm-feature-list-${columns}${className ? ` ${className}` : ""}`}>
      {title ? <h2>{title}</h2> : null}
      <div className="jm-feature-list-items">
        {items.map((item) => (
          <article className="jm-feature-row" key={`${item.icon}-${item.title}`}>
            <div className="jm-feature-icon">
              <TechnicalIcon name={item.icon} size={28} />
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
