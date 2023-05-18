import { IPostForNormalizeData, IById, INormalizeData } from './interfaces';

export const normalizeData = (unnormalizedData: IPostForNormalizeData[]): INormalizeData => {
	const byId: IById = {};

	unnormalizedData.forEach((item) => {
		byId[item.id] = item;
	});

	return {
		byId: byId,
		allIds: unnormalizedData.map(({ id }) => id),
	};
};