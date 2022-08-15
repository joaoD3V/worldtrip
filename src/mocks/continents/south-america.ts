import { ContinentProps } from '../../pages/continente/[slug]';

export const southAmerica: ContinentProps = {
  img: 'https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  title: 'América do Sul',
  description: /*html*/ `
    <p>
      A América do Sul é um dos subcontinentes da América. Apresenta paisagens
      naturais muito diversas e uma enorme biodiversidade, abrigando a maior
      floresta tropical do mundo. Ela é um subcontinente que faz parte do
      continente americano. Apresenta área de 17 milhões de km², com a maior
      extensão situada no hemisfério sul do planeta Terra.
    </p>
  `,
  infos: [
    {
      number: 12,
      title: 'países',
    },
    {
      number: 9,
      title: 'línguas',
    },
    {
      number: 27,
      title: 'cidades +100',
    },
  ],
  cities: [
    {
      name: 'Rio de Janeiro',
      country: {
        name: 'Brasil',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2000px-Flag_of_Brazil.svg.png',
      },
      img: 'https://images.unsplash.com/photo-1619546952812-520e98064a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    },
    {
      name: 'São Paulo',
      country: {
        name: 'Brasil',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2000px-Flag_of_Brazil.svg.png',
      },
      img: 'https://images.unsplash.com/photo-1637028352357-4d988497fa10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
    },
    {
      name: 'Goiânia',
      country: {
        name: 'Brasil',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2000px-Flag_of_Brazil.svg.png',
      },
      img: 'https://images.unsplash.com/photo-1618197299032-aeb7a9fc1513?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80',
    },
    {
      name: 'Arraial do Cabo',
      country: {
        name: 'Brasil',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2000px-Flag_of_Brazil.svg.png',
      },
      img: 'https://images.unsplash.com/photo-1604878434055-2ea819d5cbd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      name: 'Cabo Frio',
      country: {
        name: 'Brasil',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2000px-Flag_of_Brazil.svg.png',
      },
      img: 'https://images.unsplash.com/photo-1580585431859-8aa8854ad492?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
    },
  ],
};
