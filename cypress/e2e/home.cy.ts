describe('My first Test', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/home')
  })

  it('should display Home', function() {
    cy.contains('Home')
  });

})
