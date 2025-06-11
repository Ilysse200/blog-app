//Import React
import React from "react";

//Import usestate hooks

import { useState } from "react";

//Import react native components
import { 
    View,       //container component for layout
    Button,     //button component for user functionalities
    Text,       //Reactnative component for displaying texts
    TextInput,  //Input fields for texts
    FlatList,   //Efficient list view for rendering posts
    StyleSheet, //Component for custom styling
    TouchableOpacity,   //Wrapper for making views touchable
 } from "react-native";

export default function App () {


  return(
    <View style={styles.container}>
      {/* App heading */}
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>
          Blog
        </Text>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
    //Main container style for the app

    container:{
        flex:1, //Take all remaining space
        paddingTop:40, // Space from the top
        paddingHorizontal:20 //Space from the left
    },

    //container for the header section
    headingContainer:{
        backgroundColor:'#3498db',//Blue background
        padding:10, //Pading inside the container
        borderRadius:10 ,//Rounded corners
        marginBottom: 20, //Space below the heading
    },

    //Style for the main heading text
    heading:{
      fontSize: 24, //Large fontsize
      fontWeight: 'bold', //Bold Text
      textAlign: 'Center', //White Text color
      color: 'white', //White text color
    },
    //container for each blog post
    postContainer:{

      
    }
});



