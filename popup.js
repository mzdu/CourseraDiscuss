$(function(){
	$("#addMsg").click(function(){

		var queryInfo = {
			active: true,
			lastFocusedWindow: true
		};

		chrome.tabs.query(queryInfo, function(tabs){

			var tab = tabs[0];

			var newUrl = tab.url;
			console.log(newUrl);
			if(newUrl){
				$("#result").text(newUrl);
			}
			else{
				$("#result").text('None');
			}
		});
  // CRITICAL !!!
  // Most methods of the Chrome extension APIs are asynchronous. This means that
  // you CANNOT do something like this:
  //
  // var url;
  // chrome.tabs.query(queryInfo, function(tabs) {
  //   url = tabs[0].url;
  // });
  // alert(url); // Shows "undefined", because chrome.tabs.query is async.	

	}); // end of addMsg click

}); // end of ready function