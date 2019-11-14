var obj = {
	login: "i-espinola",
	id: 35310021,
	node_id: "MDQ6VXNlcjM1MzEwMDIx",
	avatar_url: "https://avatars1.githubusercontent.com/u/35310021?v=4",
	gravatar_id: "",
	url: "https://api.github.com/users/i-espinola",
	html_url: "https://github.com/i-espinola",
	followers_url: "https://api.github.com/users/i-espinola/followers",
	following_url:
    "https://api.github.com/users/i-espinola/following{/other_user}",
	gists_url: "https://api.github.com/users/i-espinola/gists{/gist_id}",
	starred_url: "https://api.github.com/users/i-espinola/starred{/owner}{/repo}",
	subscriptions_url: "https://api.github.com/users/i-espinola/subscriptions",
	organizations_url: "https://api.github.com/users/i-espinola/orgs",
	repos_url: "https://api.github.com/users/i-espinola/repos",
	events_url: "https://api.github.com/users/i-espinola/events{/privacy}",
	received_events_url:
    "https://api.github.com/users/i-espinola/received_events",
	type: "User",
	site_admin: false,
	name: "Ivaη Espínola G.",
	company: "@agencia-takeoff",
	blog: "",
	location: "Brasil",
	email: null,
	hireable: true,
	bio:
    "Desenvolvedor front-end e designer, apaixonado por tecnologia e aviação. Sou um entusiasta web a mais de 7 anos focado em desenvolvimento front-end e UI/UX.",
	public_repos: 9,
	public_gists: 0,
	followers: 0,
	following: 1,
	created_at: "2018-01-10T19:33:56Z",
	updated_at: "2019-11-10T13:51:15Z"
};

for (var prop in obj) {
	console.log(prop + " = " + obj[prop]);
}
