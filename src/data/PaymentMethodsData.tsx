import Icon from '@mdi/react';
import { mdilCreditCard } from '@mdi/light-js';
import { mdiBank } from '@mdi/js';

export const PaymentMethodsData = [
  {
    id: 0,
    method: 'bank',
    logo: <Icon path={mdiBank} size={1} />,
    title: 'Bank Transfer',
    subtitle: 'Direct payment to our business account',
  },
  {
    id: 1,
    method: 'card',
    logo: <Icon path={mdilCreditCard} size={1} />,
    title: 'Credit/Debit Card',
    subtitle: 'Pay using your preferred card'
  }
]