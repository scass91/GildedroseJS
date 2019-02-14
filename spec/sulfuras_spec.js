describe("Sulfuras", function() {

  it("sellIn should remain constant", function() {
    const sulfuras = new Sulfuras(5,80);
    sulfuras.updateSellIn();
    expect(sulfuras.sellIn).toEqual(5);
  });

  it("quality should not change", function() {
    const sulfuras = new Sulfuras(5,80);
    sulfuras.updateQuality();
    expect(sulfuras.quality).toEqual(80);
  });

});
