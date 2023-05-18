const wrapper = document.querySelector('.wrapper') as HTMLDivElement;
const audio = document.querySelector('audio') as HTMLAudioElement;
const playButtons = document.querySelectorAll('.button') as NodeListOf<HTMLDivElement>;
const volumeSlider = document.getElementById('volume-slider') as HTMLInputElement;

type WeatherType = 'sun' | 'rain' | 'snow';

let playState = 'pause';
let currentType: WeatherType = 'sun';
let previousType: WeatherType | null = null;
let previousIndex: number | null = null;

volumeSlider.addEventListener('input', (e) => {
	if (e.target instanceof HTMLInputElement) {
		const value = e.target.value;
		audio.volume = +value / 100;
	}
});

for (let i = 0; i < playButtons.length; i++) {
	playButtons[i].addEventListener('click', async (e) => {
		if (e.target instanceof HTMLDivElement) {
			currentType = e.target.dataset.type as WeatherType;

			if (previousType !== currentType) {
				if (!wrapper.classList.contains(`wrapper--${currentType}`)) {
					wrapper.classList.add((`wrapper--${currentType}`));
					wrapper.classList.remove((`wrapper--${previousType}`));
				}

				playButtons[i].children[0].classList.add('pause');

				if (previousIndex !== null) {
					playButtons[previousIndex].children[0].classList.remove('pause');
				}

				previousType = currentType;

				audio.pause();
				audio.src = `/assets/sounds/${currentType}.mp3`;
				audio.play();
				playState = 'play';
			} else {
				if (playState === 'pause') {
					playButtons[i].children[0].classList.add('pause');

					audio.play();
					playState = 'play';
				} else {
					playButtons[i].children[0].classList.remove('pause');

					audio.pause();
					playState = 'pause';
				}
			}

			previousIndex = i;
		}
	});
}