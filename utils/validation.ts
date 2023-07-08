const inputValidityCheck = (inputElement: HTMLInputElement) => {
  const { value } = inputElement;
  const pattern = inputElement.getAttribute('pattern');
  if (!pattern) {
    return true;
  }

  const regexp = new RegExp(pattern);
  return regexp.test(value);
};

export const inputErrorIndicate = (
  inputElement: HTMLInputElement,
  isValid: boolean,
  textErrorClass: string,
) => {
  const errorText = inputElement.closest('div')?.querySelector('p');

  if (!isValid) {
    errorText?.classList.add(textErrorClass);
  } else {
    errorText?.classList.remove(textErrorClass);
  }
};

export const inputValidation = (
  inputElement: HTMLInputElement,
  textErrorClass: string,
) => {
  const isValid = inputValidityCheck(inputElement);

  inputErrorIndicate(inputElement, isValid, textErrorClass);

  return isValid;
};

export const formValidate = (
  form: HTMLFormElement,
  textErrorClass: string,
) => {
  const formState: Record<string, Record<string, string | boolean>> = {};

  const inputsList = Array.from(form.querySelectorAll('input'));
  inputsList.forEach((input) => {
    const name = input.getAttribute('name')!;
    const { value } = input;

    const isValid = inputValidation(input, textErrorClass);

    formState[name] = { value, isValid };
  });

  const isFormValid = Object.values(formState).every(({ isValid }) => isValid);

  const formData = Object.entries(formState).reduce(
    (acc, [key, { value }]) => ({ ...acc, [key]: value }),
    {},
  );

  return { isFormValid, formData };
};
