function convertToRoman(numeral) {
			const ones = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
			const tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
			const hundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
			const thousands = ["M", "MM", "MMM"];
			let converted = [];
			let formatted;
			let oneNumeral;

			if (numeral > 0) {
				if (numeral > 9) {
					if (numeral > 99) {
						if (numeral > 999 && numeral < 4000) {
							let thousand;
							let thousandNumeral;
							thousand = Math.floor(numeral * 0.001);
							thousandNumeral = thousands[thousand - 1];
							converted.push(thousandNumeral);
							numeral = numeral - numeral * 1000;
						}
						let hundred;
						let hundredNumeral;
						hundred = Math.floor(numeral * 0.01);
						hundredNumeral = hundreds[hundred - 1];
						converted.push(hundredNumeral);
						numeral = numeral - hundred * 100;
					}
					let ten;
					let tenNumeral;
					ten = Math.floor(numeral * 0.1);
					tenNumeral = tens[ten - 1];
					converted.push(tenNumeral);
					numeral = numeral - ten * 10;
				}
				oneNumeral = ones[numeral - 1];
				converted.push(oneNumeral);
			}
			formatted = converted.join('');
			return formatted;
		}
		
		//var selectedPara = document.querySelector('p');
		const selectedDiv = document.querySelector('div');
		const input = document.querySelector('input');
		const convertButton = document.querySelector('button');

		convertButton.onclick = () => {

			let myItem = input.value;
			input.value = '';
			let addPara = document.querySelector('p');

			if (myItem > 0 && myItem < 4000) {
				let roman = convertToRoman(myItem);
				addPara.textContent = roman;

			} else {
				addPara.textContent = 'Please submit a number 1 through 3999!';
				selectedDiv.appendChild(addPara);
			}
		}