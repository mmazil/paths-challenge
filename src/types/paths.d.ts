export type Point = {
    time: number,
    x: number,
    y: number
}

export interface Path {
    id: string,
    points: [Point]
}