var vacancies = document.querySelectorAll('.vacancy');
var vacanciesBtns = document.querySelectorAll('.vacancy .btn');

for (var i = 0; i < vacancies.length; i++ ) {
	vacancies[i].addEventListener('click', function() {
		this.classList.toggle('vacancy_state_full');
	})
}

const vacanciesBtnsHandler = (evt) => {
	evt.stopPropagation();
}

for (var i = 0; i < vacanciesBtns.length; i++ ) {
	vacanciesBtns[i].addEventListener('click', vacanciesBtnsHandler);
}
