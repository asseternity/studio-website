import Nav from './components/nav';
import Logo from './components/logo';
import Recent from './components/recent';
import InfoCards from './components/infocards';
import Gallery from './components/gallery';
import Carousel from './components/carousel';

function App() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <Logo />
        </div>
        <div className="nav">
          <Nav />
        </div>
      </div>
      <div className="banner">
        <Carousel />
      </div>
      <div className="boxes">
        <div className="box box1">
          <Gallery />
        </div>
        <div className="box box2">
          <Recent />
        </div>
        <div className="box box3">
          <InfoCards />
        </div>
      </div>
    </>
  );
}

export default App;
