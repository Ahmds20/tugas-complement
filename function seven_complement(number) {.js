//7's complement
// Start
function calculateSevensComplement() {
    const inputDecimal = parseInt(document.getElementById('input_decimal3').value);
  
    // Convert decimal to binary
    let binaryString = inputDecimal.toString(2);
  
    // Handle negative numbers
    if (inputDecimal < 0) {
      binaryString = twoComplement(binaryString); // Convert to two's complement
    }
  
    // Pad with leading zeros
    while (binaryString.length < 8) {
      binaryString = '0' + binaryString;
    }
  
    // Calculate seven's complement
    let sevensComplement = '';
    for (let i = 0; i < binaryString.length; i++) {
      const digit = parseInt(binaryString[i], 2);
      const complement = 7 - digit;
      sevensComplement += complement.toString(2);
    }
  
    // Convert binary to octal
    const octal = parseInt(sevensComplement, 2).toString(8);
  
    document.getElementById('compls7').textContent = `Bilangan desimal dari ${inputDecimal} = ${octal} dalam octal \nJadi 7's Complement dari ${octal} adalah ${sevensComplement}`;
  }
  
  function twoComplement(binaryString) {
    // Invert the binary string
    let invertedBinaryString = '';
    for (let i = 0; i < binaryString.length; i++) {
      invertedBinaryString += binaryString[i] === '0' ? '1' : '0';
    }
  
    // Add one to the inverted binary string
    let carry = 1;
    let result = '';
    for (let i = binaryString.length - 1; i >= 0; i--) {
      let sum = parseInt(invertedBinaryString[i], 2) + carry;
      carry = Math.floor(sum / 2);
      result = (sum % 2).toString() + result;
    }
  
    return result;
  }
  
  // END SEVEN'S COMPLEMENT
  