import React, { useState, useCallback } from 'react';
import './App.css';
import { Path, Point } from './types/paths';
import data from './data/trajectoires.json';
import MapBoard from './components/MapBoard';
import MapInfo from './components/MapInfo';

const App: React.FC = () => {
  const paths: [Path] = data as [Path];
  const [points, setPoints] = useState<[Point]>();
  
  const changePath = useCallback((e: any) => {
    const id = e.target.value;
    const points = paths.filter(p => p.id === id)[0].points;
    setPoints(points);
  }, [paths])

  return (
    <div className="App">
      <div id="select-container">
        <select defaultValue="0" onChange={changePath}>
          <option value="0" disabled>0</option>
          { paths.map(t => <option value={t.id} key={t.id}>{t.id}</option>) }
        </select>
      </div>
      {
        points && 
        <div id="map-container">
          <MapBoard points={points} /> 
          <MapInfo points={points} />
        </div>
      }
    </div>
  );
}

export default App;
