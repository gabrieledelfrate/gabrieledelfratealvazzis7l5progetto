const disposizioneProdotti = document.querySelector("#schedeProdotti")

let arrayProdotti = [];

class Prodotti {
    constructor(_name, _description, _brand, _imageUrl, _price, _id) {
        this.name = _name;
        this.description = _description;
        this.brand = _brand;
        this.imageUrl = _imageUrl;
        this.price = _price;
        
    }
}

let iPhone14 = new Prodotti(
    "iPhone 14",
    "The best iPhone until the next one came up",
    "Apple",
    "https://www.joojea.com/22821-medium_default/iphone-14-128gb-rosso.jpg",
    "99",
);

let iPhone15 = new Prodotti(
    "iPhone 15",
    "The best iPhone",
    "Apple",
    "https://media.ldlc.com/r1600/ld/products/00/06/06/42/LD0006064272_0006064293.jpg",
    "119",
);

let iPhone11 = new Prodotti(
    "iPhone 11",
    "You know",
    "Apple",
    "https://photo.yeppon.it/apple-iphone-11-128gb/l-ip-11-bianco-1687426211.jpg",
    "80",
);
let samsungS22 = new Prodotti(
    "Samsung S22",
    "The best Samsung until the next one came up",
    "Samsung",
    "https://m.media-amazon.com/images/I/71pXKGsXZtL._AC_UF1000,1000_QL80_.jpg",
    "98",    
)

arrayProdotti.push(iPhone14, iPhone15, iPhone11, samsungS22);



fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NzdjYTJjNmEwZDAwMTg0OTVmMWQiLCJpYXQiOjE3MDIxMzE2NTgsImV4cCI6MTcwMzM0MTI1OH0.NbZk2lNxQW27-7fpwSxPxkbOzBImnzVv_UwpFslXUsY"
    },
    body: JSON.stringify(iPhone14),
})
    .then((res) => res.json())
    .then((data)  => {
        console.log(data);
        fetchProducts();
    });
fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NzdjYTJjNmEwZDAwMTg0OTVmMWQiLCJpYXQiOjE3MDIxMzE2NTgsImV4cCI6MTcwMzM0MTI1OH0.NbZk2lNxQW27-7fpwSxPxkbOzBImnzVv_UwpFslXUsY"
    },
    body: JSON.stringify(samsungS22),
})
    .then((res) => res.json())
    .then((data)  => {
        console.log(data);
        fetchProducts();
    });
fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NzdjYTJjNmEwZDAwMTg0OTVmMWQiLCJpYXQiOjE3MDIxMzE2NTgsImV4cCI6MTcwMzM0MTI1OH0.NbZk2lNxQW27-7fpwSxPxkbOzBImnzVv_UwpFslXUsY"
    },
    body: JSON.stringify(iPhone15),
})
    .then((res) => res.json())
    .then((data)  => {
        console.log(data);
        fetchProducts();
    });
fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NzdjYTJjNmEwZDAwMTg0OTVmMWQiLCJpYXQiOjE3MDIxMzE2NTgsImV4cCI6MTcwMzM0MTI1OH0.NbZk2lNxQW27-7fpwSxPxkbOzBImnzVv_UwpFslXUsY"
    },
    body: JSON.stringify(iPhone11),
})
    .then((res) => res.json())
    .then((data)  => {
        console.log(data);
        fetchProducts();
    });

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
          mostraProdotti(data);
      })
      .catch((error) => console.error("Errore nella chiamata GET:", error));
  }
  
  function mostraProdotti(prodotti) {
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
            window.location.href = "backoffice.html"; // Reindirizzamento alla pagina backoffice.html
        });
        cardBody.appendChild(editButton);

        card.appendChild(cardBody);
        disposizioneProdotti.appendChild(card);
    });
}

fetchProducts();

