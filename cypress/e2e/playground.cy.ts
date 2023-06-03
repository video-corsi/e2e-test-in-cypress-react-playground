describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/playground')
  })

  it('should disply 10 children', function() {
    cy.get('li').should('have.length', 10)
  });

})
