//https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
(function(exports){

	function Sulfuras(sellIn, quality){
		SULFURAS_QUALITY = 80
		this.sellIn = sellIn
		this.quality = SULFURAS_QUALITY
	}

	Sulfuras.prototype.updateSellIn = function () {
	}

	Sulfuras.prototype.updateQuality = function () {
	}

	exports.Sulfuras = Sulfuras
})(this)
