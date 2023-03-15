describe("test suite google tests", function() {
  beforeEach(function() {
    cy.visit("https://google.es");
    cy.get("[id=W0wltc]").click();
    cy.get(".gLFyf").type("apple").type("{enter}");
  });

  function getText(element) {
    const textArr = element.text().split(" ");
    let searchResults = textArr[1];
    searchResults = searchResults.replace(/\./g, "");
    const searchResultsInt = parseFloat(searchResults);
    return searchResultsInt;
  }

  it("Search results are greater than 100000", async function() {
    const element = await cy.get("[id=result-stats]", { timeout: 10000 });
    const searchResultsInt = getText(element);
    expect(searchResultsInt).to.be.greaterThan(100000);
  });

  it("Fails if search results are smaller than 10000", async function () {
    const element = await cy.get("[id=result-stats]");
    const searchResultsInt = getText(element);
    expect(searchResultsInt).to.be.greaterThan(10000);
  });
});
