import { createContext } from "react";

export const WheelContext = createContext();

export default function WheelProvider({ children }) {

    // wheels content dictionary
    const wheels= {
        1: ['s1', 'd1', 's1', 'se1', 'd1', 'h1', 'de2', 'h1'],
        2: ['se1', 'd1', 's2', 'de1', 's1', 'h1', 'd2', 'h2'],
        3: ['se1', 'd1', 'de1', 's1', 'd1', 'h2', 's2', 'h2'],
        4: ['s1', 'd1', 'se1', 'd1', 'h2', 's1',' de1', 'h2'],
        5: ['s1', 'd1', 'h1', 'blank', 'blank', 's1', 'd1', 'blank'],
    };

    // spritesheet position dictionary
    const spriteDict = {
        's1': {x: 0, y: 0}, 's2': {x: -102.5, y: 0}, 's3': {x: -205, y: 0},
        'se1': {x: -307.5, y: 0}, 'se2': {x: -410, y: 0},
        'd1': {x: 0, y: -77.5}, 'd2': {x: -102.5, y: -77.5}, 'd3': {x: -205, y: -77.5},
        'de1': {x: -307.5, y: -77.5}, 'de2': {x: -410, y: -77.5},
        'h1': {x: 0, y: -155}, 'h2': {x: -102.5, y: -155}, 'h3': {x: -205, y: -155},
        'blank': {x: -307.5, y: -155},
    };

    const wheelValues = {
        wheels, spriteDict,
    }

    return (
        <WheelContext.Provider value={wheelValues}>
            {children}
        </WheelContext.Provider>
    );

}