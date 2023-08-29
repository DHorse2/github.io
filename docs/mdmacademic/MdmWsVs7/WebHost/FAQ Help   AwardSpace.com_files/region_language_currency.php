function show_layer_ext(id, action1, action2)
{
	// Opera
	if(navigator.userAgent.indexOf("Opera") != -1 && document.getElementById)
		type="OP";
	
	// Internet Explorer e.g. IE4+
	if(document.all)
		type="IE";
	
	// Netscape version 4 :
	if(document.layers)
		type="NN";
	
	// Mozila e.g. Netscape 6 upwards
	if(!document.all && document.getElementById)
		type="MO";
	
	// Show/hide the layer
	if(type == "IE")
	{
		eval("document.all." + id + ".style.visibility='" + action1 + "'");
		eval("document.all." + id + ".style.display='" + action2 + "'");
	}
	if(type == "NN")
	{
		eval("document." + id + ".visibility='" + action1 + "'");
		eval("document." + id + ".display='" + action2 + "'");
	}
	if(type == "MO" || type == "OP")
	{
		eval("document.getElementById('" + id + "').style.visibility='" + action1 + "'");
		eval("document.getElementById('" + id + "').style.display='" + action2 + "'");
	}
}
	
function set_cookie(c_name,value,expiredays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name+ "=" +escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())+ ";path=/;domain=."+window.location.hostname+";";
}

function get_cookie(c_name)
{
	if (document.cookie.length>0)
	{
	  c_start=document.cookie.indexOf(c_name + "=");
	  if (c_start!=-1)
	  {
		c_start=c_start + c_name.length+1;
		c_end=document.cookie.indexOf(";",c_start);
		if (c_end==-1) c_end=document.cookie.length;
		return unescape(document.cookie.substring(c_start,c_end));
	  }
	}
	return "";
}

function change_region(region,currency)
{
	set_cookie('currency',currency,10);
	set_cookie('region',region,10);
	if(window.location.hostname=='www.awardspace.net')
	{
		if(window.location.pathname=='signup.html' || window.location.pathname=='/signup.html')
		{
			window.location="https://www.awardspace.net/signup.html";
		}
		else
		{
			location.reload(true);
		}
	}	
	switch_region();
}

function switch_region()
{
	var currency;
	var region;

	//switch currency
	currency = get_cookie('currency');
	if(!currency || 0)
	{
		 currency = '';
		 set_cookie('currency',currency,10);
	}
	for(var i=0; i < currencies.length; i++)
	{
		for(var j=0; j<price_divs.length; j++)
		{
			if(eval("document.getElementById('"+price_divs[j]+currencies[i]+"')"))
			{	
				if(currency==currencies[i])
					eval("show_layer_ext('"+price_divs[j]+currencies[i]+"', 'visible', 'inline')");
				else
					eval("show_layer_ext('"+price_divs[j]+currencies[i]+"', 'hidden', 'none')");
			}
		}
	}
	
	//switch region
	region = get_cookie('region');
	if(!region || 0)
	{
		region = '';	
		set_cookie('region',region,10);
	}
	eval("document.getElementById('region_name').innerHTML = document.getElementById('region_"+region+"').innerHTML;");
}


var price_divs = new Array(
'home_price_1111_','home_price_1601_','home_price_1603_','home_price_2223_','home_price_2224_','home_price_3334_','home_price_3335_','home_price_3338_','home_price_3337_',
'setup_fee_1111_','setup_fee_1601_','setup_fee_1603_','setup_fee_2223_','setup_fee_2224_','setup_fee_3334_','setup_fee_3335_','setup_fee_3338_','setup_fee_3337_',
'price1_1111_','price1_1601_','price1_1603_','price1_2223_','price1_2224_','price1_3334_','price1_3335_','price1_3338_','price1_3337_',
'price2_1111_','price2_1601_','price2_1603_','price2_2223_','price2_2224_','price2_3334_','price2_3335_','price2_3338_','price2_3337_',
'price3_1111_','price3_1601_','price3_1603_','price3_2223_','price3_2224_','price3_3334_','price3_3335_','price3_3338_','price3_3337_',
'price4_1111_','price4_1601_','price4_1603_','price4_2223_','price4_2224_','price4_3334_','price4_3335_','price4_3338_','price4_3337_',

'setup_fee_701_','setup_fee_702_','setup_fee_703_',
'price1_701_','price1_702_','price1_703_',
'price2_701_','price2_702_','price2_703_',
'price3_701_','price3_702_','price3_703_',
'price4_701_','price4_702_','price4_703_',

'price1_401_','price1_402_','price1_403_','price1_404_','price1_405_','price1_406_',
'price2_401_','price2_402_','price2_403_','price2_404_','price2_405_','price2_406_',

'price1_11_','price1_12_','price1_13_','price1_14_','price1_15_','price1_16_','price1_17_','price1_18_','price1_19_','price1_20_',
'price1_21_','price1_22_','price1_23_','price1_24_','price1_25_','price1_26_','price1_27_','price1_28_','price1_29_','price1_30_',
'price1_31_','price1_32_','price1_33_','price1_34_','price1_35_','price1_36_','price1_37_','price1_38_','price1_39_','price1_40_',

'price1_910_','price1_921_','price1_922_','price1_923_','price1_924_','price1_930_','price1_940_',
'price2_910_','price2_921_','price2_922_','price2_923_','price2_924_','price2_930_','price2_940_',

'price_min_',

'price_1601_3_','price_1601_3_total_',
'price_1601_6_','price_1601_6_total_',
'price_1601_12_','price_1601_12_total_',
'price_1601_24_','price_1601_24_total_',
'price_1601_36_','price_1601_36_total_',
'price_1601_48_','price_1601_48_total_',
'price_1601_60_','price_1601_60_total_',

'price_1603_3_','price_1603_3_total_',
'price_1603_6_','price_1603_6_total_',
'price_1603_12_','price_1603_12_total_',
'price_1603_24_','price_1603_24_total_',
'price_1603_36_','price_1603_36_total_',
'price_1603_48_','price_1603_48_total_',
'price_1603_60_','price_1603_60_total_',

'price_2223_3_','price_2223_3_total_',
'price_2223_6_','price_2223_6_total_',
'price_2223_12_','price_2223_12_total_',
'price_2223_24_','price_2223_24_total_',
'price_2223_36_','price_2223_36_total_',
'price_2223_48_','price_2223_48_total_',
'price_2223_60_','price_2223_60_total_',

'price_2224_3_','price_2224_3_total_',
'price_2224_6_','price_2224_6_total_',
'price_2224_12_','price_2224_12_total_',
'price_2224_24_','price_2224_24_total_',
'price_2224_36_','price_2224_36_total_',
'price_2224_48_','price_2224_48_total_',
'price_2224_60_','price_2224_60_total_',

'price_3334_3_','price_3334_3_total_',
'price_3334_6_','price_3334_6_total_',
'price_3334_12_','price_3334_12_total_',
'price_3334_24_','price_3334_24_total_',
'price_3334_36_','price_3334_36_total_',
'price_3334_48_','price_3334_48_total_',
'price_3334_60_','price_3334_60_total_',

'price_3335_3_','price_3335_3_total_',
'price_3335_6_','price_3335_6_total_',
'price_3335_12_','price_3335_12_total_',
'price_3335_24_','price_3335_24_total_',
'price_3335_36_','price_3335_36_total_',
'price_3335_48_','price_3335_48_total_',
'price_3335_60_','price_3335_60_total_',

'price_3338_3_','price_3338_3_total_',
'price_3338_6_','price_3338_6_total_',
'price_3338_12_','price_3338_12_total_',
'price_3338_24_','price_3338_24_total_',
'price_3338_36_','price_3338_36_total_',
'price_3338_48_','price_3338_48_total_',
'price_3338_60_','price_3338_60_total_',

'price_3337_3_','price_3337_3_total_',
'price_3337_6_','price_3337_6_total_',
'price_3337_12_','price_3337_12_total_',
'price_3337_24_','price_3337_24_total_',
'price_3337_36_','price_3337_36_total_',
'price_3337_48_','price_3337_48_total_',
'price_3337_60_','price_3337_60_total_',

'price_701_1_','price_701_1_total_',
'price_701_3_','price_701_3_total_',
'price_701_6_','price_701_6_total_',
'price_701_12_','price_701_12_total_',

'price_702_1_','price_702_1_total_',
'price_702_3_','price_702_3_total_',
'price_702_6_','price_702_6_total_',
'price_702_12_','price_702_12_total_',

'price_703_1_','price_703_1_total_',
'price_703_3_','price_703_3_total_',
'price_703_6_','price_703_6_total_',
'price_703_12_','price_703_12_total_');

//var currencies = new Array('USD','EUR','GBP');
var currencies = new Array('USD','EUR');

document.write('<span class="region_selector"><span class="region_selector_text">Region: <span id="region_name"></span></span><span class="region_selector_popup">');

document.write('<a href="javascript:void(0);" onClick="change_region(\'US\',\'USD\')" id=\'region_US\'>United States</a>');
document.write('<a href="javascript:void(0);" onClick="change_region(\'EU\',\'EUR\')" id=\'region_EU\'>Europe</a>');
document.write('<a href="javascript:void(0);" onClick="change_region(\'CA\',\'USD\')" id=\'region_CA\'>Canada</a>');
document.write('<a href="javascript:void(0);" onClick="change_region(\'AU\',\'USD\')" id=\'region_AU\'>Australia</a>');
document.write('<a href="javascript:void(0);" onClick="change_region(\'LAmerica\',\'USD\')" id=\'region_LAmerica\'>Latin America</a>');
document.write('<a href="javascript:void(0);" onClick="change_region(\'Asia\',\'EUR\')" id=\'region_Asia\'>Asia</a>');
document.write('<a href="javascript:void(0);" onClick="change_region(\'Other\',\'EUR\')" id=\'region_Other\'>Other</a>');
document.write('</span></span>');

window.onload = switch_region; 

