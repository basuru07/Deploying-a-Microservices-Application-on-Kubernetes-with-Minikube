fetch('http://localhost:30001/api')
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').textContent = data.message;
  })
  .catch(error => {
    document.getElementById('message').textContent = 'Error fetching data';
    console.error(error);
  });