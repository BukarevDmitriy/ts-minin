interface IMainInterface {
	price: number,
	discount: number,
	isInstallment: boolean,
	months: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export const totalPrice = ({ price, discount, isInstallment, months }: IMainInterface): number => {
	const totalPrice = ((price / 100) * (100 - discount));

	if (isInstallment) {
		return totalPrice / months;
	} else {
		return totalPrice;
	}
};