function printUserInfo(name: string, age: number, email?: string): void {
	console.log(`Name: ${name}`);
	console.log(`Age: ${age}`);
	if (email) {
		console.log(`Email: ${email}`);
	}
}

printUserInfo('Ivan', 20, 'ivan@example.com');
printUserInfo('Bob', 30);
