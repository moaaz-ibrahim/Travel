import React from "react";
import { View, Text, StyleSheet , Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Review = ({ review }) => {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.userContainer}>
        <Image style={styles.img} source={{uri:review.userImage}}></Image>
        <View style={styles.colContainer}>
        <Text style={styles.username}>{review.username}</Text>
        <Text style={styles.date}>{review.date}</Text>
        </View>
        <View style={styles.starContainer}>
<AntDesign name="star" size={10} color="white" />
<Text style={styles.ratingReview}>{review.rating}</Text>
        </View>
      </View>
      <Text style={styles.comment}>{review.review}</Text>
    </View>
  );
};

const ReviewsContainer = ({ rate, reviewsNum, reviews }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.dest}>Reviews</Text>
        <AntDesign name="star" size={18} color="gold" />
        <Text style={styles.rate}>{rate}</Text>
        <Text style={styles.reviewsNum}>({reviewsNum} reviews)</Text>
        <View style={styles.dealsViewAllContainer}>
          <Text style={styles.viewAll}>See All</Text>
        </View>
      </View>
      {reviews.map((review) => (
        <Review key={review.username} review={review} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: 25,
    // backgroundColor: "red",
    height: 120,
  },
  rate: {
    fontWeight: 'bold',
    marginLeft :4
  },
  reviewsNum: {
    color: '#1877f1',
    paddingLeft: 7,
    fontSize: 13,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  dest: {
    color: "#0a293b",
    fontWeight: "bold",
    fontSize: 19,
    paddingRight: 18,
    marginLeft : -10
    
  },
  dealsViewAllContainer: {
    flexDirection: "row",
    marginLeft: '22%',
  },
  reviewContainer: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    marginVertical : 25 ,
    height :150
  },
  userContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    marginVertical : 15
  },
  username: {
    fontWeight: 'bold',
    marginRight: 5,
    marginBottom :6
  },
  date: {
    color: 'gray',
    fontSize: 12
  },
  comment: {
    fontSize: 16,
  },
  img: {
    width : 60 , 
    height : 60 , 
    borderRadius: 40
},  
colContainer : {
    flexDirection : 'column' , 
    marginLeft :15
},
starContainer :{
    flexDirection :'row', 
     backgroundColor : '#1877f1', 
     width : 60, 
     height :38, 
    //  alignContent: 'center' ,
     alignItems: 'center' , 
     justifyContent :'center',
     borderRadius : 30,
    //  alignSelf: 'flex-start'
    left : 80

} , 
ratingReview : {
    color : 'white',  
    marginLeft : 10

} , 
comment :{
    marginTop : 10, 
    marginLeft : 10
} , 
viewAll : {
    color :'gray' , 
    fontWeight: 'bold'
    // paddingRight :55
}
});

export default ReviewsContainer;
