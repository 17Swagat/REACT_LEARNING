
export default function generatePswd_ContainingNumber(length, minNumbers, maxNumbers, numsArr, charsArr) {
// Determine the number of numbers to include
const numNumbers = Math.floor(Math.random() * (maxNumbers - minNumbers + 1)) + minNumbers;

// Randomly select numbers and characters
const selectedNumbers = [];
for (let i = 0; i < numNumbers; i++) {
    const randomIndex = Math.floor(Math.random() * numsArr.length);
    selectedNumbers.push(numsArr[randomIndex]);
}

const selectedChars = [];
for (let i = 0; i < length - numNumbers; i++) {
    const randomIndex = Math.floor(Math.random() * charsArr.length);
    selectedChars.push(charsArr[randomIndex]);
}

// Combine and shuffle
const combined = selectedNumbers.concat(selectedChars);
for (let i = combined.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [combined[i], combined[j]] = [combined[j], combined[i]];
}

// Convert to string
const resultString = combined.join('');
return resultString;
}

