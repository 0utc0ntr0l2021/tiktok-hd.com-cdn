const past = document.querySelector('#past');
const linkinput = document.querySelector('#link');
const clear = document.querySelector('#clear');
const cookiebutton = document.querySelector('#cookiebutton');
const langen = document.querySelector('#langen');
const langar = document.querySelector('#langar');
const langhi = document.querySelector('#langhi');
const langzh = document.querySelector('#langzh');
const langru = document.querySelector('#langru');
const langde = document.querySelector('#langde');
const langfr = document.querySelector('#langfr');
const langit = document.querySelector('#langit');
const langes = document.querySelector('#langes');
const langpt = document.querySelector('#langpt');
$(document).ready(function(){
  $('#download').click(function(){ 
    var link = encodeURIComponent(linkinput.value);
	var csrf = $('#csrf').val();
    $.ajax({
        type: "POST",
        url: "/api",
	    contentType: "application/json",
	    dataType: 'json',
        data: JSON.stringify({link: link,csrf: csrf}),
        success: function(response) {
		    if(response.error){			
                $('#errorinfo').text(response.error);
				if($('#error').hasClass('visually-hidden-focusable')){
					$('#error').removeClass("visually-hidden-focusable");
				}		
			}else{
				$('#playcount').text(response.playcount + ' view.');
				$('#likecount').text(response.likecount + ' like.');
				$('#sharecount').text(response.sharecount + ' share.');				
				$('#time').text(response.time);				
				$('#author').text(response.author);
				$('#avatar').attr('src', response.avatar);
                $('#title').text(response.title);
			    $('#cover').attr('src', response.cover);
			    $('#hd').attr('href', 'https://tiktok-hd.com/download.php?type=video&file=' + response.hdplay);
			    $('#sd').attr('href', 'https://tiktok-hd.com/download.php?type=video&file=' + response.play);
			    $('#music').attr('href', 'https://tiktok-hd.com/download.php?type=music&file=' + response.music);
				if(!$('#error').hasClass('visually-hidden-focusable')){
					$('#error').addClass("visually-hidden-focusable");
				}
				if($('#info').hasClass('visually-hidden-focusable')){
					$('#info').removeClass('visually-hidden-focusable');
				}
				var oo = document.querySelector("#link");
				oo.scrollIntoView({behavior: "auto"});
				past.style.display = 'none';
	            clear.style.display = 'inline';
			}
        }	
    });
  });
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
if(getCookie('accept') !== '1'){
	$('#cookiestoast').addClass('show');
}
past.addEventListener('click', () => {
  navigator.clipboard.readText()
    .then(text => {
        linkinput.value = text.trim();
	    past.style.display = 'none';
	    clear.style.display = 'inline';
    });
});
clear.addEventListener('click', () => {
	linkinput.value = '';
    past.style.display = 'inline';
	clear.style.display = 'none';
});
cookiebutton.addEventListener('click', () => {
	$('#cookiestoast').removeClass('show');
	setCookie('accept', '1', '365');
});
langen.addEventListener('click', () => {
	setCookie('lang', 'en', '365');
});
langar.addEventListener('click', () => {
	setCookie('lang', 'ar', '365');
});
langhi.addEventListener('click', () => {
	setCookie('lang', 'hi', '365');
});
langzh.addEventListener('click', () => {
	setCookie('lang', 'zh', '365');
});
langru.addEventListener('click', () => {
	setCookie('lang', 'ru', '365');
});
langde.addEventListener('click', () => {
	setCookie('lang', 'de', '365');
});
langfr.addEventListener('click', () => {
	setCookie('lang', 'fr', '365');
});
langit.addEventListener('click', () => {
	setCookie('lang', 'it', '365');
});
langes.addEventListener('click', () => {
	setCookie('lang', 'es', '365');
});
langpt.addEventListener('click', () => {
	setCookie('lang', 'pt', '365');
});
});
