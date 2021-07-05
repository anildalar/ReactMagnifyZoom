import ReactImageMagnify from 'react-image-magnify';

//import something from somelibrary

import watchImg300 from './assets/img/watch300.jpg';
import watchImg1200 from './assets/img/watch.jpg';

function App() {
  return (
    <div className="App">
      <div style={{width:'342px',height:'513px'}}>
        <ReactImageMagnify {...{
          smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: watchImg300
          },
          largeImage: {
            src: watchImg1200,
            width: 1200,
            height: 1800
          }
        }} />
      </div>

    </div>
  );
}

export default App;
