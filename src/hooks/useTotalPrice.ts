import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { getTotalPrice } from '@/store/selectors/cartSelectors';
import { DELIVERY_PRICE, PRICE_FOR_FREE_DELIVERY } from '@/utils';

export const useTotalPrice = () => {
  const totalPrice = useSelector(getTotalPrice);

  const promocodeDiscount = useSelector((state: RootState) => {
    if (!state.cart.promocode) return 0;

    const { value } = state.cart.promocode;
    const { discountType } = state.cart.promocode;

    if (discountType === 'fix') return value;

    return (value / 100) * totalPrice;
  });

  const totalPriceWithDiscount = totalPrice - promocodeDiscount;

  const priceToFreeDelivery = PRICE_FOR_FREE_DELIVERY - totalPrice;

  const isDeliveryFree = priceToFreeDelivery <= 0;
  const totalPriceWithDelivery = isDeliveryFree
    ? totalPriceWithDiscount
    : totalPriceWithDiscount + Number(DELIVERY_PRICE);

  return {
    totalPrice: Math.floor(totalPrice),
    totalPriceWithDiscount: Math.round(totalPriceWithDiscount),
    promocodeDiscount: Math.round(promocodeDiscount),
    totalPriceWithDelivery: Math.round(totalPriceWithDelivery),
    priceToFreeDelivery,
    isDeliveryFree,
  };
};
