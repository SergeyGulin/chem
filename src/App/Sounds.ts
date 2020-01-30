const AudioContext =
  (window as any).AudioContext || (window as any).webkitAudioContext;
const ctx = new AudioContext();

export enum soundsType {
  START = "START",
  TRUE_SHOT = "TRUE_SHOT",
  FALSE_SHOT = "FALSE_SHOT",
  BEST_RESULTS = "BEST_RESULTS"
}

const audioPaths: { [key in soundsType]: string } = {
  START: process.env.PUBLIC_URL + "/sounds/162485__kastenfrosch__space.mp3",
  TRUE_SHOT:
    process.env.PUBLIC_URL + "/sounds/135510__chriddof__space-bloop.wav",
  FALSE_SHOT: process.env.PUBLIC_URL + "/sounds/432761__xpoki__lazershot.wav",
  BEST_RESULTS:
    process.env.PUBLIC_URL + "/sounds/477552__abacagi__explosion-sfx.mp3"
};

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
const promises = Object.create(null);

Object.entries(audioPaths).forEach(([key, path]) => {
  promises[key] = getBuffer(path, ctx);
});

export const sound = (key: soundsType) => {
  promises[key].then((buffer: any): void => {
    const source = ctx.createBufferSource();
    source.buffer = buffer as any;
    source.connect(ctx.destination);
    source.start();
  });
};
