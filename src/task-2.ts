interface Product {
	readonly id: number;
	title: string;
	description?: string;
}

const product: Product = {
	id: 1,
	title: 'Watch',
	description: 'A stylish wristwatch',
};

console.log(`Product: ${JSON.stringify(product)}`);
