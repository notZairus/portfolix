import { usePathname } from "next/navigation";
import React from "react";

const PageName = ({ ...props }) => {
  const path = usePathname().replace("/", "");
  const name = path.length > 1 ? path.split("/") : ["Home"];

  return (
    <div {...props}>
      <h1>
        {name.length <= 1
          ? name[0][0].toLocaleUpperCase() + name[0].slice(1, name[0].length)
          : name.map((n) => {
              return n[0].toLocaleUpperCase() + n.slice(1, n.length) + " ";
            })}
      </h1>
    </div>
  );
};

export default PageName;
