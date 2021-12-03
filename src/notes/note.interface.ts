// src/notes/note.interface.ts
export interface BaseNote {
  sharpName: string;
  flatName: string;
  htz: number;
  octave: number;
}

export interface Note extends BaseNote {
  id: number;
}