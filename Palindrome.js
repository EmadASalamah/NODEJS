const Palindrome = str => {
  const mainStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const revStr = mainStr.split('').reverse().join('');
  return mainStr === revStr
};

// Test cases
console.log(Palindrome('A man, a plan, a canal, Panama!')); // true
console.log(Palindrome('Race car')); // true
console.log(Palindrome('Hello, world!')); // false
