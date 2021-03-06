import React from 'react'
import { Image } from 'react-native';
import { Text, View } from "../../components/Themed";
import styles from './styles';
import { AntDesign } from "@expo/vector-icons";
import { Episode } from '../../types';
import { Pressable } from 'react-native';

interface EpisodeItemProps {
    episode: Episode
    onPress: (episode: Episode) => {}
}
const EpisodeItem = (props: EpisodeItemProps) => {
    
    const {episode , onPress} = props;
    
    return (
        <Pressable style={{margin: 10}} onPress={() => onPress(episode)} >
            <View style={styles.row} >
                <Image style={styles.image} source={{uri: episode.poster}} />
                <View style={styles.titleContainer} >
                    <Text style={styles.title} >{episode.title}</Text>
                    <Text style={styles.duration} >{episode.duration}</Text>
                </View>
                <AntDesign name="download" size={24} color="white"/>                
            </View>
            <Text style={styles.plot}>{episode.plot}</Text>
        </Pressable>
    )
}

export default EpisodeItem

