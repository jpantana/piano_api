// src/scales/scale.interface.ts
export interface BaseNote {
  sharpName: string;
  flatName: string;
  octave: number;
}

export interface Note extends BaseNote {
  id: number;
}