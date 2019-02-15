(function(exports){
	function Backstage(sellIn, quality){
		this.sellIn = sellIn
		this.quality = quality
	}
	Backstage.prototype.updateSellIn = function () {
		this.sellIn -= 1
	}

	Backstage.prototype.updateQuality = function () {
		if (this.sellIn <= MIN_SALE_DATE ){
			this.quality = MIN_QUALITY
		} else if (this.sellIn < 6 ){
			this.quality = Quality.changeQual(this.quality,3)
		} else if (this.sellIn < 11){
			this.quality = Quality.changeQual(this.quality,2)
		} else {
			this.quality = Quality.changeQual(this.quality,1)
		}
	}

	exports.Backstage = Backstage
})(this)
