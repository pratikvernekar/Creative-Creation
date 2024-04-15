import { useEffect, useState } from 'react';
import './App.css';
import Drawer from './components/Drawer';
import Home from './components/Home';


function App() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [data, setData] = useState([]);
  const [colors, setIsColors] = useState(false);
  useEffect(() => {
    fetch('https://random-flat-colors.vercel.app/api/random?count=5')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setIsColors(data.colors)
      })
      .catch(error => {
        console.error(error);
      });
  }, [])

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className='app-main'>
      <Home openDrawer={openDrawer} colors={colors} isDrawerOpen={isDrawerOpen} setData={setData} data={data}/>
      <Drawer closeDrawer={closeDrawer} isDrawerOpen={isDrawerOpen} colors={colors} setData={setData}/>
    </div>
  );
}

export default App;
