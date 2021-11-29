// src/notes/note.interface.ts
// { id: 0, majorName: 'C', minorName: 'C', htz: 261.63 , octave: 4},
export interface BaseNote {
  majorName: string;
  minorName: string;
  htz: number;
  octave: number;
}

export interface Note extends BaseNote {
  id: number;
}