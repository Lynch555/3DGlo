const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const totalValue = document.getElementById('total');

    const countSum = () => {
		let total = 0,
			countValue = 1,
			dayValue = 10,
			step = 100;
		const typeValue = calcType.options[calcType.selectedIndex].value,
			squareValue = +calcSquare.value;

		if (calcCount.value > 1) {
			countValue += (calcCount.value - 1) / 10;
		}

		if (calcDay.value) {
			if (calcDay.value < 5) {
				dayValue *= 2;
			} else if (calcDay.value < 10) {
				dayValue *= 1.5;
			}
		}

		if (!!typeValue && !!squareValue) {
			total = price * typeValue * squareValue * countValue * dayValue;
		}

		if (+totalValue.textContent !== total) {
			if (totalValue.textContent > total) {
				step = -1;
			}

			const timer = setInterval(() => {
				totalValue.textContent = +totalValue.textContent + step;

				if ((total - totalValue.textContent) * step < 1) {
					clearInterval(timer);

					totalValue.textContent = Math.round(total);
				}
			}, 0);
		}
	};

	calcBlock.addEventListener('input', event => {
		const target = event.target;

		if (target.matches('.calc-day') || target.matches('.calc-type') ||
			target.matches('.calc-square') || target.matches('.calc-count')) {
			countSum();
		}
	});
};

export default calc;