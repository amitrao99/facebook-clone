export default function fetchPosts() {
  return (dispatch) => {
    const url = 'google.com';
    fetch(url).then((response) => {
      console.log(response);
    });
  };
}
