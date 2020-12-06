
import './App.scss';
import Header from '../src/components/header/index'
import Aside from './components/aside';
import Body from './components/body/body';

function App() {
  return (
    <>
      <Header/>
      <Body>
        <Aside/>
      </Body>
    </>
  );
}

export default App;
