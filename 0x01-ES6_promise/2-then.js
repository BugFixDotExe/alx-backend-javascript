export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
  });
  promise.catch(Error);
}