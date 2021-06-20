import * as React from 'react';
import { Image, FlatList } from 'react-native';
import { Text, View } from '../../components/Themed';
import styles from './styles';
import categories from '../../assets/data/categories';

const firstCategory = categories.items[0]

const  HomeScreen = () => {


  return (
    <View style={styles.container}>
<FlatList
 data={firstCategory.movies}
 renderItem={(item) => <Image 
  style={styles.image}
  source={{
  uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/movie1.jpg"
}}
/>}
/>
    </View>
  );
}

export default HomeScreen