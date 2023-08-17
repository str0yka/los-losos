import {
 ChangeEvent, ComponentProps, FormEvent, useState,
} from 'react';

interface UseControllerFormParams<Values> {
  defaultValues: Values
  onSubmit: (values: Values) => void
  validate?: (values: Values) => { [Key in keyof Values]?: string | null } | null
}

export const useControllerForm = <Values>({ // TODO: useControlleDForm
  defaultValues,
  onSubmit,
  validate = () => null,
}: UseControllerFormParams<Values>) => {
  const [values, setValues] = useState<Values>(defaultValues);
  const [errors, setErrors] = useState<{ [Key in keyof Values]?: string | null } | null>(null);

  const getFieldProps = (
    key: keyof Values,
    options?: Pick<
      ComponentProps<'input'>,
      | 'min'
      | 'max'
      | 'minLength'
      | 'maxLength'
      | 'required'
    >,
  ) => {
    const value = values[key];
    const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setValues((prev) => ({ ...prev, [key]: event.target.value }));
    };

    return { value, onChange, ...options };
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate(values);

    if (errors) {
      setErrors(validationErrors);
    } else {
      onSubmit(values);
    }
  };

  return {
    values,
    errors,
    getFieldProps,
    handleSubmit,
  };
};
