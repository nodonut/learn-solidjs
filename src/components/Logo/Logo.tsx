import type { Component } from 'solid-js';

import logo from '../../assets/logo.png';

const Logo: Component = () => {
  return (
    <img
      src={logo}
      alt="shiba inu in a donut"
      width={48}
      height={48}
      class="object-cover"
    />
  );
};

export default Logo;
