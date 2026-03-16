/** PopCork — demoLand Auth Module */
const PC_STORAGE='popcork_demo_users',PC_SESSION='popcork_session';
function pcReadUsers(){try{return JSON.parse(localStorage.getItem(PC_STORAGE)||'[]')}catch{return[]}}
function pcWriteUsers(u){localStorage.setItem(PC_STORAGE,JSON.stringify(u))}
function pcGetSession(){try{return JSON.parse(localStorage.getItem(PC_SESSION))}catch{return null}}
function pcSetSession(s){localStorage.setItem(PC_SESSION,JSON.stringify(s))}
function pcClearSession(){localStorage.removeItem(PC_SESSION)}
function pcSignup(d){const u=pcReadUsers();if(u.some(x=>x.email.toLowerCase()===d.email.toLowerCase()))throw new Error('Account exists.');u.push(d);pcWriteUsers(u);const s={userId:'demo-'+d.email,displayName:d.firstName+' '+d.lastName,email:d.email,authMethod:d.signupMethod,authenticatedAt:new Date().toISOString()};pcSetSession(s);return s}
function pcLogin(m,e){const u=pcReadUsers(),f=u.find(x=>x.email.toLowerCase()===(e||'').toLowerCase());const s={userId:f?'demo-'+f.email:'user-001',displayName:f?f.firstName+' '+f.lastName:'Demo User',email:f?f.email:'demo@popcork.app',authMethod:m,authenticatedAt:new Date().toISOString()};pcSetSession(s);return s}
function pcLogout(){pcClearSession();window.location.href='/login.html'}
function pcRequireAuth(){const s=pcGetSession();if(!s){window.location.href='/login.html';return null}return s}
const PC_SIM={'email':['Deriving key...','Key derived','Session established!'],'pgp-key':['Scanning...','NitroKey detected','PGP verified!'],'yubikey':['Waiting for YubiKey...','YubiKey 5 detected','FIDO2 verified!'],'did-wallet':['Connecting DID wallet...','DID resolved...','Verified!'],'trezor':['Scanning for Trezor...','Trezor 5 detected','Ed25519 confirmed!'],'biometric':['Initializing WebAuthn...','Biometric scanned...','FIDO2 verified!'],'chrome-oauth':['Redirecting to Google...','Token received','Confirmed!'],'brave-oauth':['Connecting to Brave...','BAT linked','Confirmed!']};
async function pcRunSim(m,cb){const s=PC_SIM[m]||['Connecting...','Done!'];for(const x of s){cb(x);await new Promise(r=>setTimeout(r,900))}}
