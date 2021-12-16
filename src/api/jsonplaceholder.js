import axios from 'axios';

export const obtenerPosts = (successcallback, errorcallback) => {
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (successcallback != null) {
        successcallback(response);
      }
    })
    .catch(error => {
      if (errorcallback != null) {
        errorcallback(error);
      }
    });
};
