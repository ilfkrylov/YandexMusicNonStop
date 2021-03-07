function skipOffer() {
	// console.log('debug: extension works');
	var offerPopup = document.querySelector(".crackdown-popup.popup_compact.popup.popup_modal");
	if (offerPopup != null && offerPopup.className.indexOf("popup_hidden") == -1) {
		var closeBtn = offerPopup.querySelector(".d-button.deco-button.crackdown-popup__close");
		closeBtn.click();
		var playBtn = document.querySelector(".player-controls.deco-player-controls").querySelector("div[title='Играть [P]']");
		if (playBtn != null) {
			playBtn.click();
			console.log('to infinity and beyond');
		}
	}
}
setInterval(skipOffer, 5000);