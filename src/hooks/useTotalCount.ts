import { useSelector } from 'react-redux';

import { getTotalCount } from '~store';

export const useTotalCount = () => useSelector(getTotalCount);
