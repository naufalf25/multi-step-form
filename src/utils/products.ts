import ArcadeIcon from '../assets/images/icon-arcade.svg';
import AdvancedIcon from '../assets/images/icon-advanced.svg';
import ProIcon from '../assets/images/icon-pro.svg';

const products = {
  plan: [
    {
      id: 'plan-1',
      name: 'arcade',
      icon: ArcadeIcon,
      month: 9,
      year: 90,
    },
    {
      id: 'plan-2',
      name: 'advanced',
      icon: AdvancedIcon,
      month: 12,
      year: 120,
    },
    {
      id: 'plan-3',
      name: 'pro',
      icon: ProIcon,
      month: 15,
      year: 150,
    },
  ],
  addOns: [
    {
      id: 'addOns-1',
      name: 'online service',
      description: 'Access to multiplayer games',
      month: 1,
      year: 10,
    },
    {
      id: 'addOns-2',
      name: 'larger storage',
      description: 'Extra 1TB of cloud save',
      month: 2,
      year: 20,
    },
    {
      id: 'addOns-3',
      name: 'customizable profile',
      description: 'Custom theme on your profile',
      month: 2,
      year: 20,
    },
  ],
};

export { products };
