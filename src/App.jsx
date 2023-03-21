import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import './App.css';
import ListBlogPosts from './components/ListBlogPosts';
import CreateBlog from './components/CreateBlog';

function App() {
	return (
		<>
			<CreateBlog />
			<ListBlogPosts />
		</>
	);
}

export default App;
