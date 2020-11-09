const path = require('path');
const { exec } = require('child_process');
const fs = require('fs');

const directoryPath = path.join(__dirname, '.');


fs.readdir(directoryPath, async function (err, files) {
  // exec(`mkdir seventy-percent`)
  // exec(`cd seventy-percent`)
  exec(`for FILE in *; do ffmpeg -i $FILE -af 'asetrate=44100*70/100' seventy-percent/slow-"$FILE"; done`)
  // exec(`ffmpeg -i slow-00001-nJ3o3kQZWm8.mp3 -af "silenceremove=start_periods=1:start_duration=1:start_threshold=-60dB:detection=peak,aformat=dblp,areverse,silenceremove=start_periods=1:start_duration=1:start_threshold=-60dB:detection=peak,aformat=dblp,areverse" trimmed-test.mp3`)

  // const allFiles = [];
  // if (err) {
  //   return console.log('Unable to scan directory: ' + err);
  // }
  // files.forEach(function (file) {
  //   if (file.slice(file.length - 4) === ".mp3") {
  //     allFiles.push(file)
  //   }
  // });

  // const outputFile = "output-mix.mp3"
  // let filterComplex = ""
  // let filesString = ""

  // allFiles.forEach((file, idx) => {
  //   if (idx === 0) {
  //     filterComplex += "[0][1]acrossfade=d=10:c1=tri:c2=tri[a01];"
  //     filesString += `-i ${file} `

  //   } else if (idx === allFiles.length - 1) {
  //     filterComplex += ``
  //     filesString += `-i ${file} `

  //   } else if (idx === allFiles.length - 2 && idx < 10) {
  //     filterComplex += `[a0${idx}][${idx + 1}]acrossfade=d=10:c1=tri:c2=tri`
  //     filesString += `-i ${file} `

  //   } else if (idx === allFiles.length - 2 && idx >= 10) {
  //     filterComplex += `[a${idx}][${idx + 1}]acrossfade=d=10:c1=tri:c2=tri`
  //     filesString += `-i ${file} `

  //   } else if (idx < 9) {
  //     filterComplex += `[a0${idx}][${idx + 1}]acrossfade=d=10:c1=tri:c2=tri[a0${idx + 1}];`
  //     filesString += `-i ${file} `

  //   } else if (idx === allFiles.length - 2 && idx === 9) {
  //     filterComplex += `[a09][10]acrossfade=d=10:c1=tri:c2=tri`
  //     filesString += `-i ${file} `

  //   } else if (idx === 9) {
  //     filterComplex += `[a09][10]acrossfade=d=10:c1=tri:c2=tri[a10];`
  //     filesString += `-i ${file} `

  //   } else if (idx > 9) {
  //     filterComplex += `[a${idx}][${idx + 1}]acrossfade=d=10:c1=tri:c2=tri[a${idx + 1}];`
  //     filesString += `-i ${file} `
  //   }
  // })

  // console.log('processing... ⏳')
  // exec(`ffmpeg ${filesString}-vn -filter_complex "${filterComplex}" ${outputFile}`, (err, stdout, stderr) => {
  //   if (err) {
  //     console.error(err)
  //   } else {
  //     console.log(`stdout: ${stdout}`);
  //     console.log(`stderr: ${stderr}`);
  //     console.log('done! 👍')
  //   }
  // })
});