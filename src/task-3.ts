const usernames: string[] = ['alice', 'bob', 'charlie'];

const ratings: number[] = [1, 2, 3];

interface Product {
	id: number;
	name: string;
	price: number;
}

const products: Product[] = [
	{ id: 1, name: 'Headphones', price: 999 },
	{ id: 2, name: 'Mouse', price: 555 },
];

console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);
