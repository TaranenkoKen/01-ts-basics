const usernames: string[] = ['alice', 'bob', 'charlie'];

const ratings: number[] = [1, 2, 3];

interface Product {
	id: number;
	title: string;
}

const products: Product[] = [
	{ id: 1, title: 'Headphones' },
	{ id: 2, title: 'Mouse' },
];

console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);
