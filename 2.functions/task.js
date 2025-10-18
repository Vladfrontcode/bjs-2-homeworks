function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
	}

	let avg = Number((sum / arr.length).toFixed(2));

	return {
		max: max,
		min: min,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	return arr.reduce((sum, current) => sum + current, 0);
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let min = arr[0];
	let max = arr[0];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}

	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}

	return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++
		}
	}

	return sumEvenElement / countEvenElement;

}

function makeWork(arrOfArr, func) {
	if (arrOfArr.length === 0) {
		return 0;
	}

	let maxWorkerResult = func(...arrOfArr[0]);

	for (let i = 1; i < arrOfArr.length; i++) {
		const currentResult = func(...arrOfArr[i]);
		if (currentResult > maxWorkerResult) {
			maxWorkerResult = currentResult;
		}
	}

	return maxWorkerResult;
}
