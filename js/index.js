angular.module('portfolio',[])
	.controller('portController',function($scope,$http,$interval,$window){
		$scope.show=1;
		$scope.icons=["fa fa-facebook","fa fa-twitter","fa fa-instagram","fa fa-linkedin","fa fa-github"];
		$scope.menuImages=["img/menu/profile_icon.png","img/menu/skills.png","img/menu/experience.png","img/menu/projects.png","img/menu/contact.png"];
		$scope.projects=["img/projects/adston.png","img/projects/beacons.png","img/projects/messenger.png","img/projects/news.png","img/projects/myshortflicks.png","img/projects/ecommerce.png"];
		$scope.sender={};
		$scope.submitForm=function(){
			console.log($scope.sender);
			$http({
				method :'POST',
				url:'http://localhost/portfolio/send_mail.php',
				data:$scope.sender,
				headers:{'Content-Type':'application/x-www-form-urlencoded'}
			})
				.then(function successCallback(response) {
					console.log(response);
					$scope.sender.senderName='';
					$scope.sender.senderEmail='';
					$scope.sender.senderMessage='';
				}, function errorCallback(response) {
					console.log('fail');
				});
		}
	});