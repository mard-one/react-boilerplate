/// <reference types="cypress" />
/// <reference types="jest" />

describe('<App/>', () => {
  it('loads examples', () => {
    cy.visit('http://localhost:1234')
    cy.contains('Hello, world!')
  });
});

export { }