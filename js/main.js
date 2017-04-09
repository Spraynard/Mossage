$(function () {
	massageObjects = [{
			name : "Sports Massage",
			description : "My sports massages are things of fantasy! You've heard about them, but now you can experience first hand the awe-inspiring power of a professional sports massage!\
							I specifically target the most stressed areas of the body to increase blood flow, release lactic acid, and ultimately help make your muscles heal to be stronger than they ever were before!\
							All kinds of atheletes, from the olympic professional, to the weekend gym-rat can get the amazing benefits of my sports massage.",
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

	serviceObjects = [
		{
			name: "Mossages at the office",
			description: "We're gonna be office chair massagin!!",
			images: [],
			links: []
		},
		{
			name : "On-Site Event Mossages",
			description : "I go to your party or outing and just start massaging people for no reason",
			images: [],
			links: []
		}]

	var Massage = function (data) {
		this.name = ko.observable(data.name);
		this.description = ko.observable(data.description);
		this.images = ko.observableArray(data.images);
		this.links = ko.observableArray(data.links);
	}

	var Service = function (data) {
		this.name = ko.observable(data.name);
		this.description = ko.observable(data.description);
		this.images = ko.observableArray(data.images);
		this.links = ko.observableArray(data.links);
	}

	var viewModel = function () {

		var self = this;

		this.massages = ko.observableArray([]);
		this.services = ko.observableArray([]);

		for (m in massageObjects) {
			this.massages.push(new Massage(massageObjects[m]))
		}

		for (s in serviceObjects) {
			this.services.push(new Service(serviceObjects[s]))
		}

		this.currentObject = ko.observable(this.massages()[0])

		this.leftNavItems = ["About", "Services", "Booking", "Contact"]

		this.switchCurrentObject = function (object) {
			self.currentObject(object);
		}

		this.toggleMassagePage = function() {
			console.log("Hello?");
			var overlay = $("#overlay");
			var body = $("body")
			if (overlay.css('display') == 'none') {
				overlay.show('slow')
				body.toggleClass("noscroll")
			}
			else {
				overlay.hide('fast');
				body.toggleClass("noscroll")
			}
		}

		this.reviews = ko.observableArray([])
	}

	ko.applyBindings(new viewModel());

// Applies custom click event to the '.nav-texts' and based on the value they get, scrolls to that 
// 		specific anchor.
	var about = $("#about-body");
	var services = $("#services-div");
	var booking = $("#booking-div");
	var contact = $("#footer-div");
	var offset = 100;

	$('.nav-text, #brand-name').click(function (object) {
		console.log(object.currentTarget.id)

		var x, y
		var navItemLoc = {
			"brand-name": [0,0],
			"about" : [about.offset().left, about.offset().top - offset],
			"services" : [services.offset().left, services.offset().top - offset],
			"contact" : [contact.offset().left, contact.offset().top - offset],
			"booking" : [booking.offset().left, booking.offset().top - offset]
		}

		x = navItemLoc[object.currentTarget.id][0]
		y = navItemLoc[object.currentTarget.id][1]

		console.log("From custom click | x = " + x + "y = " + y)
		
		$('#navbar-meat').collapse('hide');

		$('html, body').animate({
			scrollTop: y
		}, 2000);
	})
})
