
_a=[]
_a[0]='upi://pay'
_a[1]='pa='+urlParams['pa']
_a[2]='pn='+urlParams['pn']
_a[3]='mc=0000'
_a[4]='tid='
_a[5]='tr=SHD48856717875'
_a[6]='tn=Pay'
_a[7]='am='+urlParams['amt']
_a[8]='cu=INR'
_a[9]='refUrl=https://business.paytm.com/payment-gateway'

_b='',_s=''
for (_b in _a)
{
	if(_b=='0')
	{
		_s+=_a[_b]+'?'
	}
	else
	{
		_s+='&'+_a[_b]
	}
}
	
new QRCode(document.getElementById("qrcode"), _s);
console.log(qrcode)
