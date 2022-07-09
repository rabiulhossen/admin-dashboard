// sidebar data
import { UilEstate, UilChart, UilProcess } from "@iconscout/react-unicons";
import sales from '../resources/sales.png'
import revenue from '../resources/revenue.png'

export const SidebarData = [
  { icon: UilEstate, id: 1, heading: "Dashboard" },
  { icon: UilChart, id: 2, heading: "Analytics" },
  { icon: UilProcess, id: 3, heading: "Customer" },
  { icon: UilEstate, id: 4, heading: "Dashboard" },
];

export const cardData = [
  {
    title: "Sales",
    color: {
      backGround: " #c484",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue:80,
    value: "44444",
    Png:  sales,
    series: [
      {
        name: "Sales",
        data: [40, 35, 25, 64, 354],
      },
    ],
  },
  {
    title: "Revunue",
    color: {
      backGround: "#bb67",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 60,
    value: "44444",
    Png:  revenue,
    series: [
      {
        name: "Sales",
        data: [40, 35, 25, 64, 354],
      },
    ],
  },
  {
    title: "earn",
    color: {
      backGround: "  #6766 ",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue:40,
    value: "44444",
    Png: sales,
    series: [
      {
        name: "Sales",
        data: [40, 35, 25, 64, 354],
      },
    ],
  },
];


