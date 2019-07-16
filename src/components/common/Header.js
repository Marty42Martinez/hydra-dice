import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/"><h1>HYDRA</h1></Link>
      <p>A unique dice rolling experience</p>
      <Link to="/rollspace"><p>Roll Dice</p></Link>
    </header>
  );
}
