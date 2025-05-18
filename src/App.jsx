import Logo from './components/logo';
import Nav from './components/nav';
import Carousel from './components/carousel';
import PreviewProjects from './components/preview_projects';
import PreviewNews from './components/preview_news';
import PreviewAbout from './components/preview_about';
import test1 from '/test1.png';
import test2 from '/test2.jpg';
import test3 from '/test3.png';

const testProjects = [
  {
    title: 'Project 1',
    subtitle: 'This is test subtitle 1.',
    image: test1,
  },
  {
    title: 'Project 2',
    subtitle: 'This is test subtitle 2.',
    image: test2,
  },
  {
    title: 'Project 3',
    subtitle: 'This is test subtitle 3.',
    image: test3,
  },
];

const testNews = [
  {
    title: 'Devlog #12: Combat System Overhaul',
    content:
      'We’ve redesigned the entire combat experience based on your feedback. Here’s what’s new!',
  },
  {
    title: 'New Pixel Artist Joins the Team!',
    content:
      'Say hello to Aria, who’s bringing a fresh look to our characters and environments.',
  },
  {
    title: 'Alpha Testing Starts This June',
    content:
      'We’re opening up early access to a small group of players — signups are now live!',
  },
  {
    title: 'Devlog #11: Save System Overhaul',
    content:
      'We’ve redesigned the entire save experience based on your feedback. Here’s what’s new!',
  },
  {
    title: 'Devlog #10: Dialogue System Overhaul',
    content:
      'We’ve redesigned the entire dialogue experience based on your feedback. Here’s what’s new!',
  },
];

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
        <Carousel slides={testProjects} />
      </div>
      <div className="boxes">
        <div className="box box1">
          <PreviewProjects projects={testProjects} />
        </div>
        <div className="box box2">
          <PreviewNews news={testNews} />
        </div>
        <div className="box box3">
          <PreviewAbout />
        </div>
      </div>
    </>
  );
}

export default App;

// [_] mobile / responsive
// [_] finalize design
// [_] create other tabs
// [_] fill with actual content
// [_] decide on a way to push
// [_] publish to a domain
