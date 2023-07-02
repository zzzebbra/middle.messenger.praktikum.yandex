const checkInputValidity = (inputElement: HTMLInputElement) => {
  const { value } = inputElement;
  const pattern = inputElement.getAttribute('pattern');
  if (!pattern) {
    return true;
  }
  const regexp = new RegExp(pattern);
  return regexp.test(value);
};

export const markInputError = (
  inputElement: HTMLInputElement,
  isValid: boolean,
  inputErrorClass: string,
  textErrorClass: string,
) => {
  const errorText = inputElement.closest('div')?.querySelector('p');
  if (!isValid) {
    inputElement.classList.add(inputErrorClass);
    errorText?.classList.add(textErrorClass);
  } else {
    inputElement.classList.remove(inputErrorClass);
    errorText?.classList.remove(textErrorClass);
  }
};

export const validateInput = (
  inputElement: HTMLInputElement,
  inputErrorClass: string,
  textErrorClass: string,
) => {
  const isValid = checkInputValidity(inputElement);
  markInputError(inputElement, isValid, inputErrorClass, textErrorClass);
  return isValid;
};

export const validateForm = (
  form: HTMLFormElement,
  inputErrorClass: string,
  textErrorClass: string,
) => {
  const formState: Record<string, Record<string, string | boolean>> = {};

  const inputList = Array.from(form.querySelectorAll('input'));
  inputList.forEach((input) => {
    const name = input.getAttribute('name')!;
    const { value } = input;

    const isValid = validateInput(input, inputErrorClass, textErrorClass);

    formState[name] = { value, isValid };
  });
  const isFormValid = Object.values(formState).every(({ isValid }) => isValid);
  const formData = Object.entries(formState).reduce(
    (acc, [key, { value }]) => ({ ...acc, [key]: value }),
    {},
  );
  return { isFormValid, formData };
};
