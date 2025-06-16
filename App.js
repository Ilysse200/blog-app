//Import React
import React from "react";

//Import usestate hooks

import { useState } from "react";

//Import react native components
import {
  View, //container component for layout
  Button, //button component for user functionalities
  Text, //Reactnative component for displaying texts
  TextInput, //Input fields for texts
  FlatList, //Efficient list view for rendering posts
  StyleSheet, //Component for custom styling
  TouchableOpacity, //Wrapper for making views touchable
} from "react-native";

// Define initial blog post data as an array of objects
const data = [
  {
    id: 1, //Unique identifier for the post
    title: "React", //Title of the post
    content: `ReactJs is a declarative,
      efficient, and flexible javascript library
      for building user interfaces `, //content of the post
  },
  {
    id: 2,
    title: "React Native", //Title of the second blog
    content: `It is a framework developed by Facebook for creating native-styles
      apps for ios & Android.`, //Content post for the second blog
  },

  {
    id: 3, //Unique identifier for my third blod
    title: "C", //Title for the third blog
    content: `It is a multi-purpose programming language
      It was developed for UNIX operating systems`,
  },
];

export default function App() {
  //Define Usestates for selected post
  const [selectedPost, setSelectedPost] = useState(null);

  //State for the new posts's title input
  const [newPostTitle, setNewPostTitle] = useState("Blog Title");

  //State for the error messages
  const [error, setError] = useState("");
  //State for the post being edited(null if not editing)
  const [editingPost, setEditingPost] = useState(null);

  //State to keep track of the post content
  const [newPostContent, setNewPostContent] = useState(
    "Hello, I am the blog content"
  );

  //State for the list of posts
  const [posts, setPosts] = useState(data);

  {
    /* Add new post form (only if not viewing or 
    editing) */
  }

  //Below is the add New Post function inside the function

  const addNewPost = () => {
    //validate that the title and the content are not empty

    if (newPostTitle.trim() === "" || newPostContent.trim() === "") {
      setError("Title and content cannot be empty");
      return;
    } else {
      setError("");
    }
    //Generate a new Id for the new post

    const id = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1;

    //Create a new post object

    const newPost = {
      id,
      title: newPostTitle,
      content: newPostContent,
    };

    //Add the new Posts to the new Array
    setPosts([...posts, newPost]);

    //Clear the input fields
    setNewPostTitle("");
    setNewPostContent("");
  };
  
  //Function to render each post item to the flatlist

  const renderItem = ({item}) => (
    <TouchableOpacity
    onPress={() => setSelectedPost(item)}

    //Show post details on press
    >
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>
          {item.title}
          </Text>
          <View style={{width:280}}></View>
      </View>
      
    </TouchableOpacity>
  )

  //Main render
  return (
    <View style={styles.container}>
      {/* App heading */}
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Blog</Text>
      </View>

      {/* Selected post details view */}
      {/**Lists of posts (if not editing posts ) */}
      {!selectedPost && !editingPost ? (
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : null}

      {selectedPost === null && editingPost === null && (
        <View style={styles.formContainer}>
          {/* Error Message */}
          {error !== "" && <Text style={styles.errorText}>{error}</Text>}

          {/* Title Input*/}
          <TextInput
            style={styles.input}
            placeholder="Enter Post Title"
            value={newPostTitle}
            onChangeText={setNewPostTitle}
          />

          {/* Content input */}
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter Post Content"
            value={newPostContent}
            onChangeText={setNewPostContent}
            multiline={true}
          />
          {/*Add post button */}
          <Button title="Add new Post" onPress={() => addNewPost()} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  //Main container style for the app

  container: {
    flex: 1, //Take all remaining space
    paddingTop: 40, // Space from the top
    paddingHorizontal: 20, //Space from the left
  },

  //container for the header section
  headingContainer: {
    backgroundColor: "#3498db", //Blue background
    padding: 10, //Pading inside the container
    borderRadius: 10, //Rounded corners
    marginBottom: 20, //Space below the heading
  },

  //Style for the main heading text
  heading: {
    fontSize: 24, //Large fontsize
    fontWeight: "bold", //Bold Text
    textAlign: "Center", //White Text color
    color: "white", //White text color
  },
  //container for each blog post
  postContainer: {
    borderWidth: 1, //Border thickness
    borderColor: "#ccc", // light gray border color
    padding: 20, //Padding inside the post
    marginBottom: 20, //Space below each post
    borderRadius: 10, //Rounded corners
  },

  //Container for the form (add/edit post)
  formContainer: {
    padding: 20, //Padding inside the form
    borderWidth: 1, //Border thickness
    borderColor: "#ccc", //light gray border color
    borderRadius: 10, //Rounded corners
    marginBottom: 20, //Space below the form
  },

  //Styles for error messages
  errorText: {
    color: "red", // Red Text color
    textAlign: "center", //Centered Text
    marginBottom: 10, //Space below the error message
  },

  //Style for text input fields
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  //Additional style for multi-line text area
  textArea: {
    height: 100,
  },

  //Style for the post title
  postTitle:{
    fontSize:18,
    fontWeight:'bold',
    marginBottom:10,
  }
});
