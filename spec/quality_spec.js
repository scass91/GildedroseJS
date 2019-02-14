describe("Quality changes", function() {

  it("quality should should reduce", function() {
    const quality = 10
    const qual_change = -1
    expect(Quality.changeQual(quality, qual_change)).toEqual(9);
  });

  it("quality should increase", function() {
    const quality = 10
    const qual_change = 1
    expect(Quality.changeQual(quality, qual_change)).toEqual(11);
  })

  it("quality should not go below 0", function() {
    const quality = 0
    const qual_change = -1
    expect(Quality.changeQual(quality, qual_change)).toEqual(0);
  })

  it("quality should not go above 50", function() {
    const quality = 50
    const qual_change = +1
    expect(Quality.changeQual(quality, qual_change)).toEqual(0);
  });
});
