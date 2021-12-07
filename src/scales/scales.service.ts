//src/scales/scales.service.ts

import { Note } from "./note.interface";
import { Notes } from "./notes.interface";

export const chromatic: Notes = [
  { id: 0, sharpName: 'C', flatName: 'C', octave: 4},
  { id: 1, sharpName: 'C#', flatName: 'Db', octave: 4},
  { id: 2, sharpName: 'D', flatName: 'D', octave: 4},
  { id: 3, sharpName: 'D#', flatName: 'Eb', octave: 4},
  { id: 4, sharpName: 'E', flatName: 'E', octave: 4},
  { id: 5, sharpName: 'F', flatName: 'F', octave: 4},
  { id: 6, sharpName: 'F#', flatName: 'Gb', octave: 4},
  { id: 7, sharpName: 'G', flatName: 'G', octave: 4},
  { id: 8, sharpName: 'G#', flatName: 'Ab', octave: 4},
  { id: 9, sharpName: 'A', flatName: 'A', octave: 4},
  { id: 10, sharpName: 'A#', flatName: 'Bb', octave: 4},
  { id: 11, sharpName: 'B', flatName: 'B', octave: 4},
];

export const major = (root: number): any[] => {
  const scale = [0,2,4,5,7,9,11];
  const rootIdx = (chromatic as any).findIndex((n: Note) => n.id === root);
  const transposed = (chromatic as any).slice(rootIdx).concat((chromatic as any).slice(0,rootIdx));

  return scale.map(s => transposed[s]);
};

export const naturalMinor = (root: number): any[] => {
  const scale = [0,2,3,5,7,8,10];
  const rootIdx = (chromatic as any).findIndex((n: Note) => n.id === root);
  const transposed = (chromatic as any).slice(rootIdx).concat((chromatic as any).slice(0,rootIdx));

  return scale.map(s => transposed[s]);
};