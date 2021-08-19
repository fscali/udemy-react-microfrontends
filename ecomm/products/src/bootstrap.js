import faker from 'faker';

const mount = (el) => {
  let products = '';
  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  el.innerHTML = products;
};

// Context/Situation #1
// we are running this file in development in isolation
// We are using our local index.html file
// which has an element with an id of 'dev-products'
// We want to immediately render our app into that element

// set automatically by WEBPACK
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  // Assuming our container doesn't have an element with id dev-products
  if (el) {
    mount(el);
  }
}

// Context/Situation #2
// We are running this file in development or production through the
// container app and there is no guaranguee that an element with
// an id of 'dev-products' exist
// WE DO NOT WANT to try to immediately render the app
export { mount };
