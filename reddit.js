$(document).ready(function(){
	let url = "https://www.reddit.com/r/AdviceAnimals.json";

	let requestReddit = function(url){
		$.getJSON(url, function(pageData){
			let posts = pageData.data.children;
			let subreddit = posts[0].data.subreddit;
			$('#redditFeed').html('<h1>reddit.com/r/' + subreddit + '</h1>');
			for (i = 0; i < posts.length; i++){
				let url = posts[i].data.url;
				let postTitle = posts[i].data.title;
				let thumbnail = posts[i].data.thumbnail;
				$('#redditFeed').append('<li><img width="50" src="' + thumbnail + '"/><a href="' + url + '">'+ postTitle +'</a></li>');
			}
		});
	}

	let subInput = $('#subredditInput');
	let subButton = $('#subredditButton');

	let getSubreddit = function(){
		subButton.click(function(){
			let newSubreddit = subInput.val();
			let newUrl = "https://www.reddit.com/r/" + newSubreddit + ".json";
			requestReddit(newUrl);
		})
	};
	getSubreddit();
});
