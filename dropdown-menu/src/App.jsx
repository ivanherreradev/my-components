import { useState } from 'react';
import Dropdown from './components/Dropdown/Dropdown';
import ImageProfile from './components/ImageProfile/ImageProfile';

export default function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav>
      <ImageProfile onClick={handleMenu} />
      {openMenu && <Dropdown />}
    </nav>
  );
}
