$(function () {
	massageObjects = [{
			name : "Sports Massage",
			description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse velit est, euismod in rutrum nec, tempus id neque. Nunc a mi sit amet nulla molestie viverra. Aenean dictum interdum tortor vel interdum. Duis commodo elit magna, id lacinia lorem hendrerit eget. Quisque est dolor, tempor quis consequat et, semper eu massa. Suspendisse potenti. Mauris ac ex mauris. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus consectetur, libero eget consequat feugiat, massa enim sagittis purus, quis laoreet nunc erat et arcu. Duis ante ipsum, dignissim vitae convallis sit amet, imperdiet at mi.",
			images : ['sports.jpeg'],
			links : [{name: 'Benefits of Massage For Atheletes - Kerrie Ann Frey', url: 'http://www.healthfitnessmag.com/Health-Fitness-Magazine/February-2013/Benefits-Of-Massage-For-Athletes/'},
					{name: 'The Role of Massage in Sports Performance and Rehabilitation: Current Evidence and Future Direction - Jason Brummitt', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2953308/'}]
		},
		{
			name : "Deep Tissue Massage",
			description : "deep tissue Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse velit est, euismod in rutrum nec, tempus id neque. Nunc a mi sit amet nulla molestie viverra. Aenean dictum interdum tortor vel interdum. Duis commodo elit magna, id lacinia lorem hendrerit eget. Quisque est dolor, tempor quis consequat et, semper eu massa. Suspendisse potenti. Mauris ac ex mauris. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus consectetur, libero eget consequat feugiat, massa enim sagittis purus, quis laoreet nunc erat et arcu. Duis ante ipsum, dignissim vitae convallis sit amet, imperdiet at mi.",
			images : ["Funnydeeptissue.jpg"],
			links :[]
		},
		{
			name : "Trigger Point Therapy",
			description : "Trigger Point Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse velit est, euismod in rutrum nec, tempus id neque. Nunc a mi sit amet nulla molestie viverra. Aenean dictum interdum tortor vel interdum. Duis commodo elit magna, id lacinia lorem hendrerit eget. Quisque est dolor, tempor quis consequat et, semper eu massa. Suspendisse potenti. Mauris ac ex mauris. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus consectetur, libero eget consequat feugiat, massa enim sagittis purus, quis laoreet nunc erat et arcu. Duis ante ipsum, dignissim vitae convallis sit amet, imperdiet at mi.",
			images : ["pressurepoint.jpg"],
			links : []
		},
		{
			name : "Lymphatic Drainage Massage",
			description : "Lymphatic Drainage",
			images : [],
			links : []
		},
		{
			name : "Pregnancy Massage",
			description : "Pregnancy Massage",
			images : [],
			links : []
		},
		{
			name : "Pre and Post Operation Massage",
			description : "Pre and Post Op",
			images : [],
			links : []
		}]

	var Massage = function (data) {
		this.name = ko.observable(data.name);
		this.description = ko.observable(data.description);
		this.images = ko.observableArray(data.images);
		this.links = ko.observableArray(data.links);
	}

	var viewModel = function () {

		var self = this;

		this.massages = ko.observableArray([]);

		for (m in massageObjects) {
			this.massages.push(new Massage(massageObjects[m]))
		}

		this.currentObject = ko.observable(this.massages()[0])

		this.leftNavItems = ["About", "Referrals", "Booking"]
		this.rightNavItems = ["Contact"]

		this.goTo = function(navItem) {
			// Bug: was hitting the referrals button on the nav, and saw that this was scrolling
			// 		the page up. Found out it's because named id'd the referrals area of the website
			//		as well as the nav button the same. Oh well.
			var x, y
			var about = $("#about-body");
			var referrals = $("#referrals-div");
			var booking = $("#booking-div");
			var contact = $("#footer-div");
			var offset = 100;

			console.log(navItem)


			var navItemLoc = {
				"About" : [about.offset().left, about.offset().top - offset],
				"Referrals" : [referrals.offset().left, referrals.offset().top - offset],
				"Contact" : [contact.offset().left, contact.offset().top - offset],
				"Booking" : [booking.offset().left, booking.offset().top - offset]
			}

			x = navItemLoc[navItem][0]
			y = navItemLoc[navItem][1]

			console.log("x equals: " + x + ", y equals: " + y)
			console.log("Referrals var = " + referrals.offset().top)
			window.scrollTo(x, y);
		}

		this.switchCurrentObject = function (object) {
			self.currentObject(object);
		}

		this.toggleMassagePage = function() {
			console.log("Hello?");
			var overlay = $("#overlay");
			if (overlay.css('display') == 'none') {
				overlay.show('slow')
			}
			else {
				overlay.hide('fast');
			}
		}

		this.reviews = ko.observableArray([])
	}

	ko.applyBindings(new viewModel());
})
