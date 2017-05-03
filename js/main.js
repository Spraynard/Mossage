$(function () {
	massageObjects = [{
			name : "Sports Massage",
			description : "A massage specific to athletes and the muscles they use in their particular sport. Sports massages help to prevent injury and maintain a \
				healthy body that performs at the optimum level. The focus is on stretching and lengthening the muscles while keeping the area warm, and \
				reducing lactic acid build up. Sports massages can be used pre-event, post-event, or just to maintain flexibility and overall health!",
			images : [{image: 'muscle_guy.jpeg', tags: "Kalamazoo Massage sports massage"},
					{image: 'sports_massage_volleyball.jpg', tags: "Kalamazoo Massage sports massage"}],
			links : [{name: 'Benefits of Massage For Atheletes - Kerrie Ann Frey', url: 'http://www.healthfitnessmag.com/Health-Fitness-Magazine/February-2013/Benefits-Of-Massage-For-Athletes/'},
					{name: 'The Role of Massage in Sports Performance and Rehabilitation: Current Evidence and Future Direction - Jason Brummitt', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2953308/'}]
		},
		{
			name: "Children's Massage",
			description: "I cater my massages to everybody, even your child! Let me help your kid relax and feel the magic \
				of what a true massage is like. Massages have countless benefits for children, especially kids with ADHD and other behavioral issues. \
				It's very important to learn to relax when you're stressed out, so let me teach your kid relaxation methods while they lay \
				on the table. If you want, I can even teach you some techniques to use on your children at home!",
			images: [{image: "baby_massage.jpg", tags: "Kalamazoo Massage child massage"},
					{image:"child_massage.jpg", tags: "Kalamazoo Massage child massage"}],
			links: [{name: "Some Benefits of Massage for Children", url: "http://www.livestrong.com/article/114384-benefits-massage-children/"}]
		},
		{
			name : "Deep Tissue Massage",
			description : "A good deep tissue massage can help with years of pain and help release tension in chronically tense \
				areas such as the neck, lower back, and shoulders. These types of massages work by physically breaking down \
				adhesions in the muscle to relieve pain, and restore normal movement. Just to warn you, this type of massage will \
				probably give discomfort, but the benefits to the discomfort are so worth it.",
			images : [{image: "Funnydeeptissue.jpg", tags: "Kalamazoo Massage deep tissue massage"}],
			links :[{name: 'Information about Deep Tissue Massage', url: 'http://www.happymassage.com/wiki/Deep_Tissue_Massage'}]
		},
		{
			name : "Trigger Point Therapy",
			description : "Trigger point therapy is one of the most basic and essential parts of professional massage. \
				Have you ever heard anyone use the term 'knot' before, when they're talking about their body? Well that's what \
				a trigger point is, a knot! Trigger point therapy is the process of helping your body release all of that 'bunched up' tension \
				and let me be the first to tell you that a professional session with me will make you think twice about ever getting your \
				triger points worked on by anybody else.",
			images : [{image: "trigger_point_therapy.jpg", tags: "Kalamazoo Massage trigger point therapy"}],
			links : [{name: 'Myofascial Trigger Point - Wikipedia Article', url: 'https://en.wikipedia.org/wiki/Myofascial_trigger_point'}]
		},
		{
			name : "Lymphatic Drainage Massage",
			description : "Your body's lymph nodes help to cleanse your blood from toxins that are released throughout the day. \
				They also help to regulate your immune system! Lymphatic drainage massages help to increase lymph node performance, \
				and consequently, help to strengthen you immune system. These types of massages are prescribed by doctors after a surgery \
				on the lymph nodes, but don't let that stop you from asking me to massage these areas. It feels too good not to!",
			images : [{image :"lymphatic_drainage_massage.jpg", tags:"Kalamazoo Massage lymphatic drainage massage"}],
			links : [{name: "Information about the Lymphatic System", url:"https://en.wikipedia.org/wiki/Lymphatic_system"}]
		},
		{
			name : "Pregnancy Massage",
			description : "Are you feeling stressed out and tired from carrying all that extra weight? \
				Can you feel pain and strain on your lower back, or legs? As a mother of two, I know what pregnancy \
				can do to the body. I also know how to help relieve some of the stress that comes with it! I'll make sure \
				to make you feel completely comforted as I work on your strained back, legs, and any other muscles that are being used too much. \
				The inherent benefits on mood from massage will also help you and your partner in these tumultuous times!",
			images : [{image :"pregnancy_massage_img.jpg", tags: "Kalamazoo Massage pregnancy massage"}],
			links : []
		},
		{
			name : "Pre and Post Operation Massage",
			description : "Surgery is very stressful. I'm here to help relieve that stress, and directly improve\
				your healing time.\n Massages before any operation help to relieve any stress and anxiety that \
				you may have, and even help to build the immune system up against those nasty hospital germs you're \
				going to be exposed to!\n After surgery, massages help healing time dramatically by giving extra blood flow, \
				and promoting flexibility and mobility in the affected area. In general, you'll also feel better because \
				massages help promote better overall moods! Basically, if you aren't getting massages before or after your operations \
				you're really missing out!",
			images : [{image: "pre_post_surgery_img.jpg", tags: "Kalamazoo Massage Pre and Post Operation Massage"}],
			links : [{name: '8 Science-Backed Benefits of Massage After Surgery', url: 'http://www.surgerysupplements.com/8-science-backed-benefits-of-massage-after-surgery/'}]
		}]

	serviceObjects = [
		{
			name: "Mossages at the office",
			description: "Quite possibly the best way that you can show your employees that you care about them \
				is by offering them massages at the workplace! I bring my personal massage chair to every in-office massage, \
				so you can rest easy knowing that your employees are being given the best possible care. If you feel like you want \
				to set up massages for your employees (and yourself, of course), please give me a call or an e-mail!",
			images: [{image: "office_massage.jpg", tags: "Kalamazoo Massage Office Massage"}],
			links: []
		},
		{
			name : "On-Site Event Mossages",
			description : "I have brought my massage chair to many different types of events, including birthday parties, music festivals, \
				races, and more. Any event that has people standing for long hours or doing any type of repeated movements is an opportunity for me \
				to help relax their tired muscles. If you have an event that you feel would be made even better with massages, please call or e-mail me \
				and we can set something up!",
			images: [{image: "event_massages.jpg", tags: "Kalamazoo Massage Event Massage"}],
			links: []
		}]

	function tagger(tagArray) {
		var string = "";
		tagArray.forEach(function(tag) {
			string += tag + " ";
		})
		return string
	}	
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
