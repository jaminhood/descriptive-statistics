class CentralTendency {
	mean(numbers) {
		let sumOfNumbers = 0
		numbers.forEach(number => (sumOfNumbers += number))
		const mean = sumOfNumbers / numbers.length
		return mean
	}

	median(numbers) {
		const middleNumberIdx = Math.floor(numbers.length / 2)
		let middleNumber = numbers[middleNumberIdx]
		if (middleNumberIdx % 2 !== 0) {
			middleNumber = (numbers[middleNumberIdx - 1] + numbers[middleNumberIdx]) / 2
		}
		return middleNumber
	}

	mode(numbers) {
		let occurance = {}
		let highest = {
			key: 0,
			value: 0,
		}

		numbers.forEach(number => {
			if (occurance[number]) {
				occurance = { ...occurance, [number]: occurance[number] + 1 }
			} else {
				occurance = { ...occurance, [number]: 1 }
			}
		})

		Object.keys(occurance).forEach(occur => {
			if (occurance[occur] >= highest.value && Number(occur) > highest.key) {
				highest.key = occur
				highest.value = occurance[occur]
			}
		})

		return highest.key
	}
}

const arrayOfNumbers = [2, 3, 4, 5, 6, 2, 5]
const centralTendency = new CentralTendency()
console.log(centralTendency.mode(arrayOfNumbers))
