import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
import estilos from './assets/styles';
import {obtenerPosts} from './api/jsonplaceholder';
import Row from './components/Row';

export default () => {
  const [postsList, setPostsList] = useState([]);

  return (
    <View style={estilos.main}>
      <Text>Hola mundo</Text>
      <Button
        title="Click"
        onPress={() =>
          obtenerPosts(
            response => {
              setPostsList(response.data);
            },
            error => {
              console.error(error);
            },
          )
        }
      />
      <Text>Posts</Text>
      <FlatList
        data={postsList}
        renderItem={post => <Row data={post.item.title} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
