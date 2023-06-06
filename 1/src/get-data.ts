import { IComment } from './interfaces';

export const getData = async (url: string): Promise<IComment[]> => {
	const response = await fetch(url);

	return response.json();
};