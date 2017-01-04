$(document).ready(function(){
	let url = "https://www.reddit.com/r/AdviceAnimals.json";
	let reddit = $('reddit');
	let requestReddit = function(url){
		$.getJSON(url, function(pageData){
			let posts = pageData.data.children;
			let subreddit = posts[0].data.subreddit;
			$('#redditFeed').html('<h1>' + subreddit + '</h1>');
			for (i = 0; i < posts.length; i++){
				let url = posts[i].data.url;
				let thumbnails = posts[i].data.thumbnail;
				$('#redditFeed').append('<li><a target="_blank" href="' + url + '"><img src="' + thumbnails + '"/></li>');
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
			console.log('memes bruh');
		})
	};
	getSubreddit();
});
