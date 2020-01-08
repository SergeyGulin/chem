const AudioContext =
  (window as any).AudioContext || (window as any).webkitAudioContext;
const ctx = new AudioContext();
const audioPaths = [
  process.env.PUBLIC_URL + "/sounds/162485__kastenfrosch__space.mp3", // start
  process.env.PUBLIC_URL + "/sounds/135510__chriddof__space-bloop.wav", // true shot
  process.env.PUBLIC_URL + "/sounds/432761__xpoki__lazershot.wav" // false shot
];

// https://stackoverflow.com/questions/47204048/play-multiple-audio-files-on-safari-at-once
// utility function to load an audio file and resolve it as a decoded audio buffer
function getBuffer(url: string, audioCtx: AudioContext) {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject("Missing url!");
      return;
    }

    if (!audioCtx) {
      reject("Missing audio context!");
      return;
    }

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "arraybuffer";

    xhr.onload = function() {
      let arrayBuffer = xhr.response;
      audioCtx.decodeAudioData(arrayBuffer, decodedBuffer => {
        resolve(decodedBuffer);
      });
    };

    xhr.onerror = function() {
      reject("An error occurred.");
    };

    xhr.send();
  });
}

const promises = audioPaths.map((p: string) => getBuffer(p, ctx));

export const sound = (n: number) =>
  promises[n].then((buffer: any): void => {
    const source = ctx.createBufferSource();
    source.buffer = buffer as any;
    source.connect(ctx.destination);
    source.start();
  });
