import React from 'react';
import Head from 'next/head';

import RocketseatLogo from '../assets/rocketseat.svg';

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Choose it!</title>
    </Head>

    <main>
      <RocketseatLogo />
      <h1>Hello world</h1>
    </main>
  </div>
);

export default Home;
