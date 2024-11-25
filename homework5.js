function fetchImage() {
    
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(element => element.json()) 
      .then(img => {
            const image = img.message;
            const imgElement = document.getElementById('Image');
            imgElement.src = image;
      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
  }

   fetchImage();