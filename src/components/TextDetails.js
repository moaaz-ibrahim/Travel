import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TextDetails = ({ title, content, maxChar }) => {
  const [showFullText, setShowFullText] = useState(false);
  const [containerHeight , setContinerHeight] = useState(130)

  const toggleText = () => {
    setShowFullText(!showFullText);
    showFullText ? setContinerHeight(130) : setContinerHeight(280)
  };

  return (
    <View style={[styles.container , {height : containerHeight} ]}>
      <Text style={styles.dest}>{title}</Text>
      <Text style={styles.desc}>
        {showFullText || content.length <= maxChar ? content : `${content.slice(0, maxChar)}`}
      </Text>
      {content.length > maxChar && (
        <TouchableOpacity onPress={toggleText}>
          <Text style={styles.readMore}>{showFullText ? 'Read Less...' : 'Read More...'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical :35,
    marginLeft: 25,
    marginRight : 25 ,
    height: 130, 
    // backgroundColor :'red', 
// 270 130

  },
  dest: {
    color: "#0a293b",
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 20,
  },
  desc: {
    fontSize: 16,
    // lineHeight: 24,
  },
  readMore: {
    color: "blue",
    marginTop: 5,
  },
});

export default TextDetails;
