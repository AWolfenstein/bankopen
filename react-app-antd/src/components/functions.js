

export function validateSumm(ammount, count, self, countryCode) {
  if (count <= 3) {
    self.setState({
      mask: '999 999',
    });
  }

  if (count === 4) {
    self.setState({
      mask: '9 99999',
    });
  }

  if (count === 5) {
    self.setState({
      mask: '99 9999',
    });
  }

  if (count === 6) {
    self.setState({
      mask: '999 999',
    });
  }

  if (countryCode !== 'RUS' && ammount <= 100000) {
    self.setState({
      fee: { fee: {} },
    });
  } else if (countryCode === 'RUS' && ammount <= 140000) {
    self.setState({
      fee: { fee: {} },
    });
  }

  if (ammount >= 10) {
    self.setState({
      fee: { fee: {} },
    });
  }

  if (isNaN(ammount) === true) {
    self.setState({
      fee: { fee: {} },
    });
  }
}

export function countDigits(ammount) {
  for (var i = 0; ammount > 1; i++) {
    ammount /= 10;
  }
  return i;
}
