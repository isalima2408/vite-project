import { useState, useRef, useInsertionEffect, useCallback } from "react";
import { fabric } from 'fabric'


import { Text } from "./Text";
import { Image } from "./Image";
import { Canvas } from "./Canvas"
const useFabricData = (initial) => {
  const [objects, setObjects] = useState(initial);

  const onObjectChange = useCallback((id, options) => {
    setObjects((objects) => ({ ...objects, [id]: options }));
  }, []);

  return [objects, onObjectChange];
};

const svg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg">
  <g>
    <circle r="25" cy="25" cx="25" />
  </g>
</svg>`;
const base64svg = `data:image/svg+xml;base64,${btoa(svg)}`;


function App () {
  const [canvas, setCanvas] = useState()

  console.log(canvas)

const [texts, onTextChange] = useFabricData({
    '0': { text: 'A', left: 0 },
    '1': { text: 'B', left: 30 },
    '2': { text: 'C', left: 60 },
  });

  const [images, onImageChange] = useFabricData({
    '0': { left: 100, width: 50, height: 50, data: { src: base64svg } },
    '1': { left: 150, width: 50, height: 50, data: { src: base64svg } },
  });

  return(
    <Canvas setCanvas={ setCanvas } >
      {Object.entries(texts).map(
        ([key, options]) =>
          canvas && <Text options={options} canvas={canvas} id={key} key={key} onChange={onTextChange} />,
      )}
      {Object.entries(images).map(
        ([key, options]) =>
          canvas && <Image options={options} canvas={canvas} id={key} key={key} onChange={onImageChange} />,
      )}
    </Canvas>
  )
}

export default App
