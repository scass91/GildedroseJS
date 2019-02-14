describe("Quality changes", function() {

  it("quality should should reduce", function() {
    var quality = 10
    var qual_change = -1
    expect(Quality.changeQual(quality,qual_change)).toEqual(9);
  });

  it("quality should increase", function() {
    var quality = 10
    var qual_change = 1
    expect(Quality.changeQual(quality,qual_change)).toEqual(11);
  })

  it("quality should not go below 0", function() {
    var quality = 0
    var qual_change = -1
    expect(Quality.changeQual(quality,qual_change)).toEqual(0);
  })

  it("quality should not go above 50", function() {
    var quality = 50
    var qual_change = +1
    expect(Quality.changeQual(quality,qual_change)).toEqual(50);
  });
});
