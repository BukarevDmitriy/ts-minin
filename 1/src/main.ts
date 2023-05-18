// totalPrice test
import { totalPrice } from './total-price';

console.log(totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }));

// normalizeData test
import { normalizeData } from './normalize-data';
import { postsForNormalizeData } from './mocks';

console.log(normalizeData(postsForNormalizeData));