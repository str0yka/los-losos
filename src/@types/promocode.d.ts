type Promocode = {
  id: number;
  code: string;
  name?: string;
  text?: string;
  discountType: 'fix' | 'percentage';
  value: number;
  expireType: 'count' | 'date' | 'infinity';
  date?: Date;
  count?: number;
  counter?: number;
  cart: Cart[];
};

type PromocodeCreateRequest = Omit<Promocode, 'id', 'counter', 'cart'>;

type PromocodeCreateResponse = Omit<Promocode, 'cart'>;

type PromocodeApplyRequest = {
  code: string;
};

type PromocodeApplyResponse = Omit<Promocode, 'cart'>;

type PromocodeCancelResponse = {
  success: true;
};

type PromocodeGetAllResponse = Array<Omit<Promocode, 'cart'>>;
