/* Ez a script váltogatja az alapelvek doboz tartalmát
*/
$(function() {
    
    $('#fuggetlenseg-button').click(function() {
		$('#fenntarthatosag').addClass('hidden').hide();
		$('#onkentesseg').addClass('hidden').hide();
		$('#meritokracia').addClass('hidden').hide();
		$('#belepes').addClass('hidden').hide();
		$('#transzparencia').addClass('hidden').hide();
		$('#nyitottsag').addClass('hidden').hide();
        if ($('#fuggetlenseg').hasClass('hidden')) {
            $('#fuggetlenseg').removeClass('hidden').fadeIn(1000);
        }
        else {
            $('#fuggetlenseg').addClass('hidden').fadeOut(1000);
        }
    });
});
$(function() {
   	$('#fenntarthatosag').addClass('hidden').hide();
	$('#fenntarthatosag-button').click(function() {
		 $('#fuggetlenseg').addClass('hidden').hide();
		 $('#onkentesseg').addClass('hidden').hide();
		$('#meritokracia').addClass('hidden').hide();
		$('#belepes').addClass('hidden').hide();
		$('#transzparencia').addClass('hidden').hide();
		$('#nyitottsag').addClass('hidden').hide();
        if ($('#fenntarthatosag').hasClass('hidden')) {
            $('#fenntarthatosag').removeClass('hidden').fadeIn(1000);
        }
        else {
            $('#fenntarthatosag').addClass('hidden').fadeOut(1000);
        }
    });
});
$(function() {
   	$('#onkentesseg').addClass('hidden').hide();
	$('#onkentesseg-button').click(function() {
		 $('#fuggetlenseg').addClass('hidden').hide();
		 $('#fenntarthatosag').addClass('hidden').hide();
		$('#meritokracia').addClass('hidden').hide();
		$('#belepes').addClass('hidden').hide();
		$('#transzparencia').addClass('hidden').hide();
		$('#nyitottsag').addClass('hidden').hide();
        if ($('#onkentesseg').hasClass('hidden')) {
            $('#onkentesseg').removeClass('hidden').fadeIn(1000);
        }
        else {
            $('#onkentesseg').addClass('hidden').fadeOut(1000);
        }
    });
});
$(function() {
   	$('#meritokracia').addClass('hidden').hide();
	$('#meritokracia-button').click(function() {
		 $('#fuggetlenseg').addClass('hidden').hide();
		 $('#fenntarthatosag').addClass('hidden').hide();
		$('#onkentesseg').addClass('hidden').hide();
		$('#belepes').addClass('hidden').hide();
		$('#transzparencia').addClass('hidden').hide();
		$('#nyitottsag').addClass('hidden').hide();
        if ($('#meritokracia').hasClass('hidden')) {
            $('#meritokracia').removeClass('hidden').fadeIn(1000);
        }
        else {
            $('#meritokracia').addClass('hidden').fadeOut(1000);
        }
    });
});
$(function() {
   	$('#belepes').addClass('hidden').hide();
	$('#belepes-button').click(function() {
		 $('#fuggetlenseg').addClass('hidden').hide();
		 $('#fenntarthatosag').addClass('hidden').hide();
		$('#onkentesseg').addClass('hidden').hide();
		$('#meritokracia').addClass('hidden').hide();
		$('#transzparencia').addClass('hidden').hide();
		$('#nyitottsag').addClass('hidden').hide();
        if ($('#belepes').hasClass('hidden')) {
            $('#belepes').removeClass('hidden').fadeIn(1000);
        }
        else {
            $('#belepes').addClass('hidden').fadeOut(1000);
        }
    });
});
$(function() {
   	$('#transzparencia').addClass('hidden').hide();
	$('#transzparencia-button').click(function() {
		 $('#fuggetlenseg').addClass('hidden').hide();
		 $('#fenntarthatosag').addClass('hidden').hide();
		$('#onkentesseg').addClass('hidden').hide();
		$('#meritokracia').addClass('hidden').hide();
		$('#belepes').addClass('hidden').hide();
		$('#nyitottsag').addClass('hidden').hide();
        if ($('#transzparencia').hasClass('hidden')) {
            $('#transzparencia').removeClass('hidden').fadeIn(1000);
        }
        else {
            $('#transzparencia').addClass('hidden').fadeOut(1000);
        }
    });
});
$(function() {
   	$('#nyitottsag').addClass('hidden').hide();
	$('#nyitottsag-button').click(function() {
		 $('#fuggetlenseg').addClass('hidden').hide();
		 $('#fenntarthatosag').addClass('hidden').hide();
		$('#onkentesseg').addClass('hidden').hide();
		$('#meritokracia').addClass('hidden').hide();
		$('#belepes').addClass('hidden').hide();
		$('#transzparencia').addClass('hidden').hide();
        if ($('#nyitottsag').hasClass('hidden')) {
            $('#nyitottsag').removeClass('hidden').fadeIn(1000);
        }
        else {
            $('#nyitottsag').addClass('hidden').fadeOut(1000);
        }
    });
});