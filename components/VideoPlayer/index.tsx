import React, { useRef, useState } from 'react'
import { Text, View } from "../../components/Themed";
import { Episode } from '../../types';
import { Video } from 'expo-av';
import styles from './styles';
import { Playback } from 'expo-av/build/AV';
import { useEffect } from 'react';

interface VideoPlayerProps  {
  episode: Episode;
}

const VideoPlayer = (props: VideoPlayerProps) => {

    const [status, setStatus] = useState({});
    const {episode} = props
    const video = useRef<Playback>(null);

    useEffect(() => {

        if(!video) {
          return;
        }
        (async () => {
          await video?.current?.unloadAsync();
          await video?.current?.loadAsync(
            {uri: episode.video}, {}, false
          );
        })
        ();
    }, [episode])
      

    return (
        <Video
        ref={video}
        style={styles.video}
        source={{
          uri: episode.video,
        }}
        posterSource={{
            uri: episode.poster,
        }}
        posterStyle={{
            resizeMode: "cover"
        }}
        usePoster={true}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    )
}

export default VideoPlayer
