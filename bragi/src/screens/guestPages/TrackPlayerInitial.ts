import TrackPlayer, { Capability } from 'react-native-track-player';

export const TrackPlayerInitializer = async () => {
  TrackPlayer.setupPlayer({ waitForBuffer: true }).then(async () => {
    await TrackPlayer.updateOptions({
      capabilities: [Capability.Play, Capability.Pause, Capability.Stop],
      compactCapabilities: [Capability.Play, Capability.Pause, Capability.Stop],
      notificationCapabilities: [Capability.Play, Capability.Pause, Capability.Stop],
    });
  });
}