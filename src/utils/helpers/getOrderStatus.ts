export const getOrderStatus = (
  statusFromServer:
    | 'accepted'
    | 'inWork'
    | 'enRoute'
    | 'delivered'
    | 'canceled',
) => {
  if (statusFromServer === 'accepted') {
    return '⏰ заказ принят';
  }

  if (statusFromServer === 'inWork') {
    return '🥘 готовится';
  }

  if (statusFromServer === 'enRoute') {
    return '🚚 в пути';
  }

  if (statusFromServer === 'delivered') {
    return '✅ доставлен';
  }

  if (statusFromServer === 'canceled') {
    return '❌ отменен';
  }
};
