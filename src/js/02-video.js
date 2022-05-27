import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe');
const player = new Vimeo.Player(iframeEl);

const onTimeUpdate = ({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
};
player.on('timeupdate', throttle(onTimeUpdate, 1000));

const seconds = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(seconds);
