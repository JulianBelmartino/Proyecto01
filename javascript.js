
let productos = [
    {title: 'auto', description: 'four wheels',img:'https://www.karvi.com.ar/blog/wp-content/uploads/2020/10/208II3-850x567.jpg'},
    {title: 'bici', description: 'two wheels',img:'https://hips.hearstapps.com/hmg-prod/images/ride-hybrid-bikes-1657053745.jpg?resize=1200:*'},
    {title: 'tricicle', description: 'three wheels',img:'https://d2r9epyceweg5n.cloudfront.net/stores/713/097/products/20180721_220407-retocada11-3b2c58b41da719a86b15366152810457-640-0.jpg'},
    {title: 'monocycle', description: 'one wheel',img:'https://image.jimcdn.com/app/cms/image/transf/dimension=266x355:format=jpg/path/sa685750733c771d4/image/i22b6d9285d67f26d/version/1385957481/image.jpg'}
  ];
  
  // Get the element where you want to append the divs
  const container = document.querySelector('.main-container');
  
  // Loop through the productos array and create a div for each object
  productos.forEach(producto => {
    // Create the div element
    const div = document.createElement('div');
    div.setAttribute('class', 'container-producto');
  
    // Create the image
    const img = document.createElement('img');
    img.setAttribute('class', 'img')
    img.setAttribute('src', producto.img)
    // Create the h4 element and set its text content to the producto's title
    const h4 = document.createElement('h4');
    h4.textContent = producto.title;
    h4.setAttribute('class', 'item-title');
  
    // Create the p element and set its text content to the producto's description
    const p = document.createElement('p');
    p.textContent = producto.description;
    p.setAttribute('class', 'item-description');
  
    // Append the h4 and p elements to the div element
    div.appendChild(img)
    div.appendChild(h4);
    div.appendChild(p);
    // Append the div element to the container element
    container.appendChild(div);
  });