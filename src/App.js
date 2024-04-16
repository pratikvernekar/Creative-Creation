import { useEffect, useState } from 'react';
import './App.css';
import Drawer from './components/Drawer';
import Home from './components/Home';


function App() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [data, setData] = useState([]);
  const [colors, setIsColors] = useState(false)
  const [loading, setloading] = useState(false)
    ;
  useEffect(() => {
    setloading(true)
    fetch('https://random-flat-colors.vercel.app/api/random?count=5')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setIsColors(data.colors)
        setTimeout(() => {
          setloading(false)
        }, 300);
      })
      .catch(error => {
        console.error(error);
        setloading(false)
      });
  }, [])

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  if (loading) {
    return (<div className='loader-container'><div className="loader"></div></div>)
  }

  return (
    <div className='app-main'>
      <Home openDrawer={openDrawer} colors={colors} isDrawerOpen={isDrawerOpen} setData={setData} data={data} />
      <Drawer closeDrawer={closeDrawer} isDrawerOpen={isDrawerOpen} colors={colors} setData={setData} />
    </div>
  );
}

export default App;
