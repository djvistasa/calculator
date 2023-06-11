const isValidCalculation = (displayValue: string) => {
  const regex = /^-?\d+(\.\d+)?([-+*/]\d+(\.\d+)?)*$/;
  return regex.test(displayValue);
};

const displayValueEndsWithOperand = (displayValue: string) => {
  const regex = /[+\-*/]$/;
  return regex.test(displayValue);
};

const isValueAnOperand = (value: string) => {
  const regex = /^[+\-*/]$/;
  return regex.test(value);
};

export { displayValueEndsWithOperand, isValidCalculation, isValueAnOperand };
