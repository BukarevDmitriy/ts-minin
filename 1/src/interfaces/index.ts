export interface IPostForNormalizeData {
	id: string;
	title: string;
	body: string;
}

export interface IById {
	[key: string]: IPostForNormalizeData
}

export interface INormalizeData {
	byId: IById,
	allIds: string[],
}

