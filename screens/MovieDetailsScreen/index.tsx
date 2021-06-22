import React, { useState } from "react";
import { Image, FlatList } from "react-native";
import { View, Text } from "../../components/Themed";
import movie from "../../assets/data/movie";
import styles from "./styles";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { Entypo, Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";
import EpisodeItem from "../../components/EpisodeItem/index";
import {Picker} from '@react-native-picker/picker';


const firstEpisode = movie.seasons.items[0].episodes.items[0];
const firstSeason = movie.seasons.items[0];

const MovieDetailsScreen = () => {
  
  const seasonNames = movie.seasons.items.map((season) => season.name)
  const [currentSeason, setCurrentSeason] = useState(firstSeason)

  return (
    <View>
      <Image
        source={{
          uri: firstEpisode.poster,
        }}
        style={styles.image}
      />

      <FlatList
        style={{ marginBottom: 250 }}
        data={currentSeason.episodes.items}
        renderItem={({ item }) => <EpisodeItem episode={item} />}
        ListHeaderComponent={
          <View style={{ padding: 12 }}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.match}>98% match</Text>
              <Text style={styles.year}>2020</Text>
              <View style={styles.ageContainer}>
                <Text style={styles.age}>12+</Text>
              </View>
              <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
              <MaterialIcons name="hd" size={24} color="white" />
            </View>
            <Pressable
              onPress={() => console.log("hello")}
              style={styles.playButton}
            >
              <Text style={styles.playButtonText}>
                <Entypo name="controller-play" size={16} color="black" /> Play
              </Text>
            </Pressable>
            <Pressable
              onPress={() => console.warn("hello download")}
              style={styles.downloadButton}
            >
              <Text style={styles.downloadButtonText}>
                <AntDesign name="download" size={16} color="white" /> Download
              </Text>
            </Pressable>

            <Text style={{ marginVertical: 10 }}>{movie.plot}</Text>
            <Text style={styles.year}>Cast: {movie.cast}</Text>
            <Text style={styles.year}>Creator: {movie.creator}</Text>

            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <View style={{ marginHorizontal: 20, alignItems: "center" }}>
                <AntDesign name="plus" size={20} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>My List</Text>
              </View>
              <View style={{ marginHorizontal: 20, alignItems: "center" }}>
                <Feather name="thumbs-up" size={20} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Rate</Text>
              </View>
              <View style={{ marginHorizontal: 20, alignItems: "center" }}>
                <AntDesign name="sharealt" size={20} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Share</Text>
              </View>
            </View>

            <Picker
              style={{color:"white", width: 130}}
              dropdownIconColor={"white"}
              selectedValue={currentSeason.name}
              onValueChange={(itemValue, itemIndex) => { 
                setCurrentSeason(movie.seasons.items[itemIndex])
               }}>
              {
                seasonNames.map((seasonName) => (
                  <Picker.Item label={seasonName} key={seasonName} value={seasonName} />
                ))
              }
            </Picker>
          </View>
        }
      />
    </View>
  );
};

export default MovieDetailsScreen;
