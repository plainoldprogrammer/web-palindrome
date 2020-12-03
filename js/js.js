const input = document.querySelector('input');
const result = document.getElementById('result');

checkIfPalindrome = (e) => {
  const half = Math.round((e.target.value.length / 2) - 1);

  let word = e.target.value;
  let isPalindrome = true;

  for (let start = 0, end = word.length - 1; start <= half; start++, end--) {
    if (word[start] != word[end]) {
      isPalindrome = false;
    }
  }

  result.textContent = isPalindrome;
}

input.addEventListener('input', checkIfPalindrome);
