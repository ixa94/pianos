let bottons = document.querySelectorAll('.bottons_piano');
let spans = document.querySelectorAll('.dos');

let colors = [
  'red',
  'blue',
  'green',
  'yellow',
  'purple',
  'orange',
  'rgb(22, 161, 115)',
  'red',
  'blue',
  'green',
  'yellow',
  'purple',
  'orange',
  'rgb(22, 161, 115)',
];

let buttons = [
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'BracketLeft',
  'BracketRight',
  'KeyA',
  'KeyS',
];

let sound = document.createElement('audio');
let audioArr = [
  '../sounds/01-C4.ogg',
  '../sounds/03-D4.ogg',
  '../sounds/05-E4.ogg',
  '../sounds/06-F4.ogg',
  '../sounds/08-G4.ogg',
  '../sounds/10-A4.ogg',
  '../sounds/12-B4.ogg',
  '../sounds/13-C5.ogg',
  '../sounds/15-D5.ogg',
  '../sounds/17-E5.ogg',
  '../sounds/18-F5.ogg',
  '../sounds/20-G5.ogg',
  '../sounds/22-A5.ogg',
  '../sounds/24-B5.ogg',
];



for (let i = 0; i < bottons.length; i++) {
  bottons[i].addEventListener('mousedown', (e) => {
    bottons[i].style.backgroundColor = colors[i];
    let span = e.target.querySelector('.dos');
    spans.forEach((item) => {
      item.style.display = 'none';
      
    });
    span.style.display = 'block';
    sound.setAttribute('src',audioArr[i])
    sound.play()
  });
  bottons[i].addEventListener('mouseup', (e) => {
    let span = e.target.querySelector('.dos');
    bottons[i].style.backgroundColor = 'rgb(212, 233, 233)';
    span.style.display = 'none';
  });
}

document.addEventListener('keydown', (e) => {
  let i = buttons.indexOf(e.code);
  bottons[i].style.backgroundColor = colors[i];
  spans[i].style.display = 'block';
  sound.setAttribute('src',audioArr[i])
    sound.play()
});

document.addEventListener('keyup', (e) => {
  let i = buttons.indexOf(e.code);
  bottons[i].style.backgroundColor = 'rgb(212, 233, 233)';
  spans[i].style.display = 'none';
});
