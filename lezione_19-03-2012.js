var apply = function(f,x) {
	return f(x);
};

var aa = function(fun) {
	return function(array) {
		var ret;
		ret = array.map(fun);
		return ret;
	}
}

var comp2 = function(array) {
	return function(x) {
		var f= array[0];
		var g= array[1];

		return f(g(x));
	}
}

var comp = function(array) {
	return function(x) {
		for(i=array.length-1;i>=0;i--) {
			var fun = a[i];
			x = fun(x);
		}
		return x;
	}
};
