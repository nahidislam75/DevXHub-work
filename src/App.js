import logo from './logo.svg';
import './App.css';
import i18n from './i18n';
import Welcome from './Welcome';
import { Suspense, useState } from 'react';
import LocaleContext from './LocaleContext';
import OutSideOfReturn from './OutSideOfReturn';
import OutSideReact from './OutSideReact';
import OutSideReactConsol from './OutSideReactConsol';
import RenderArModde from './renderArModde';
import TicTacToe from './Components/Tic Tac Toe/TicTacToe';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function Loading() {
  return (
    <>Loading</>
  )
}



function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on('languageChanged', (lng) => setLocale(i18n.language));



  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">

        <LocaleContext.Provider value={{ locale, setLocale }}>
          <Suspense fallback={<Loading />}>
            <div>
              <label>Local Change</label>
              <select value={locale} onChange={handleChange}>
                <option value="en">English</option>
                <option value="bn">Bengla</option>
              </select>
            </div>
            <Container><Welcome /></Container>
            <Container><TicTacToe></TicTacToe></Container>

            <Container>
              <Row>
                <Col><OutSideOfReturn></OutSideOfReturn></Col>
                <Col> <RenderArModde></RenderArModde></Col>
              </Row>
            </Container>
            <Container> <OutSideReact></OutSideReact></Container>
            <Container><OutSideReactConsol></OutSideReactConsol></Container>


          </Suspense>
        </LocaleContext.Provider>
      </header>
    </div>
  );
}

export default App;
