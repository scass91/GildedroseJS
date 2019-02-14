(function(exports){
  function NonSpecial(sellIn, quality){
    this.sellIn = sellIn
    this.quality = quality
    }
    NonSpecial.prototype.updateSellIn = function () {
      this.sellIn -= 1;
    };

    NonSpecial.prototype.updateQuality = function () {
      if (this.quality === 0) {
        this.quality
      } else if (this.sellIn > 0)  {
        this.quality = Quality.changeQual(this.quality, -1)
      } else {
        this.quality = Quality.changeQual(this.quality, -2)
      }
    };

    exports.NonSpecial = NonSpecial;
  })(this);
