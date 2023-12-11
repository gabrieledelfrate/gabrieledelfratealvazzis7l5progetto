document.addEventListener('DOMContentLoaded', () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get('id');
  
    fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NzdjYTJjNmEwZDAwMTg0OTVmMWQiLCJpYXQiOjE3MDIxMzE2NTgsImV4cCI6MTcwMzM0MTI1OH0.NbZk2lNxQW27-7fpwSxPxkbOzBImnzVv_UwpFslXUsY'
      }
    })
    .then(response => response.json())
    .then(product => {

      const productDetailsContainer = document.getElementById('productDetails');
      productDetailsContainer.innerHTML = `
        <div class="card rounde m-2 p-2 w-50">
          <img src="${product.imageUrl}" alt="${product.name}" class="card-img-top">
          <div class="card-bod">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">Brand: ${product.brand}</p>
            <p class="card-text">Description: ${product.description}</p>
            <p class="card-text">Price: ${product.price} €</p>
          </div>
        </div>
      `;
    })
    .catch(error => console.error('Errore nella richiesta:', error));
  });
  