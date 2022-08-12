import { Banner } from '../components/Home/Slider';
import { TravelType } from '../components/Home/TravelTypes';

export const travelTypes: TravelType[] = [
  {
    icon: '/img/types/cocktail.svg',
    title: 'vida noturna',
  },
  {
    icon: '/img/types/surf.svg',
    title: 'praia',
  },
  {
    icon: '/img/types/building.svg',
    title: 'moderno',
  },
  {
    icon: '/img/types/museum.svg',
    title: 'clássico',
  },
  {
    icon: '/img/types/earth.svg',
    title: 'e mais...',
  },
];

export const banners: Banner[] = [
  {
    img: 'https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1504&q=80',
    text: {
      title: 'Europa',
      subtitle: 'O continente mais antigo',
    },
    slug: 'europa',
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
  //   text: {
  //     title: 'América do Norte',
  //     subtitle: 'O continente mais rico',
  //   },
  // },
  {
    img: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    text: {
      title: 'América do Sul',
      subtitle: 'O continente dos recursos naturais',
    },
    slug: 'america-do-sul',
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1492&q=80',
  //   text: {
  //     title: 'Ásia',
  //     subtitle: 'O continente mais populoso',
  //   },
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1613864309738-9102a9e22883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  //   text: {
  //     title: 'África',
  //     subtitle: 'O continente da biodiversidade',
  //   },
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  //   text: {
  //     title: 'Oceania',
  //     subtitle: 'O continente da pluraridade étnica',
  //   },
  // },
];
