fetch("https://dummyjson.com/products")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    return objectData.products;
  })
  .then((productData) => {
    console.log(productData);

    let product = "";
    productData.map((value) => {
      let rating = Math.round(value.rating);
      let newRating;
      switch (rating) {
        case 1:
          newRating = "⭐";
          break;
        case 2:
          newRating = "⭐⭐";
          break;
        case 3:
          newRating = "⭐⭐⭐";
          break;
        case 4:
          newRating = "⭐⭐⭐⭐";
          break;
        default:
          newRating = "⭐⭐⭐⭐⭐";
      }

      product += `
      <tr>
      <td>${value.id}</td>
      <td>${value.title}</td>
      <td>${value.description}</td>
      <td>${value.price}</td>
      <td>${newRating}</td>
      <td><img src="${value.thumbnail}" /></td>
    </tr>`;
    });
    document.getElementById("table_body").innerHTML = product;
  });
