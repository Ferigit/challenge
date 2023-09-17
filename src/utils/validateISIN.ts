const validateISIN = (isin:string) => {
  // Check if the input is a string with exactly 12 characters
  if (typeof isin !== 'string') {
    return 'ISIN cannot be empty';
  }

  // Check if the first two characters are uppercase letters (country code)
  if (!/^[A-Z]{2}$/.test(isin.slice(0, 2))) {
    return 'ISIN must start with 2 uppercase letters';
  }

  // Check if the next nine characters are alphanumeric (national security identifier)
  if (!/^[A-Z0-9]{9}$/.test(isin.slice(2, 11))) {
    return 'ISIN must contains nine alphanumeric characters ';
  }

  // Check if the last character is a digit (check digit)
  if (!/^\d$/.test(isin.charAt(11))) {
    return 'ISIN, the last character must be a digit';
  }

  if (isin.length !== 12) { return 'ISIN, length is not right!'; }

  return null;
};

export default validateISIN;
