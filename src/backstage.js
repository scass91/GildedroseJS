(function(exports){
  function Backstage(sellIn, quality){
    this.sellIn = sellIn
    this.quality = quality
    }
    Backstage.prototype.updateSellIn = function () {
      this.sellIn -= 1;
    };

    Backstage.prototype.updateQuality = function () {
      if (this.quality === 50) {
        this.quality
      } else if (this.quality > 50)  {
        this.quality = 50
      } else if (this.sellIn <= 0 ){
        this.quality = 0
      } else if (this.sellIn < 6 ){
        this.quality += 3
      } else if (this.sellIn < 11){
        this.quality += 2
      } else {
        this.quality += 1
      }
    };

    exports.Backstage = Backstage;
  })(this);
