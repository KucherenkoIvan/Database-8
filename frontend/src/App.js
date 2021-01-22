
import './App.scss';
import Header from '../src/components/header/index'
import Aside from './components/aside';
import Body from './components/body/body';
import Main from './components/main';

function App() {
  return (
    <>
      <Header />
      <Body>
        <Aside />
        <Main />
      </Body>
    </>
  );
}

export default App;
