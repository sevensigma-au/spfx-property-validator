export class PropertyValidator {

  public static getRequiredPropertyErrorMessage(value: string): string {
    return !value ? 'Please specify a value.' : '';
  }

  public static getConditionalRequiredPropertyErrorMessage(value: string, conditionalValue: string): string {
    return conditionalValue && !value ? 'Please specify a value.' : '';
  }

  public static getNumericPropertyErrorMessage(value: string): string {
    let message = '';

    if (value && value.trim()) {
      const numericValue = parseInt(value, 10);
      if (isNaN(numericValue)) {
        message = 'Please specify a valid number.';
      }
    }

    return message;
  }

  public static getRequiredNumericPropertyErrorMessage(value: string): string {
    let message = '';

    message = PropertyValidator.getRequiredPropertyErrorMessage(value);
    if (!message) {
      message = PropertyValidator.getNumericPropertyErrorMessage(value);
    }

    return message;
  }

  public static getPositiveIntegerPropertyErrorMessage(value: string): string {
    let message = '';

    if (value && value.trim()) {
      message = PropertyValidator.getNumericPropertyErrorMessage(value);

      if (!message) {
        const numericValue = parseInt(value, 10);
        if (numericValue <= 0) {
          message = 'Please specify a number greater than zero.';
        }
      }
    }

    return message;
  }

  public static getRequiredPositiveIntegerPropertyErrorMessage(value: string): string {
    let message = '';

    message = PropertyValidator.getRequiredPropertyErrorMessage(value);
    if (!message) {
      message = PropertyValidator.getPositiveIntegerPropertyErrorMessage(value);
    }

    return message;
  }

  public static getNonNegativeIntegerPropertyErrorMesage(value: string): string {
    let message = '';

    if (value && value.trim()) {
      message = PropertyValidator.getNumericPropertyErrorMessage(value);

      if (!message) {
        const numericValue = parseInt(value, 10);
        if (numericValue < 0) {
          message = 'Please specify a number greater than or equal to zero.';
        }
      }
    }

    return message;
  }

  public static getRequiredNonNegativeIntegerPropertyErrorMessage(value: string): string {
    let message = '';

    message = PropertyValidator.getRequiredPropertyErrorMessage(value);
    if (!message) {
      message = PropertyValidator.getNonNegativeIntegerPropertyErrorMesage(value);
    }

    return message;
  }

  public static getNumericProperty(value: string): number | null {
    let numericValue: number | null = null;

    if (value && value.trim()) {
      if (!PropertyValidator.getNumericPropertyErrorMessage(value)) {
        numericValue = parseInt(value, 10);
      }
    }

    return numericValue;
  }
}
