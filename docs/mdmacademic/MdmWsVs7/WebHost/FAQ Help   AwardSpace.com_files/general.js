jQuery(document).ready(function() {

// Remove Borders from li's ,etc...

jQuery("#nav li ul li:last-child").css("border-bottom","0");

// Equal heights for the footer panels (left and right)

var footer_left;
footer_left = jQuery("#about").height();

var footer_right;
footer_right = jQuery("#contact").height();

	if(footer_left > footer_right){
		jQuery('#contact').height(footer_left);
	}
	else if(footer_right > footer_left){
		jQuery('#about').height(footer_right - 40);						
	};

});



function ssl_switch(type)
{
	if(type=='') type = 'geotrust';
	eval("document.getElementById('"+type+"_table').style.display='none'");	
	eval("document.getElementById('display_table').innerHTML = document.getElementById('"+type+"_table').innerHTML");
}

function chat() { 
	var request_url_6514432 = "http://livechat.supportindeed.com/request.php?l=admin&x=1&deptid=0&pagex=awardspace.com";
	var chat_width = "450";
	var chat_height = "360";
	OpenWin = this.open(request_url_6514432, '', 'scrollbars=no,menubar=no,resizable=0,location=no,screenX=50,screenY=100,width='+chat_width+',height='+chat_height+'');
} 

function demo(module)
{
	if(!module) module = "";
	if(module!="")
	{
		if(module=='hcp')
		{
			document.getElementById('demo_form_aw').submit();
		}
		else
		{
			document.getElementById('demo_form_rc').module.value = module;
			document.getElementById('demo_form_rc').return_url.value = document.getElementById('demo_form_rc').return_url.value + module;
			document.getElementById('demo_form_rc').submit();
		}
	}
	else
	{
		document.getElementById('demo_form_aw').submit();
	}
}

function faq_show_hide_answers(section,question)
{
	if(section==0 && question!=0)
	{
		//answer show/hide
		if(eval("document.getElementById('answer_"+question+"').style.display=='none'"))
			eval("document.getElementById('answer_"+question+"').style.display='block'");
		else
			eval("document.getElementById('answer_"+question+"').style.display='none'");
	}
	if(section!=0 && question==0)
	{
		//section show/hide
		if(eval("document.getElementById('section_"+section+"').style.display=='none'"))
			eval("document.getElementById('section_"+section+"').style.display='block'");
		else
			eval("document.getElementById('section_"+section+"').style.display='none'");					
	}
}

var vps_sub_features_main_links = new Array();
function vps_sub_features(link,id)
{
	var expand = '+';
	var collapse = '-';
	
	if(vps_sub_features_main_links[id] && vps_sub_features_main_links[id]==1)
	{
		//collapse
		vps_sub_features_main_links[id] = 0;
		link.innerHTML = expand;
		var i = 1;
		var tmp_span;
		while(1)
		{
			eval("var tmp_row = document.getElementById('vps_sub_features_"+id+"_"+i+"')");
			if(!tmp_row) break;
			tmp_row.style.display = 'none';
			i++;
		}	
		i = 1;
		while(1)
		{
			eval("tmp_span = document.getElementById('vps_sub_features_"+id+"_"+i+"_collapsed')");
			if(!tmp_span) break;
			tmp_span.style.display = '';
			eval("tmp_span = document.getElementById('vps_sub_features_"+id+"_"+i+"_expanded')");
			if(!tmp_span) break;
			tmp_span.style.display = 'none';	
			i++;
		}							
	}
	else
	{
		//expand
		vps_sub_features_main_links[id] = 1;
		link.innerHTML = collapse;
		var i = 1;
		var tmp_span;
		while(1)
		{
			eval("var tmp_row = document.getElementById('vps_sub_features_"+id+"_"+i+"')");
			if(!tmp_row) break;
			tmp_row.style.display = '';
			i++;
		}
		i = 1;
		while(1)
		{
			eval("tmp_span = document.getElementById('vps_sub_features_"+id+"_"+i+"_collapsed')");
			if(!tmp_span) break;
			tmp_span.style.display = 'none';
			eval("tmp_span = document.getElementById('vps_sub_features_"+id+"_"+i+"_expanded')");
			if(!tmp_span) break;
			tmp_span.style.display = '';	
			i++;
		}				
	}
}
			