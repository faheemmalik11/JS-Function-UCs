const urls = ['url1', 'url2', 'url3'];

urls.forEach(url => {
  fetch(url) 
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});
