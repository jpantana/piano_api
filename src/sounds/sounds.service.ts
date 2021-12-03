// create web audio api context
const audioCtx = new(window.AudioContext)();

const notes = [
  [659, 4],
  [659, 4],
  [659, 4],
  [523, 8],
  [0, 16],
  [783, 16],
  [659, 4],
  [523, 8],
  [0, 16],
  [783, 16],
  [659, 4],
  [0, 4],
  [987, 4],
  [987, 4],
  [987, 4],
  [1046, 8],
  [0, 16],
  [783, 16],
  [622, 4],
  [523, 8],
  [0, 16],
  [783, 16],
  [659, 4]
];

const tempo = 100;

export const playNote = (frequency: number, duration: number): any => {
  // create Oscillator node
  const oscillator = audioCtx.createOscillator();

  oscillator.type = 'square';
  oscillator.frequency.value = frequency; // value in hertz
  oscillator.connect(audioCtx.destination);
  oscillator.start();

  setTimeout(() => {
      oscillator.stop();
      playMelody();
    }, duration);
}

const playMelody = (): void => {
  if (notes.length > 0) {
    const note = notes.pop();
    const one = note?.[0] ?? 0
    const two = note?.[1] ?? 0

    playNote(one, 1000 * 256 / (two * tempo));
  }
}


notes.reverse();
