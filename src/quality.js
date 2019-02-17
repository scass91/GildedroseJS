(function(exports){

	function changeQual(quality,qual_change){
		quality += qual_change
		quality = qualityMaximum(quality)
		quality = qualityMinimum(quality)
		return quality
	}

	function qualityMaximum(quality){
		if (quality > OPTIONS.get("MAX_QUALITY")) {
			quality = OPTIONS.get("MAX_QUALITY")
		}
		return quality
	}

	function qualityMinimum(quality){
		if (quality < OPTIONS.get("MIN_QUALITY")) {
			quality = OPTIONS.get("MIN_QUALITY")
		}
		return quality
	}

	exports.Quality = {
		changeQual: changeQual
	}
})(this)
