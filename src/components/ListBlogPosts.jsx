import { useEffect, useState } from 'react';

const ListBlogPosts = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchPosts = async () => {
		setLoading(true);
		const request = await fetch('http://localhost:3001/v1/api/posts');
		const data = await request.json();
		setPosts(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	if (loading) {
		return <p>Loading</p>;
	}
	if (posts.length === 0) {
		return <p>No posts found</p>;
	}

	return posts.map((p, i) => {
		return <pre key={i}>{JSON.stringify(p)}</pre>;
	});
};

export default ListBlogPosts;
