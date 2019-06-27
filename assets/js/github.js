
(function(){

  var sideMenu = {

      //initilize variable
        root : "https://api.github.com",
        user : '/users/ibanez-comvex',
        endpoint : "/repos?visibility=all",
        gitHubToken : '76967e97b910b4b79e42e93ba9874aa4c413b229',


      init: function(){
        this.makeAPIRequest();
      },

      makeAPIRequest: function(){
           jQuery.ajax({
            type : "GET",
            url: sideMenu.root+sideMenu.user+sideMenu.endpoint,
            dataType : "json",
            // beforeSend: function(xhr) { xhr.setRequestHeader('Authorization','Bearer ' + sideMenu.access_token); },
            success : function(content, status, xhr) {
              console.log(content[0][ontent])

            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
               console.log(XMLHttpRequest);
            }

         })
      }

}

sideMenu.init();
})();


// var access_token = "76967e97b910b4b79e42e93ba9874aa4c413b229"
//
// jQuery.githubUser = function(username, callback) {
//   jQuery.getJSON("https://api.github.com/users/" + username&access_token, callback);
// }
//
// jQuery.fn.loadRepositories = function(username) {
//   this.html("<span>Querying GitHub for repositories...</span>");
//
//   var target = this;
//   $.githubUser(username, function(data) {
//     console.log(data)
//     var repos = data.repos_url;
//     sortByNumberOfWatchers(repos);
//
//     var list = $('<dl/>');
//     target.empty().append(list);
//     $(repos).each(function() {
//       list.append('<dt><a href="'+ this.url +'">' + this.name + '</a></dt>');
//       list.append('<dd>' + this.description + '</dd>');
//     });
//   });
//
//   function sortByNumberOfWatchers(repos) {
//     repos.sort(function(a,b) {
//       return b.watchers - a.watchers;
//     });
//   }
// };
