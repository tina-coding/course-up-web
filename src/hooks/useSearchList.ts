
interface IParams<T> {
	query: string;
	field: keyof T;
	list: Array<T>;
}
export function useSearchList<T>({ query, field, list }: IParams<T>) {
	return query === '' || list.length === 0 ? list : list.filter((item) => item[field].toLowerCase().includes(query));
}
