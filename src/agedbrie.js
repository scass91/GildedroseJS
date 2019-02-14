(function(exports){
  function AgedBrie(sellIn, quality){
    this.sellIn = sellIn
    this.quality = quality
    }
    AgedBrie.prototype.updateSellIn = function () {
      this.sellIn -= 1;
    };

    AgedBrie.prototype.updateQuality = function () {
      if (this.quality === 50) {
        this.quality
      } else if (this.quality >= 49)  {
        this.quality = 50
      } else if (this.sellIn > 0 ){
        this.quality += 1
      } else {
        this.quality += 2
      }
    };

    exports.AgedBrie = AgedBrie;
  })(this);
