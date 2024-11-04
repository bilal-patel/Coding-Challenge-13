// function that makes the HTTP request to the API using fetch
async function fetchProducts() {
    const response = await fetch('https://www.course-api.com/javascript-store-products');
    if (response.ok) {
      const data = await response.json();
      return data; // Return the fetched data
    }
    throw new Error('Network response was not ok'); // Handle errors
  }
  const productContainer = document.getElementById('product-list');
  // Function to display products
  function displayProducts(products) {
    products.forEach(product => {
      const productDiv = document.createElement('div');
      // Set the inner html on the created div with the product data

    // This is for task 3 to format the product data neatly. - 
    // TASK 3

      productDiv.innerHTML = `
              <h2>${product.fields.name}</h2>
              <p>Company: $${product.fields.company}</p>
              <p>Price: ${product.fields.price}</p>
              <img src="${product.fields.image[0].url}" alt="${product.fields.name}" width="100" height="100"> </img>
          `;
      // edge case in case the productContainer is null
      if (productContainer != null) {
        productContainer.appendChild(productDiv);
      }
    });
  }
  // Display the fetched data
  fetchProducts().then(products => {
    displayProducts(products);
  }).catch(
    error => {
      console.error('Error fetching products:', error);
    }
  );