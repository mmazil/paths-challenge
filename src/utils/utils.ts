import type { Point } from '../types/paths';

export const getDuration = (points: [Point]): number => {
  const pl = points.length;
  if(!pl) return 0;
  return points[pl - 1].time - points[0].time;
}

export const getDistance = (points: [Point]): number => {
  const pl = points.length;
  if(!pl) return 0;
  let sumX = 0, sumY = 0;
  for(let i = 0; i < pl; i++) {
    if(points[i+1]) {
      if(Math.abs(points[i+1].x) > Math.abs(points[i].x)) {
        sumX += Math.abs(points[i+1].x) - Math.abs(points[i].x)
      } else {
        sumX += Math.abs(points[i].x) - Math.abs(points[i+1].x)
      }
      
      if(Math.abs(points[i+1].y) > Math.abs(points[i].y)) {
        sumY += Math.abs(points[i+1].y) - Math.abs(points[i].y)
      } else {
        sumY += Math.abs(points[i].y) - Math.abs(points[i+1].y)
      }
    }
  }
  return Math.sqrt((sumX*sumX) + (sumY*sumY));
}

export const getSpeed = (points: [Point]): number => {
  return points.length ? getDistance(points) / getDuration(points) : 0;
}

export const getStops = (points: [Point]): number => {
  return points.length;
}