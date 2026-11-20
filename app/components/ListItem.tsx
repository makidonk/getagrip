import type { ReactNode } from "react";

type ListItemProps = {
  title: string;
  rows?: { title: string; value: string }[];
  longText?: ReactNode;
  children?: ReactNode;
  divider?: boolean; //for a line under
};

export default function ListItem({
  title,
  rows,
  longText,
  children,
  divider = false,
}: ListItemProps) {
  return (
    <div className="priceBox">
      <h2>{title}</h2>
      {rows && rows.length > 0 && (
        <ul className="priceList">
          {rows.map(({ title, value }) => (
            <li className="pricelist-item" key={title}>
              <p>{title}</p>
              <p className="value">{value}</p>
            </li>
          ))}
        </ul>
      )}
      {longText != null && <p>{longText}</p>}
      {children}
      {divider && <div className="line"></div>}
    </div>
  );
}
