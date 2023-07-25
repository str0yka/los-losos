import { ChangeEvent, FormEvent, useState } from 'react';

export const useForm = <T>(initialState: T, onSubmit: (formData: T) => void) => {
  const [formData, setFormData] = useState<T>(initialState);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return { formData, handleInputChange, handleSubmit };
};
