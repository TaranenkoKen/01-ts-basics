function getFirstElement<T>(arr: T[]): T {
	return arr[0];
}

const firstNumber: number = getFirstElement<number>([1, 2, 3]);
const firstString: string = getFirstElement<string>(['a', 'b', 'c']);
const firstBoolean: boolean = getFirstElement<boolean>([true, false, true]);

console.log(firstNumber, firstString, firstBoolean);
