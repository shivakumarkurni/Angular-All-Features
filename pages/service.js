app.service("providerService",function(){
	var nokia={
		name:"Nokia-c1",
		price:12000,
		color:"white",
		size:5
	};

	var redmi={
		name:"coolpad",
		price:11000,
		color:"gold",
		size:11
	};
	var samsung={
		name:"samsung-c1",
		price:15000,
		color:"silver",
		size:5.5
	};
	var oppo={
		name:"f1s-c1",
		price:18000,
		color:"rose-gold",
		size:5.5
	};

	app.filter('startsWithLetter', function () {
  return function (items, letter) {
    var filtered = [];
    var letterMatch = new RegExp(letter, 'i');
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (letterMatch.test(item.name.substring(0,1))) {
        filtered.push(item);
      }
    }
    return filtered;
  };
});
	var services=[nokia,redmi,samsung,oppo];

	this.getServiceDetails=function(){
		return services;
	}
})