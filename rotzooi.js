const smtpclient = require('smtp-client');

let gandhi = 'mail.gandi.net';
let kaspermail = 'kasper@krondorsoft.com';
let kaspergmail = 'kasper.janssens.android@gmail.com'
let saragmail = 'devuystsara@gmail.com'
let paswoord = 'tets'

let client = new smtpclient.SMTPClient({
  host: gandhi,
  port: 25
});

(async function() {
  console.log("connecting");
  console.log(await client.connect());
  console.log("EHLO greet");
  console.log(await client.greet({hostname: gandhi}));
  console.log("You are not authorized in this area!!!");
  console.log(await client.authLogin({username: kaspermail, password: paswoord}));
  console.log("From");
  console.log(await client.mail({from: kaspermail}));
  console.log("To");
  console.log(await client.rcpt({to: saragmail}));
  console.log("Message");
  console.log(await client.data('From: me\r\nSubject: koekoek\r\nbron bron bron bron.'));
  console.log("shutdown");
  console.log(await client.quit ());
})().catch(console.error);
