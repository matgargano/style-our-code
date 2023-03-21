import { useState } from 'react';

const CreateBlog = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [loading, setLoading] = useState(false);
	const [publishResponse, setPublishResponse] = useState(null);

	const publishPost = async () => {
		setLoading(true);
		setPublishResponse(null);
		const request = await fetch('http://localhost:3001/v1/api/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title,
				content,
			}),
		});
		const response = request.json();
		setPublishResponse(response);
		setContent('');
		setTitle('');

		setLoading(false);
	};

	const submit = (e) => {
		e.preventDefault();
		if (content && title) {
			publishPost();
		}
	};

	const updateTitle = (e) => setTitle(e.target.value);
	const updateContent = (e) => setContent(e.target.value);

	if (loading) {
		return <p>Loading</p>;
	}

	let responseOutput = <></>;

	if (publishResponse) {
		responseOutput = <pre>{JSON.stringify(publishResponse, 0, 1)}</pre>;
	}

	return (
		<form onSubmit={submit}>
			{responseOutput}
			<input type="text" value={title} onChange={updateTitle} />
			<input type="text" value={content} onChange={updateContent} />
			<input type="submit" />
		</form>
	);
};

export default CreateBlog;
