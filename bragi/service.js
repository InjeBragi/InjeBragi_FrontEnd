import TrackPlayer,{Event} from 'react-native-track-player';


module.exports = async () => {
    TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
    TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());
    TrackPlayer.addEventListener(Event.RemoteStop, () => TrackPlayer.destroy());
  };