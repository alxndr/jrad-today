describe('home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('shows header', () => {
    cy.get('header').contains('#TIJRADH')
  })

  it('shows h1 link', () => {
    cy.get('h1').find('a').contains('JRAD')
  })
})
