import '../App.css';
import Header from './Header';
import Home from './Home';
import { Container, } from 'semantic-ui-react';
import About from '../About';
import Services from '../Services';
import Faqs from '../Faqs';

function App() {
  return (
    <div className='my-app'>
    <Header/>

    <Home/>

    <Container text style={{ marginTop: '17em' }}>
      <About/>
    </Container>

    <Container text style={{ marginTop: '17em' }}>
      <Services/>
    </Container>

    <Container text style={{ marginTop: '17em' }}>
      <Faqs/>
    </Container>

    <Container text style={{ marginTop: '17em' }}>
      <h2>Footer</h2>
    </Container>




    </div>
  );
}

export default App;
