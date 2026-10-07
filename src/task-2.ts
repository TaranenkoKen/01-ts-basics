interface Product {
	readonly id: number;
	name: string;
	description?: string;
}

const product: Product = {
	id: 1,
	name: 'Watch',
	description: 'A stylish wristwatch',
};

console.log(`Product: ${JSON.stringify(product)}`);
