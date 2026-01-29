import { Icon } from "@/components/Icon";
import { PROJECTS } from "@/data";
import React, { FC } from "react";

export default function Content() {
  return (
    <div>
      <header>
        <h2 className="my-2 mb-8 text-3xl font-bold">Rapid apps development 🛠️</h2>
      </header>

      <ul className="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
        {PROJECTS.map((item: any) => (
          <li
            key={item.id}
            className="transform-gpu cursor-pointer rounded-lg bg-neutral-950 p-6 leading-[150%] transition-all duration-300 ease-out hover:bg-neutral-900 hover:shadow-lg hover:shadow-neutral-900/30"
          >
            <a
              className="flex flex-col gap-1"
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-2xl font-bold">{item.name}</h3>
              <p className="text-base text-gray-400">{item.description}</p>
              {item.website !== "#" && (
                <span className="flex items-center gap-2">
                  <span>Visit</span>
                  <Icon lucideName="ArrowUpRight" className="h-4 w-4" />
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};


