import '../App.css';
import Header from './Header';
import { Container, Grid, Header as SemanticHeader, List, Segment } from 'semantic-ui-react';

function App() {
  return (
    <div className='my-app'>
    <Header/>

    <Container text style={{ marginTop: '17em' }}>
      <h2>About us</h2>
    </Container>

    <Container text style={{ marginTop: '17em' }}>
      <h2>Services</h2>
    </Container>

    <Container text style={{ marginTop: '17em' }}>
      <h2>Faqs</h2>
    </Container>

    <Container text style={{ marginTop: '17em' }}>
      <h2>Footer</h2>
    </Container>




    </div>
  );
}

export default App;
