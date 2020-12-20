import axios from 'axios';

const url = 'http://localhost:3000/posts/';

class PostService {
	static getPosts() {
		return async (text) =>  {
			const res = await axios.get(url);
			const data = res.data;

			data.map((post) => ({
				...post,
				text
			}));
		};
	}

	static insertPost(title, description) {
		return axios.post(url, {
			title,
			description
		});
	}

	static deletePost(id) {
		return axios.delete(`${url}${id}`);
	}
}

export default PostService;
