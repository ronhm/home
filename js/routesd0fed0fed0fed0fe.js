routes=[{path:'/',url:'./index.html',},{path:'/about/',url:'./pages/about.html',},{path:'/legal/',url:'./pages/legal.html',},{path:'/catalog/',componentUrl:'./pages/catalog.html',},{path:'/news/',url:'./pages/news.html',},{path:'/theming/',componentUrl:'./pages/theming.html',},{path:'/revokes/',url:'./pages/revokes.html',},{path:'/updates/',url:'./pages/updates.html',},{path:'/category/:category/',async(routeTo,routeFrom,resolve,reject){var url='./pages/category.php?category='+routeTo.params.category;resolve({componentUrl:url});}},{path:'/app/:id/',async(routeTo,routeFrom,resolve,reject){var url='./pages/app.php?app='+routeTo.params.id;resolve({componentUrl:url});}},{path:'/exo/:id/',async(routeTo,routeFrom,resolve,reject){var url='./pages/exo.php?app='+routeTo.params.id;resolve({componentUrl:url});}},{path:'/search/',url:'./pages/search.php',},{path:'/page-loader-template7/:user/:userId/:posts/:postId/',templateUrl:'./pages/page-loader-template7.html',},{path:'/page-loader-component/:user/:userId/:posts/:postId/',componentUrl:'./pages/page-loader-component.html',},{path:'/request-and-load/user/:userId/',async:function(routeTo,routeFrom,resolve,reject){var router=this;var app=router.app;app.preloader.show();var userId=routeTo.params.userId;setTimeout(function(){var user={firstName:'Vladimir',lastName:'Kharlampidi',about:'Hello, i am creator of Framework7! Hope you like it!',links:[{title:'Framework7 Website',url:'http://framework7.io',},{title:'Framework7 Forum',url:'http://forum.framework7.io',},]};app.preloader.hide();resolve({componentUrl:'./pages/request-and-load.html',},{context:{user:user,}});},1000);},},{path:'(.*)',url:'./pages/404.html',},];