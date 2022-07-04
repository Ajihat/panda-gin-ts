//components
import TopSlider from './components/TopSlider';
import Main from './components/Main'
import Navigation from './components/Navigation';
//styles
import './css/App.css'

const App = () => {
  return (
    <>
      <TopSlider />
      <Main>
        <Navigation />
      </Main>
    </>
  );
}

export default App;
