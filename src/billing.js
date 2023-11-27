import arcadeIcon from './Assets/Images/icon-arcade.svg';
import advancedIcon from './Assets/Images/icon-advanced.svg';
import proIcon from './Assets/Images/icon-pro.svg';

export const plans = [
  {
    id: 1,
    name: "Arcade",
    pricePerYear: 90,
    pricePerMonth: 9,
    monthsFree: 2,
    icon: arcadeIcon,
  },
  {
    id: 2,
    name: "Advanced",
    pricePerYear: 120,
    pricePerMonth: 12,
    monthsFree: 2,
    icon: advancedIcon,
  },
  {
    id: 3,
    name: "Pro",
    pricePerYear: 150,
    pricePerMonth: 15,
    monthsFree: 2,
    icon: proIcon,
  }
];

export const addons = [
  {
    id: 1,
    name: "Online service",
    description: "Access to multiplayer games",
    pricePerYear: 10,
    pricePerMonth: 1,
  },
  {
    id: 2,
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    pricePerYear: 20,
    pricePerMonth: 2,
  },
  {
    id: 3,
    name: "Customizable profile",
    description: "Custom theme on your profile",
    pricePerYear: 20,
    pricePerMonth: 2,
  }
];
