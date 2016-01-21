describe("count", function() {
  it("will count up to 30", function() {
    expect(count(5, 30)).to.eql([0, 5, 10, 15, 20, 25, 30]);
  });
});
