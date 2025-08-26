$(document).ready(function() {
	$('#blog-feed-b').click(function() {
    		$('#feed').attr('src', 'blogfeed.html')
	});
	
	$('#about-me-b').click(function() {
		console.log('clicked')
		$('#feed').attr('src', 'aboutmefeed.html')
	});

	$('#artigos-b').click(function(){
		$('#feed').attr('src', 'artigosfeed.html')
	});
	
	$('#projects-b'.click(function() {
		$('#feed').attr('src', 'projectsfeed.html')
	});
	
	$('#link-b'.click(function() {
		$('#feed').attr('src', 'linkfeed.html')
	});
	
	$('#about-page-b'.click(function() {
		$('#feed').attr('src', 'aboutmefeed.html')
	});
	
	$('#mailme').click(function() {
		$('#mail-div').attr('src', 'mail.html')
	})
});
