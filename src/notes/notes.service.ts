//src/notes/notes.service.ts

import { Note } from "./note.interface";
import { Notes } from "./notes.interface";

export const chromatic: Notes = [
  { id: 0, sharpName: 'C', flatName: 'C', htz: 261.63 , octave: 4},
  { id: 1, sharpName: 'C#', flatName: 'Db', htz: 277.18 , octave: 4},
  { id: 2, sharpName: 'D', flatName: 'D', htz: 293.66 , octave: 4},
  { id: 3, sharpName: 'D#', flatName: 'Eb', htz: 311.13 , octave: 4},
  { id: 4, sharpName: 'E', flatName: 'E', htz: 329.63 , octave: 4},
  { id: 5, sharpName: 'F', flatName: 'F', htz: 349.23 , octave: 4},
  { id: 6, sharpName: 'F#', flatName: 'Gb', htz: 369.99 , octave: 4},
  { id: 7, sharpName: 'G', flatName: 'G', htz: 392.00 , octave: 4},
  { id: 8, sharpName: 'G#', flatName: 'Ab', htz: 415.30 , octave: 4},
  { id: 9, sharpName: 'A', flatName: 'A', htz: 440.00 , octave: 4},
  { id: 10, sharpName: 'A#', flatName: 'Bb', htz: 466.16 , octave: 4},
  { id: 11, sharpName: 'B', flatName: 'B', htz: 493.88 , octave: 4},
];

export const major = (root: number): any[] => {
  const scale = [0,2,4,5,7,9,11];
  const rootIdx = (chromatic as any).findIndex((n: Note) => n.id === root);
  const transposed = (chromatic as any).slice(rootIdx).concat((chromatic as any).slice(0,rootIdx));

  return scale.map(s => transposed[s]);
};

export const naturalMinor = (root: number): any[] => {
  const scale = [0,2,3,5,7,8,10];
  // const scale = [0,2,3,5,7,9,11];
  const rootIdx = (chromatic as any).findIndex((n: Note) => n.id === root);
  const transposed = (chromatic as any).slice(rootIdx).concat((chromatic as any).slice(0,rootIdx));

  return scale.map(s => transposed[s]);
};