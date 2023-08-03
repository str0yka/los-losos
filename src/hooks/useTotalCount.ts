import { useSelector } from 'react-redux';

import { getTotalCount } from '@/store/selectors/cartSelectors';

export const useTotalCount = () => useSelector(getTotalCount);
