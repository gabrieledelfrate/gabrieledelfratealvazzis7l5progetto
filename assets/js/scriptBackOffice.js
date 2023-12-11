document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    
    productForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const nuovoProdotto = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        brand: document.getElementById('brand').value,
        imageUrl: document.getElementById('imageUrl').value,
        price: document.getElementById('price').value
      };
  
      fetch('https://striveschool-api.herokuapp.com/api/product/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NzdjYTJjNmEwZDAwMTg0OTVmMWQiLCJpYXQiOjE3MDIxMzE2NTgsImV4cCI6MTcwMzM0MTI1OH0.NbZk2lNxQW27-7fpwSxPxkbOzBImnzVv_UwpFslXUsY'
        },
        body: JSON.stringify(nuovoProdotto)
      })
      .then((response) => {
        if (response.ok) {
          console.log('Nuovo prodotto creato con successo!');
          location.reload(); 
        } else {
          console.error('Errore durante la creazione del prodotto');
        }
      })
      .catch((error) => console.error('Errore nella chiamata POST:', error));
    });

    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', () => {
    const confermaReset = confirm("Sei sicuro di voler resettare il form?");
    if (confermaReset) {
    productForm.reset();
     }
    });
  });
  
 
 
 
 function mostraProdottiBackoffice(prodotti) {
    const disposizioneProdotti = document.querySelector("#schedeProdotti");

    prodotti.forEach((prodotto) => {
      const card = document.createElement("div");
      card.classList.add("card", "col-12", "col-md-6", "col-lg-4", "col-xl-3", "mb-3");

      const image = document.createElement("img");
        image.src = prodotto.imageUrl;
        image.alt = prodotto.name;
        image.classList.add("card-img-top", "img-fluid");
        card.appendChild(image);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h2");
        title.textContent = prodotto.name;
        title.classList.add("card-title");
        cardBody.appendChild(title);

        const brand = document.createElement("p");
        brand.textContent = `Brand: ${prodotto.brand}`;
        brand.classList.add("card-text");
        cardBody.appendChild(brand);

        const price = document.createElement("p");
        price.textContent = `Price: ${prodotto.price} €`;
        price.classList.add("card-text");
        cardBody.appendChild(price);

        const editButton = document.createElement("button");
        editButton.textContent = "Modifica";
        editButton.classList.add("btn", "btn-primary", "mt-3");
        editButton.addEventListener("click", () => {
          mostraModificaModal(prodotto);
        });
        cardBody.appendChild(editButton);


      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Elimina";
      deleteButton.classList.add("btn", "btn-danger", "mt-3");
      deleteButton.addEventListener("click", () => {
        eliminaProdotto(prodotto._id);
      });
      cardBody.appendChild(deleteButton);

      card.appendChild(cardBody);
      disposizioneProdotti.appendChild(card);
    });
  }

  function eliminaProdotto(prodottoId) {
    const confermaEliminazione = confirm("Sei sicuro di voler eliminare questo prodotto?");
    if (confermaEliminazione) {
      fetch(`https://striveschool-api.herokuapp.com/api/product/${prodottoId}`, {
        method: "DELETE",
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NzdjYTJjNmEwZDAwMTg0OTVmMWQiLCJpYXQiOjE3MDIxMzE2NTgsImV4cCI6MTcwMzM0MTI1OH0.NbZk2lNxQW27-7fpwSxPxkbOzBImnzVv_UwpFslXUsY",
          "Content-Type": "application/json"
        }
      })
      .then((res) => {
        if (res.ok) {
          console.log("Prodotto eliminato con successo");
          location.reload(); 
        } else {
          console.error("Errore durante l'eliminazione del prodotto");
        }
      })
      .catch((error) => console.error("Errore nella chiamata DELETE:", error));
    }
  }
  

  function mostraModificaModal(prodotto) {
    const modal = document.getElementById("modalModificaProdotto");
    modal.style.display = "block";
    document.getElementById("name").value = prodotto.name;
    document.getElementById("description").value = prodotto.description;
    document.getElementById("brand").value = prodotto.brand;
    document.getElementById("imageUrl").value = prodotto.imageUrl;
    document.getElementById("price").value = prodotto.price;
}

function chiudiModal() {
    const modal = document.getElementById("modalModificaProdotto");
    modal.style.display = "none";
  }
  
  

  function modificaProdotto(prodotto) {

    {
        const formModificaProdotto = document.getElementById("formModificaProdotto");
        formModificaProdotto.addEventListener("submit", (event) => {
          event.preventDefault();
      
          const updatedProduct = {
            name: document.getElementById("name").value,
            description: document.getElementById("description").value,
            brand: document.getElementById("brand").value,
            imageUrl: document.getElementById("imageUrl").value,
            price: document.getElementById("price").value,
          };
    
          modificaProdotto(prodotto._id, updatedProduct);
        });
      }
      
      function chiudiModal() {
        const modal = document.getElementById("modalModificaProdotto");
        modal.style.display = "none";
      }
   function modificaProdotto (productId, updatedProduct){
    fetch(`https://striveschool-api.herokuapp.com/api/product/${prodotto._id}`, {
      method: "PUT",
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NzdjYTJjNmEwZDAwMTg0OTVmMWQiLCJpYXQiOjE3MDIxMzE2NTgsImV4cCI6MTcwMzM0MTI1OH0.NbZk2lNxQW27-7fpwSxPxkbOzBImnzVv_UwpFslXUsY",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedProduct)
    })
    .then((res) => {
      if (res.ok) {
        console.log("Prodotto modificato con successo");
        chiudiModal();
        location.reload(); 
      } else {
        console.error("Errore durante la modifica del prodotto");
      }
    })
    .catch((error) => console.error("Errore nella chiamata PUT:", error));
  }}

  function fetchProducts() {
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
      method: "GET",
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NzdjYTJjNmEwZDAwMTg0OTVmMWQiLCJpYXQiOjE3MDIxMzE2NTgsImV4cCI6MTcwMzM0MTI1OH0.NbZk2lNxQW27-7fpwSxPxkbOzBImnzVv_UwpFslXUsY",
        "Content-Type": "application/json"
      }
    })
    .then((res) => res.json())
    .then((data) => { 
      mostraProdottiBackoffice(data);
    })
    .catch((error) => console.error("Errore nella chiamata GET:", error));
  }
  

  fetchProducts();