var obj = new BigEval();
var result = obj.exec(urlParams['amt']);

var params = {
  pa: urlParams['pa'],
  pn: urlParams['pn'],
  mc: '',
  tid: '',
  tr: '',
  tn: urlParams['custm_msg'],
  am: result,
  cu: 'INR',
  refUrl: 'BHIM_UPI'
};

var paramString = Object.entries(params)
  .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
  .join('&');

var upiLink = `upi://pay?${paramString}`;

new QRCode(document.getElementById('qrcode'), upiLink);

var upiLinkEl = document.createElement('a');
upiLinkEl.href = upiLink;
upiLinkEl.title = 'UPI Link';
upiLinkEl.innerText = 'upi';

document.body.appendChild(upiLinkEl);
