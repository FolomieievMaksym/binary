function ibg() {
	if (true) {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
				// ibg[i].style.backgroundPosition = "center";
				// ibg[i].style.backgroundSize = "cover";
				// ibg[i].style.backgroundRepeat = "no-repeat"
			}
		}
	}
}
ibg();
let tab = function () {
	let tabNav = document.querySelectorAll('.portfolio__menu-link'),
		contentTabs = document.querySelectorAll('.content-tabs'),
		tabName;
	tabNav.forEach(item => {
		item.addEventListener('click', selectTabNav)
	})
	function selectTabNav() {
		tabNav.forEach(item => {
			item.classList.remove('active')
		})
		this.classList.add('active')
		tabName = this.getAttribute('data-tab-name')
		selectTabContent(tabName)
	}
	function selectTabContent(tabName) {
		contentTabs.forEach(item => {
			item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active')
		})
	}
}
tab()
