/**
 *
 * Calculator
 *
 */

import { useCallback, useEffect, useState } from "react";
import Button from "../button";
import { bottomRow, numbers, operators, topRow } from "./buttons";
import {
  StyledButtonWrapper,
  StyledCalculator,
  StyledDisplay,
  StyledDisplayValue,
  StyledLeftSection,
  StyledRightSection,
  StyledTopLeftSection,
} from "./styles";
import {
  displayValueEndsWithOperand,
  isValidCalculation,
  isValueAnOperand,
} from "./utils";

function Calculator(): JSX.Element {
  const [displayValue, setDisplayValue] = useState<string>("0");

  const handleNegativeOperand = useCallback(() => {
    if (displayValue.toString().indexOf("-") === 0) {
      return setDisplayValue(displayValue.toString().slice(1));
    }

    setDisplayValue(`-${displayValue}`);
  }, [displayValue]);

  const handlePercentageButton = useCallback(() => {
    try {
      const result = eval(`${displayValue} / 100`);
      setDisplayValue(result);
    } catch (error) {
      setDisplayValue("Error");
    }
  }, [displayValue]);

  const calculate = useCallback(() => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result);
    } catch (error) {
      setDisplayValue("Error");
    }
  }, [displayValue]);

  const handleAction = useCallback(
    (value: string) => {
      if (value === "=" && !isValidCalculation(displayValue)) {
        return;
      }

      if (
        displayValueEndsWithOperand(displayValue) &&
        isValueAnOperand(value)
      ) {
        return setDisplayValue(
          displayValue.substring(0, displayValue.length - 1) + value
        );
      }

      if (isValueAnOperand(value) && displayValue.length === 1) {
        return setDisplayValue(`${displayValue}${value}`);
      }

      if (value === "." && displayValue.length === 1 && displayValue === "0") {
        return setDisplayValue("0.");
      }

      if (displayValueEndsWithOperand(displayValue) && value === ".") {
        return setDisplayValue(`${displayValue}0${value}`);
      }

      if (value === "%") {
        return handlePercentageButton();
      }

      if (value === "AC") {
        return setDisplayValue("0");
      }

      if (value === "+/-") {
        return handleNegativeOperand();
      }

      if (displayValue.length === 1 && displayValue === "0") {
        return setDisplayValue(value);
      }

      if (value === "=") {
        return calculate();
      }

      setDisplayValue(displayValue + value);
    },
    [calculate, displayValue, handleNegativeOperand, handlePercentageButton]
  );

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key;

      if (key === "Enter") {
        return handleAction("=");
      }

      if (key === "Backspace") {
        return handleAction("AC");
      }
      // Check if the pressed key is a number
      if (!isNaN(Number(key))) {
        return handleAction(key);
      }
      // Check if the pressed key is an operand (+, -, *, /)
      if (["+", "-", "*", "/"].includes(key)) {
        handleAction(key);
      }
    },
    [handleAction]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <StyledCalculator>
      <StyledDisplay>
        <StyledDisplayValue>{displayValue}</StyledDisplayValue>
      </StyledDisplay>
      <StyledButtonWrapper>
        <StyledLeftSection>
          <StyledTopLeftSection>
            {topRow.map(({ id, value, variant }) => (
              <Button
                key={id}
                title={value}
                onClick={() => handleAction(value)}
                variant={variant}
              />
            ))}
            {numbers.map(({ id, value, variant }) => (
              <Button
                key={id}
                title={value}
                onClick={() => handleAction(value)}
                variant={variant}
              />
            ))}

            {bottomRow.map(({ id, value, variant, isLarge }) => (
              <Button
                key={id}
                title={value}
                onClick={() => handleAction(value)}
                variant={variant}
                isLarge={isLarge}
              />
            ))}
          </StyledTopLeftSection>
        </StyledLeftSection>
        <StyledRightSection>
          {operators.map(({ id, value, variant }) => (
            <Button
              key={id}
              title={value}
              onClick={() => handleAction(value)}
              variant={variant}
            />
          ))}
        </StyledRightSection>
      </StyledButtonWrapper>
    </StyledCalculator>
  );
}

export default Calculator;
