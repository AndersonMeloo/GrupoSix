"use client";

import { Users, Star, Shield } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  icon: JSX.Element;
}

const stats: StatItem[] = [
  {
    value: "12.453+",
    label: "Clientes satisfeitos",
    icon: <Users className="text-green-500 w-6 h-6 inline-block mr-2" />,
  },
  {
    value: "4.8",
    label: "Nota média de reviews",
    icon: <Star className="text-yellow-400 w-6 h-6 inline-block mr-2" />,
  },
  {
    value: "30 dias",
    label: "Garantia completa",
    icon: <Shield className="text-blue-500 w-6 h-6 inline-block mr-2" />,
  },
];

export default function StatsList() {

  return (

    <div className="flex flex-col sm:flex-row justify-evenly items-center gap-6 px-4 sm:px-0 text-center mt-4 pb-4 font-nunito">
      {stats.map((item, index) => (
        <div key={index}>
          <div className="flex justify-center items-center text-xl sm:text-2xl md:text-3xl font-medium text-gray-900">
            {item.icon}
            {item.value}
          </div>
          <p className="text-gray-500 text-sm sm:text-base mt-1 font-montserrat">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
