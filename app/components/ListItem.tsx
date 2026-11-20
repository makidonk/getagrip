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
    <div className="flex flex-col gap-2.5">
      <h2>{title}</h2>
      {rows && rows.length > 0 && (
        <ul className="list-none">
          {rows.map(({ title, value }) => (
            <li className="flex items-center justify-between" key={title}>
              <p>{title}</p>
              <p>{value}</p>
            </li>
          ))}
        </ul>
      )}
      {longText != null && <p>{longText}</p>}
      {children}
      {divider && <div className="h-px w-full bg-black"></div>}
    </div>
  );
}
