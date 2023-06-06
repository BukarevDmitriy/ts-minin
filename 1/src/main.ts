// totalPrice test
import { totalPrice } from './total-price';

console.log(totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }));

// normalizeData test
import { normalizeData } from './normalize-data';
import { postsForNormalizeData } from './mocks';

console.log(normalizeData(postsForNormalizeData));

// getData test
import { getData } from './get-data';

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

getData(COMMENTS_URL).then((data) => {
	data.forEach(({ id, email}) => {
		console.log(`ID: ${id}, Email: ${email}`);
	});
});