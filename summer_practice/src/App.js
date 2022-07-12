import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import Map from './components/Map';

const App = () => {
  
  return(
<div className='container'>
  <Header menu={["Мск", "СПБ"]} />
  <div className='content'>
    <Title/>
    <Map/>
  </div>
</div>
  );
}

export default App