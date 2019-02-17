//https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
(function(exports){

	function Sulfuras(sellIn, quality){
		this.sellIn = sellIn
		this.quality = OPTIONS.get("SULFURAS_QUALITY")
	}

	Sulfuras.prototype.updateSellIn = function () {
	}

	Sulfuras.prototype.updateQuality = function () {
	}

	exports.Sulfuras = Sulfuras
})(this)
