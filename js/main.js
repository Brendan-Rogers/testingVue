(() =>{ console.log("JS Connected");

	const vm = new Vue({
		el : "#app",

		data : {
			message: "Welcome to Vue.js!!",

			targetURL : "https://google.ca",

			deliciousFruit : [
				{ name: "apple", flavor: "tasty" },
				{ name: "orange", flavor: "yummy" },
				{ name: "saskatoon berry", flavor: "prarie" }
			],

			vuemessage : "The thing is true",

			anchorOff : true,

			hazVue : true
		},

		methods : {
			logFruit(e) {
				console.log(e.currentTarget);
			}
		}
	});

})();