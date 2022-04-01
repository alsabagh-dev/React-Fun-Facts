import './App.css';

import Navbar from './components/Navbar';
import Main from './components/Main';


function App() {
  const reasons = [
    'Was First Release in 2013',
    'Was originally created by Jordan Walke',
    'Has well over 100K stars on GitHub',
    'Is maintained by Facebook',
    'Powers thousands of enterprise apps, including mobile apps',
  ];

  return (
    <div className='container'>
      <Navbar/>
      <Main list={reasons}/>
    </div>
  );
}

export default App;
