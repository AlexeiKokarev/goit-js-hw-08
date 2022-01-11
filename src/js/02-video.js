import Player from "@vimeo/player";
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const needTime = locStor.getItem('videoplayer-current-time');

if (needTime) {
    player.setCurrentTime(needTime);
}

function playerSetTimeUpdate(data) {
    locStor.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
}

player.on('timeupdate', throttle(playerSetTimeUpdate, 1000));