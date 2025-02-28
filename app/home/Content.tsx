import { items } from "@/data/items";
import React from "react";

const Content = () => {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item: any) => (
          <li
            key={item.id}
            className="transform-gpu cursor-pointer rounded-lg bg-neutral-950 p-6 leading-[150%] transition-all duration-300 ease-out hover:bg-neutral-900 hover:shadow-lg hover:shadow-neutral-900/30"
          >
            <p className="text-xl font-bold">{item.name}</p>
            <p className="text-base text-gray-400">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
