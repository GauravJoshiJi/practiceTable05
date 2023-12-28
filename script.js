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
      product += `
      <tr>
      <td>No</td>
      <td>titl</td>
      <td>des</td>
      <td>pri</td>
      <td>rati</td>
      <td>img</td>
    </tr>`;
    });
    document.getElementById("table_body").innerHTML = product;
  });
