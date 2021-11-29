export const chromatic = [
  { id: 0, majorName: 'C', minorName: 'C', htz: 261.63 , octave: 4},
  { id: 1, majorName: 'C#', minorName: 'Db', htz: 277.18 , octave: 4},
  { id: 2, majorName: 'D', minorName: 'D', htz: 293.66 , octave: 4},
  { id: 3, majorName: 'D#', minorName: 'Eb', htz: 311.13 , octave: 4},
  { id: 4, majorName: 'E', minorName: 'E', htz: 329.63 , octave: 4},
  { id: 5, majorName: 'F', minorName: 'F', htz: 349.23 , octave: 4},
  { id: 6, majorName: 'F#', minorName: 'Gb', htz: 369.99 , octave: 4},
  { id: 7, majorName: 'G', minorName: 'G', htz: 392.00 , octave: 4},
  { id: 8, majorName: 'G#', minorName: 'Ab', htz: 415.30 , octave: 4},
  { id: 9, majorName: 'A', minorName: 'A', htz: 440.00 , octave: 4},
  { id: 10, majorName: 'A#', minorName: 'Bb', htz: 466.16 , octave: 4},
  { id: 11, majorName: 'B', minorName: 'B', htz: 493.88 , octave: 4},
];

export const major = (root: number): any[] => {
  const scale = [0,2,4,5,7,9,11];
  const rootIdx = chromatic.findIndex(x => x.id === root);
  const transposed = chromatic.slice(rootIdx).concat(chromatic.slice(0,rootIdx));

  return scale.map(x => transposed[x]);
};

export const minor = (root: string): any[] => {
  const notes = [0, 2, 3, 5, 7, 8, 10, 11];// 0, 2, 1, 2, 2, 1, 2, 1
  return chromatic.map((x, i) => notes.includes(i) ? x : null ).filter(Boolean);
};


// export const minor = (): any[] => { // 0, 2, 3, 5, 7, 8, 10, 11
//   return [];
// });
