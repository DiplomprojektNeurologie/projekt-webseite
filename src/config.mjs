export const SITE = {
	name: 'Neurology',

	origin: 'https://project.neurologie.tech',
	basePathname: '/',

	title: 'Neurology — Discovering Strokes',
	description: '🔍 We analyze state of the art research data for our future.',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: false,
};

export const PROTOTYPE = {
	disabled: true,
	url: 'https://prototype.neurologie.tech',
}

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post 
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
