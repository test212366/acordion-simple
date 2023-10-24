const container = document.querySelector('.container')

function createAccordions() {
	const acord = document.createElement('div')
	acord.classList.add('items')
	acord.insertAdjacentHTML('afterbegin', `
	<div class="item">
	<h4>title item <button class="btn" data-button="one">+</button> </h4>
	<div class="desctiption One">Lorem ipsum dolor sit amet consectetur adipisicing
		elit. Nobis officia, provident quis aut ad exercitationem fugit ipsa aspernatur quae eum quo
		voluptas cumque placeat excepturi sit natus autem debitis eaque!</div>
	</div>
	<div class="item">
		<h4>title item <button class="btn" data-button="two">+</button> </h4>
		<div class="desctiption Two">Lorem ipsum dolor sit amet consectetur adipisicing
			elit. Nobis officia, provident quis aut ad exercitationem fugit ipsa aspernatur quae eum quo
			voluptas cumque placeat excepturi sit natus autem debitis eaque!</div>
	</div>
	<div class="item">
		<h4>title item <button class="btn" data-button="tree">+</button> </h4>
		<div class="desctiption Tree">Lorem ipsum dolor sit amet consectetur adipisicing
			elit. Nobis officia, provident quis aut ad exercitationem fugit ipsa aspernatur quae eum quo
			voluptas cumque placeat excepturi sit natus autem debitis eaque!</div>
	</div>
	`)
	container.appendChild(acord)
	return acord
}
createAccordions()

function showAccordion(options) {
	const one = document.querySelector(options)
	one.classList.toggle('active')
}

document.body.addEventListener('click', e => {
	if (e.target.dataset.button == 'one') showAccordion('.One')
	if (e.target.dataset.button == 'two') showAccordion('.Two')
	if (e.target.dataset.button == 'tree') showAccordion('.Tree')

})