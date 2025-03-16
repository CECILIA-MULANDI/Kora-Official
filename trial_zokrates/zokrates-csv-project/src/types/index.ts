export interface DataPoint {
    timestamp: number;
    latitude: number;
    longitude: number;
    speed_kmh: number;
}

export interface Proof {
    a: string[];
    b: string[][];
    c: string[];
    inputs: string[];
}