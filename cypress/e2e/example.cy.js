describe("My App", () => {
  it("should load the homepage", () => {
    cy.visit("/");
    cy.contains("Welcome to my app");
  });
});
