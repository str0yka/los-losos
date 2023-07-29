import React, { ChangeEvent } from 'react';

import Input from '@/components/common/Input/Input';
import Textarea from '@/components/common/Textarea/Textarea';

import s from './AddressForm.module.scss';

interface AddressFormProps {
  handleInputChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const AddressForm: React.FC<AddressFormProps> = ({ handleInputChange }) => (
  <div>
    <ul className={s.form}>
      <li className={s.mainBlock}>
        <span>Улица *</span>
        <Input
          placeholder="Обязательно заполните"
          name="street"
          onChange={handleInputChange}
          required
        />
      </li>
      <li>
        <span>Дом *</span>
        <Input
          placeholder="И это тоже"
          name="home"
          onChange={handleInputChange}
          required
        />
      </li>
      <li>
        <span>Строение</span>
        <Input
          name="building"
          onChange={handleInputChange}
        />
      </li>
      <li>
        <span>Подъезд</span>
        <Input
          name="entrance"
          onChange={handleInputChange}
        />
      </li>
      <li>
        <span>Этаж</span>
        <Input
          name="floor"
          onChange={handleInputChange}
        />
      </li>
      <li>
        <span>Квартира</span>
        <Input
          name="apartment"
          onChange={handleInputChange}
        />
      </li>
      <li className={s.textareaBlock}>
        <span>Комментарий к адресу</span>
        <Textarea
          className={s.textarea}
          resize="none"
          placeholder="Укажите код домофона или другую, важную для курьера, информацию"
          name="addressComment"
          onChange={handleInputChange}
        />
      </li>
    </ul>
  </div>
);

export default AddressForm;
