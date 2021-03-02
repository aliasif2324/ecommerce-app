const { expect } = require('chai');
require('isomorphic-fetch');
const { describe, it } = require('mocha');


const port = 3000;

describe('server', function () {
  it('should connect to home page', async function () {
    const response = await fetch(`http://localhost:${port}`);
    expect(response.status).to.equal(200);

  });

  it('should connect to products page', async function () {
    const response = await fetch(`http://localhost:${port}/products`);
    expect(response.status).to.equal(200);
  });

  it('should connect to cart page', async function () {
    const response = await fetch(`http://localhost:${port}/cart`);
    expect(response.status).to.equal(200);
  });

  it('should connect to checkout page', async function () {
    const response = await fetch(`http://localhost:${port}/checkout`);
    expect(response.status).to.equal(200);
  });

  it('should connect to localhost', async function () {
    const response = await fetch(`http://localhost:${port}/*`);
    expect(response.status).to.equal(200);
  });

});


