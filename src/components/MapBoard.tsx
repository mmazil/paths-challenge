import React, { useMemo } from 'react';
import { Point } from '../types/paths';
 
const MapBoard: React.FC<{ points: [Point] }> = (props) => {

  const points = useMemo(() => props.points.map(p => `${p.x*60}, ${p.y*60}`), [props.points]);

  return (
    <div id="map-board">
      <svg height="100%" width="100%">
        <polyline points={`${points}`} style={{fill:"none", stroke:"black", strokeWidth:"3"}} />
      </svg>
    </div>
  );
}
 
export default MapBoard;