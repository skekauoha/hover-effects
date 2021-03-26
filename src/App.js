import React, {useRef, useEffect} from 'react'
import './App.css';
import hoverEffect from 'hover-effect'
import image1 from './assets/images/image1.jpg'
import image2 from './assets/images/image2.jpg'
import heightMap from './assets/distortion/heightMap.png'
import fluid from './assets/distortion/fluid.jpeg'
import specs from './assets/distortion/specs.jpeg'
import dragonScales from './assets/distortion/dragonScales.jpeg'
import geometric from './assets/distortion/geometric.jpeg'
import zigZag from './assets/distortion/zigZag.jpeg'
import whiteNoise from './assets/distortion/whiteNoise.jpeg'
import largeGeometric from './assets/distortion/largeGeometric.jpeg'


function App() {
  const img = useRef(null);
  const img2 = useRef(null);

  useEffect(() => {
    const effect1 = new hoverEffect({
      parent: img.current,
      intensity: 0.8,
      speedIn: .9,
      speedOut: .5,
      image1: image1,
      image2: image2,
      displacementImage: whiteNoise
    });

    const effect2 = new hoverEffect({
      parent: img2.current,
      intensity: 0.8,
      speedIn: .9,
      speedOut: .5,
      image1: image1,
      image2: image2,
      displacementImage: geometric
    });
  }, [])

  return (
    <div className="App">
      <div className="img-container" ref={img}></div>
      <div className="img-container" ref={img2}></div>
    </div>
  );
}

export default App;
