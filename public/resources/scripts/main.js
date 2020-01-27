/* Function to check if an element is visible */

function isVisible(elem) {
	elem = document.getElementById(elem);
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

/* Main function */

window.onload = function () {

	/* Register a service worker */

	//if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js'); }

	/* Update footer year */

	$("#footerYear").html(new Date().getFullYear().toString());

	/* Initialize Materialize CSS components */

	$('.modal#progressDialogModal').modal({ dismissible: false });
	$('.tooltipped').tooltip();
	$('.sidenav').sidenav();
	$('.materialboxed').materialbox();
	$('.scrollspy').scrollSpy();

	/* Ensure the sidenav closes after a selection is made */

	$('#sides1trigger').click(function () { M.Sidenav.getInstance(sidenav).close(); });
	$('#sides2trigger').click(function () { M.Sidenav.getInstance(sidenav).close(); });

	/* Scroll monitor */

	setInterval(function () {
		if (isVisible('footerH')) {
			$('#projects').removeClass('active');
			$('#contact').addClass('active');
			$('#sides1trigger').removeClass('active');
			$('#sides2trigger').addClass('active');
		}
		else {
			$('#contact').removeClass('active');
			$('#projects').addClass('active');
			$('#sides2trigger').removeClass('active');
			$('#sides1trigger').addClass('active');
		}
	}, 100);

	/* Form Field Monitors */

	setInterval(function () {

		/* Collect Value */

		email = $('#email').val();

		/* Validate Value */

		if (email.match('[a-z0-9._%+-]+@+[a-z]+\.+[a-z]') !== null) $('#submit').removeClass('disabled'); else $('#submit').addClass('disabled');

	}, 100);

	/* Display progress bar */

	M.Modal.getInstance(progressDialogModal).open();

	/* Initialise Firebase */

	var firebaseConfig = {
		apiKey: "AIzaSyDqxvGjxRd1Nup_VzmqGB8MaTW3pLRg9mQ",
		authDomain: "kaems-org.firebaseapp.com",
		databaseURL: "https://kaems-org.firebaseio.com",
		projectId: "kaems-org",
		storageBucket: "kaems-org.appspot.com",
		messagingSenderId: "756686902667",
		appId: "1:756686902667:web:235398361bab0b845a8b8e",
		measurementId: "G-P3EYGYK5HV"
	};
	firebase.initializeApp(firebaseConfig);

	/* Lazy load necessary JS files */

	$.when(
		$.getScript("resources/scripts/firebase-analytics.js"),
		$.getScript("resources/scripts/sweetalert.js"),
		$.Deferred(function (deferred) {
			$(deferred.resolve);
		})
	).done(function () {

		/* Initialize Firebase services */

		firebase.analytics();

		/* Hide progress bar */

		M.Modal.getInstance(progressDialogModal).close();

		/* Handle what happens when the user submits an email address */

		$('#submit').click(function () {

			/* Display progress bar */

			M.Modal.getInstance(progressDialogModal).open();

			$.get('https://kaems.org/addEmail?email=' + email, function (data) {
				if (data) {

					/* Hide progress bar */

					M.Modal.getInstance(progressDialogModal).close();

					/* Display success message */

					Swal.fire('Perfect!', 'We\'ll stay in touch.', 'success');

				}
				else {

					/* Hide progress bar */

					M.Modal.getInstance(progressDialogModal).close();

					/* Display error message */

					Swal.fire('Oops!', 'Something went wrong.', 'error');

				}
			}).fail(function () {

				/* Hide progress bar */

				M.Modal.getInstance(progressDialogModal).close();

				/* Display error message */

				Swal.fire('Oops!', 'Something went wrong.', 'error');

			});

		});

		/* Begin execution of non-critical code */

	});

}