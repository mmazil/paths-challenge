import React, { useMemo } from 'react';
import { Point } from '../types/paths';
import { getDuration, getSpeed, getDistance, getStops } from '../utils/utils';
 
const MapInfo: React.FC<{ points: [Point] }> = (props) => {

  const duration = useMemo(() => getDuration(props.points), [props.points]);
  const speed = useMemo(() => getSpeed(props.points).toFixed(2), [props.points]);
  const distance = useMemo(() => getDistance(props.points).toFixed(2), [props.points]);
  const stops = useMemo(() => getStops(props.points), [props.points]);

  return (
    <div id="map-info">
      <p>Path Information:</p>
      <ul>
        <li>trajectory duration: {duration}</li>
        <li>average speed: {speed}</li>
        <li>distance: {distance}</li>
        <li>stops: {stops}</li>
      </ul>
    </div>
  );
}
 
export default MapInfo;