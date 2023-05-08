import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';

const Favorite = ({isFavorite, handlePress}) => {
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        {isFavorite ? (
          <Octicons name="feed-heart" size={20} color={'red'} />
        ) : (
          <AntDesign name="heart" size={20} color={'grey'} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Favorite;
