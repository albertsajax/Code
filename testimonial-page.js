$j(document).ready(function () {

	// console.log('wired!');

	// testimonials section
	$j("#our_clients ul li a").click(function(e){
		
		// console.log('clicked!');
		t =  $j(this).data("position");
		// console.log( t );

		// hide other testimonials
		$j(".testimonial").hide();

		// reveal closest testimonial
		$j(this).next(".testimonial").show();

		// move arrow based on position
		switch (t) {
			case 1:
			$j("#testimonial_arrow").css("margin-left", "-435px");
			break;
			case 2:
			$j("#testimonial_arrow").css("margin-left", "-275px");
			break;
			case 3:
			$j("#testimonial_arrow").css("margin-left", "-105px");
			break;
			case 4:
			$j("#testimonial_arrow").css("margin-left", "75px");
			break;
			case 5:
			$j("#testimonial_arrow").css("margin-left", "245px");
			break;
			case 6:
			$j("#testimonial_arrow").css("margin-left", "395px");
			break;
		}

		e.preventDefault();
	});
});

function setConfigurator(data){
	var url = data.url;
	var content = data;
	window.location.href = url + "?" + $j.param(data);
}
