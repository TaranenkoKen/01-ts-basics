import axios from 'axios';

interface Post {
	id: number;
	title: string;
	body: string;
}

function fetchPosts(): Promise<Post[]> {
	return axios
		.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
		.then((response) => {
			const posts: Post[] = response.data;
			if (posts.length > 0) {
				console.log(posts[0].title);
			}
			return posts;
		});
}

fetchPosts();
