const ytdl = require('ytdl-core');
const fs = require('fs');

const videoUrl = 'https://www.youtube.com/watch?v=u6w9HYmQMgQ';

// Set options for audio only
const options = {
  quality: 'highestaudio',
};

// Download the audio using ytdl-core
ytdl(videoUrl, options)
  .pipe(fs.createWriteStream('audio.mp3'))
  .on('finish', () => console.log('Audio download complete'))
  .on('error', (error) => console.error('Error while downloading audio:', error));
