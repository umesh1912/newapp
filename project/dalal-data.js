(function(){
const g=(en,gu)=>({en,gu});
const T={
app:['DalalSetu','દલાલસેતુ'],
tagline:["Surat's trusted network for property agents. Your listings, your clients and your commission, all on record.",'સુરતના પ્રોપર્ટી દલાલોનું ભરોસાપાત્ર નેટવર્ક. તમારું લિસ્ટિંગ, તમારો ગ્રાહક અને તમારું કમિશન, બધું રેકોર્ડ પર.'],
chooseLang:['Choose your language','તમારી ભાષા પસંદ કરો'],
langSub:['You can switch anytime from the top bar.','ઉપરના બારમાંથી ગમે ત્યારે બદલી શકો છો.'],
continue:['Continue','આગળ વધો'],
enterMobile:['Enter your mobile number','તમારો મોબાઇલ નંબર લખો'],
mobileSub:["We'll send a 6-digit OTP to confirm it's you.",'તમારી ઓળખ માટે 6 અંકનો OTP મોકલીશું.'],
mobileLabel:['Mobile number','મોબાઇલ નંબર'],
sendOtp:['Send OTP','OTP મોકલો'],
phoneErr:['Enter a 10-digit mobile number','10 અંકનો મોબાઇલ નંબર લખો'],
terms:['By continuing you agree to the Terms of Use and Privacy Policy.','આગળ વધીને તમે ઉપયોગની શરતો અને ગોપનીયતા નીતિ સ્વીકારો છો.'],
enterOtp:['Enter the OTP','OTP લખો'],
otpSentTo:['Sent by SMS to +91 ','SMS દ્વારા મોકલ્યો: +91 '],
otpHint:['Prototype: any 6 digits work.','પ્રોટોટાઇપ: કોઈપણ 6 અંક ચાલશે.'],
resend:['Resend OTP in 0:24','0:24 પછી ફરી OTP મોકલો'],
verify:['Verify & continue','ખરાઈ કરો અને આગળ વધો'],
otpErr:['Enter all 6 digits','બધા 6 અંક લખો'],
welcome:['Welcome, Rakesh bhai','સ્વાગત છે, રાકેશભાઈ'],
navHome:['Home','હોમ'],navListings:['Listings','લિસ્ટિંગ'],navDeals:['Deals','ડીલ'],navPay:['Payments','ચુકવણી'],navMe:['Profile','પ્રોફાઇલ'],
greet:['Kem cho, Rakesh bhai','કેમ છો, રાકેશભાઈ'],
verifiedAgent:['Verified agent','ચકાસાયેલ દલાલ'],
stActive:['Active listings','સક્રિય લિસ્ટિંગ'],stActiveCap:['Shared 14 times this week','આ અઠવાડિયે 14 વાર શેર'],
stDeals:['Open deals','ચાલુ ડીલ'],stDealsCap:['1 at token stage','1 ટોકન તબક્કે'],
stDue:['Due to you','તમને મળવાપાત્ર'],stDueCap:['₹1,20,000 overdue','₹1,20,000 મુદત વીતી'],
stAck:['Awaiting sign-off','સ્વીકૃતિ બાકી'],stAckCap:['Visits & payments','મુલાકાત અને ચુકવણી'],
attention:['Needs your attention','તમારું ધ્યાન જરૂરી'],
quick:['Quick actions','ઝડપી કામ'],
qaNew:['New listing','નવું લિસ્ટિંગ'],qaVisit:['Record visit','મુલાકાત નોંધો'],qaPay:['Record payment','ચુકવણી નોંધો'],qaReport:['Report issue','ફરિયાદ કરો'],
recent:['Recent activity','તાજેતરની પ્રવૃત્તિ'],
searchPh:['Search locality, BHK or listing ID','વિસ્તાર, BHK કે લિસ્ટિંગ ID શોધો'],
tabNetwork:['Surat network','સુરત નેટવર્ક'],tabMine:['My listings','મારાં લિસ્ટિંગ'],
fAll:['All','બધું'],fSale:['Sale','વેચાણ'],fRent:['Rent','ભાડે'],fLease:['Lease','લીઝ'],fRes:['Residential','રહેણાંક'],fCom:['Commercial','કોમર્શિયલ'],fLand:['Land','જમીન'],
results:['listings','લિસ્ટિંગ'],possibleDup:['Possible copy','સંભવિત નકલ'],unverified:['Unverified','ચકાસણી બાકી'],photos:['photos','ફોટા'],
noResults:['No listings match. Try another locality.','કોઈ લિસ્ટિંગ મળ્યું નહીં. બીજો વિસ્તાર અજમાવો.'],
listedBy:['Listed by','લિસ્ટ કરનાર'],originalListing:['Original listing','મૂળ લિસ્ટિંગ'],listedOn:['Listed','લિસ્ટ કર્યું'],
collab:['Collaboration terms','સહયોગની શરતો'],collabSub:['Visible to verified agents. Bringing a buyer means accepting these terms.','ચકાસાયેલ દલાલોને દેખાય. ખરીદનાર લાવવો એટલે આ શરતો સ્વીકારવી.'],
protected:['Protected details','સુરક્ષિત વિગતો'],protectedSub:['Shown only to agents the listing agent approves.','લિસ્ટિંગ દલાલ મંજૂરી આપે તે દલાલોને જ દેખાય.'],
ownerContact:['Owner contact','માલિકનો સંપર્ક'],exactAddr:['Exact address','ચોક્કસ સરનામું'],addrHidden:['Tower & flat no. hidden','ટાવર અને ફ્લેટ નં. છુપાયેલ'],
ownerAuth:['Owner authorization','માલિકની મંજૂરી'],authOk:['Mandate letter on file','મંજૂરી પત્ર જમા છે'],authNone:['Not uploaded','અપલોડ નથી'],
requestAccess:['Request access','ઍક્સેસ માગો'],requested:['Request sent · waiting for approval','વિનંતી મોકલી · મંજૂરીની રાહ'],
accessReqs:['2 agents asked for access','2 દલાલોએ ઍક્સેસ માગ્યો'],review:['Review','જુઓ'],
history:['Listing history','લિસ્ટિંગનો ઇતિહાસ'],share:['Share','શેર કરો'],recordVisit:['Record visit','મુલાકાત નોંધો'],
dupWarnTitle:['Under review: possible copy','તપાસ ચાલુ: સંભવિત નકલ'],
dupWarn:['5 of 7 photos match DS-SUR-24817 by Rakesh Patel, listed 4 days earlier. Contact details stay locked until review ends.','7 માંથી 5 ફોટા રાકેશ પટેલના DS-SUR-24817 સાથે મેળ ખાય છે, જે 4 દિવસ પહેલાં લિસ્ટ થયું હતું. તપાસ પૂરી થાય ત્યાં સુધી સંપર્ક વિગતો લૉક છે.'],
seeOriginal:['See original','મૂળ જુઓ'],
yourListing:['Your listing','તમારું લિસ્ટિંગ'],
shareTitle:['WhatsApp share card','WhatsApp શેર કાર્ડ'],verifiedListing:['Verified listing','ચકાસાયેલ લિસ્ટિંગ'],
showPrice:['Show price','કિંમત બતાવો'],showSociety:['Show society name','સોસાયટીનું નામ બતાવો'],showPhone:['Include my phone number','મારો ફોન નંબર ઉમેરો'],
priceOnReq:['Price on request','કિંમત માટે સંપર્ક કરો'],viaApp:['Contact via DalalSetu','દલાલસેતુ દ્વારા સંપર્ક'],
neverShared:['Owner phone and exact address are never included in share cards.','માલિકનો ફોન અને ચોક્કસ સરનામું શેર કાર્ડમાં ક્યારેય જતું નથી.'],
shareStats:['Shared 14 times · 38 link opens · 6 access requests','14 વાર શેર · 38 વાર લિંક ખૂલી · 6 ઍક્સેસ વિનંતી'],
shareWa:['Share on WhatsApp','WhatsApp પર શેર કરો'],copyLink:['Copy link','લિંક કૉપિ કરો'],
sharedToast:['Card shared. Link opens are counted against your ID.','કાર્ડ શેર થયું. લિંક ખૂલવાની ગણતરી તમારા ID પર થશે.'],copiedToast:['Link copied','લિંક કૉપિ થઈ'],
cardFooter:['Forwarded copies still point back to this listing and agent.','ફોરવર્ડ થયેલી નકલ પણ આ લિસ્ટિંગ અને દલાલ પર જ પાછી આવે છે.'],
newListing:['New listing','નવું લિસ્ટિંગ'],s1:['Basics','મૂળ વિગતો'],s2:['Photos & details','ફોટા અને વિગતો'],s3:['Protection','સુરક્ષા'],
propType:['Property type','પ્રોપર્ટીનો પ્રકાર'],txType:['Listing for','શેના માટે'],config:['Configuration','રૂપરેખા'],locality:['Locality','વિસ્તાર'],
price:['Asking price (₹)','માંગેલ કિંમત (₹)'],size:['Carpet area (sq ft)','કાર્પેટ એરિયા (ચો. ફૂટ)'],
addPhoto:['Add','ઉમેરો'],photoNote:['Photos are watermarked with your listing ID automatically.','ફોટા પર તમારું લિસ્ટિંગ ID આપમેળે વોટરમાર્ક થાય છે.'],
amenities:['Amenities','સુવિધાઓ'],desc:['Description','વર્ણન'],descPh:['Write in Gujarati or English','ગુજરાતી કે અંગ્રેજીમાં લખો'],
openCollab:['Open to collaboration','સહયોગ માટે ખુલ્લું'],openCollabSub:['Other verified agents can bring buyers on these terms.','બીજા ચકાસાયેલ દલાલો આ શરતે ખરીદનાર લાવી શકે.'],
commission:['Total commission (%)','કુલ કમિશન (%)'],split:['Your share / partner share','તમારો હિસ્સો / સાથીનો હિસ્સો'],
whoPhone:['Who can see owner phone','માલિકનો ફોન કોણ જોઈ શકે'],whoAddr:['Who can see exact address','ચોક્કસ સરનામું કોણ જોઈ શકે'],
onlyMe:['Only me','ફક્ત હું'],approved:['Approved agents','મંજૂર દલાલો'],
authCheck:["I have the owner's permission to list this property",'આ પ્રોપર્ટી લિસ્ટ કરવા માટે મારી પાસે માલિકની મંજૂરી છે'],
uploadMandate:['Upload mandate letter (optional)','મંજૂરી પત્ર અપલોડ કરો (વૈકલ્પિક)'],mandateAdded:['mandate-letter.pdf attached','mandate-letter.pdf જોડાયો'],
dupCheck:['Duplicate check: no similar listing found in this locality.','ડુપ્લિકેટ તપાસ: આ વિસ્તારમાં આવું બીજું લિસ્ટિંગ મળ્યું નથી.'],
back:['Back','પાછળ'],next:['Next','આગળ'],publish:['Publish listing','લિસ્ટિંગ પ્રકાશિત કરો'],
reqErr1:['Choose a locality and enter the price','વિસ્તાર પસંદ કરો અને કિંમત લખો'],reqErr3:['Confirm owner permission to publish','પ્રકાશિત કરવા માલિકની મંજૂરીની ખાતરી કરો'],
published:['Listing published','લિસ્ટિંગ પ્રકાશિત થયું'],
publishedSub:['Your name is now tied to this ID and time. Any later copy is compared against it.','તમારું નામ આ ID અને સમય સાથે નોંધાઈ ગયું છે. પછીની કોઈપણ નકલ આની સાથે સરખાવાશે.'],
listingId:['Listing ID','લિસ્ટિંગ ID'],createdAt:['Created','બનાવ્યું'],viewListing:['View listing','લિસ્ટિંગ જુઓ'],
visitTitle:['Record visit','મુલાકાત નોંધો'],
visitSub:['Creates a time-stamped introduction record linking you, the buyer and this property.','તમને, ખરીદનારને અને આ પ્રોપર્ટીને જોડતો સમય સાથેનો પરિચય રેકોર્ડ બને છે.'],
property:['Property','પ્રોપર્ટી'],buyerName:['Buyer name','ખરીદનારનું નામ'],buyerMobile:['Buyer mobile','ખરીદનારનો મોબાઇલ'],
visitDate:['Visit date','મુલાકાતની તારીખ'],visitTime:['Time','સમય'],coAgent:['Partner agent (optional)','સાથી દલાલ (વૈકલ્પિક)'],none:['None','કોઈ નહીં'],
sendSms:['Ask buyer to confirm by SMS','ખરીદનારને SMS દ્વારા પુષ્ટિ કરવા કહો'],
sendSmsSub:['Buyer taps a link and enters an OTP. This is the strongest proof of introduction.','ખરીદનાર લિંક ખોલી OTP નાખે. પરિચયનો આ સૌથી મજબૂત પુરાવો છે.'],
termsApply:['Commission terms from the listing apply: 2% · 50/50','લિસ્ટિંગની કમિશન શરતો લાગુ: 2% · 50/50'],
saveVisit:['Save & send confirmation','સાચવો અને પુષ્ટિ મોકલો'],visitErr:['Enter buyer name and 10-digit mobile','ખરીદનારનું નામ અને 10 અંકનો મોબાઇલ લખો'],
visitSaved:['Introduction recorded','પરિચય નોંધાયો'],
visitSavedSub:['When the buyer confirms, this record is locked. It stays valid for 180 days.','ખરીદનાર પુષ્ટિ કરે એટલે રેકોર્ડ લૉક થઈ જશે. તે 180 દિવસ માન્ય રહેશે.'],
recordId:['Record ID','રેકોર્ડ ID'],buyer:['Buyer','ખરીદનાર'],buyerConf:['Buyer confirmation','ખરીદનારની પુષ્ટિ'],waiting:['Waiting for OTP','OTPની રાહ'],
validTill:['Valid till','માન્યતા'],openDeal:['Open deal room','ડીલ રૂમ ખોલો'],done:['Done','પૂરું'],
dealsTitle:['Deals','ડીલ'],activeDeals:['Active','ચાલુ'],closedDeals:['Closed','પૂર્ણ'],dealRoom:['Deal room','ડીલ રૂમ'],
participants:['Participants','ભાગીદારો'],tActivity:['Activity','પ્રવૃત્તિ'],tTerms:['Terms','શરતો'],tPay:['Payments','ચુકવણી'],tDocs:['Documents','દસ્તાવેજ'],
confirmTitle:['Confirm token payment?','ટોકન ચુકવણીની પુષ્ટિ કરશો?'],
confirmBody:['Mehul Shah reported ₹5,00,000 token paid to the owner on 29 Oct. Receipt attached.','મેહુલ શાહે જણાવ્યું કે 29 ઑક્ટોબરે માલિકને ₹5,00,000 ટોકન ચૂકવાયું. રસીદ જોડેલી છે.'],
confirm:['Confirm','પુષ્ટિ કરો'],dispute:['Dispute','વાંધો ઉઠાવો'],
confirmedToast:['Token confirmed by both. Deal moved to Agreement.','બંનેએ ટોકનની પુષ્ટિ કરી. ડીલ કરાર તબક્કે પહોંચી.'],
dealValue:['Deal value','ડીલ કિંમત'],totalComm:['Total commission','કુલ કમિશન'],splitTitle:['Commission split','કમિશનની વહેંચણી'],ackBy:['Acknowledged','સ્વીકાર્યું'],
protectedUntil:['Introduction protected until 11 Apr 2027','પરિચય 11 એપ્રિલ 2027 સુધી સુરક્ષિત'],
proposeChange:['Propose change','ફેરફાર સૂચવો'],changeNote:['Any change needs both agents to acknowledge again.','કોઈપણ ફેરફાર માટે બંને દલાલોની ફરી સ્વીકૃતિ જોઈએ.'],
milestones:['Commission milestones','કમિશનના તબક્કા'],upload:['Upload document','દસ્તાવેજ અપલોડ કરો'],reportIssue:['Report an issue on this deal','આ ડીલ વિશે ફરિયાદ કરો'],
toReceive:['To receive','મેળવવાના'],toPay:['To pay','ચૂકવવાના'],overdue:['Overdue','મુદત વીતી'],
pDue:['Due','બાકી'],pPaid:['Paid','ચૂકવાયું'],pDisputed:['Disputed','વિવાદ'],
remind:['Send reminder','યાદ અપાવો'],remindToast:['Reminder sent to Mehul Shah on WhatsApp','મેહુલ શાહને WhatsApp પર યાદ અપાવ્યું'],
recordPay:['Record payment','ચુકવણી નોંધો'],
ledgerNote:['Reported means one side entered it. Confirmed means both sides agreed.','નોંધાયેલ એટલે એક પક્ષે લખ્યું. પુષ્ટિ એટલે બંને પક્ષ સહમત.'],
download:['Download ledger (PDF)','ખાતાવહી ડાઉનલોડ (PDF)'],downloadedToast:['Ledger downloaded','ખાતાવહી ડાઉનલોડ થઈ'],
received:['I received','મને મળ્યા'],paid:['I paid','મેં ચૂકવ્યા'],party:['Party','પક્ષ'],deal:['Deal','ડીલ'],amount:['Amount (₹)','રકમ (₹)'],method:['Method','પદ્ધતિ'],
cash:['Cash','રોકડ'],bank:['Bank','બેંક'],cheque:['Cheque','ચેક'],refNo:['UTR / reference no.','UTR / સંદર્ભ નંબર'],
receipt:['Attach receipt photo','રસીદનો ફોટો જોડો'],receiptAdded:['receipt.jpg attached','receipt.jpg જોડાયું'],
payNote:['The other party will be asked to confirm. Until then it shows as Reported.','સામેના પક્ષને પુષ્ટિ માટે પૂછાશે. ત્યાં સુધી તે નોંધાયેલ દેખાશે.'],
savePay:['Save payment','ચુકવણી સાચવો'],payErr:['Enter the amount','રકમ લખો'],paySaved:['Payment recorded and sent for confirmation','ચુકવણી નોંધાઈ અને પુષ્ટિ માટે મોકલી'],
repTitle:['Reports & disputes','ફરિયાદો અને વિવાદ'],newReport:['New report','નવી ફરિયાદ'],
repIntro:['Every report is checked against platform records. A report alone is not treated as proof.','દરેક ફરિયાદ પ્લેટફોર્મના રેકોર્ડ સાથે તપાસાય છે. ફક્ત ફરિયાદને પુરાવો માનવામાં આવતો નથી.'],
whatHappened:['What happened?','શું થયું?'],
rtCopy:['Listing copied','લિસ્ટિંગની નકલ'],rtCopySub:['Someone reposted your property','કોઈએ તમારી પ્રોપર્ટી ફરી પોસ્ટ કરી'],
rtBypass:['Client went direct','ગ્રાહકે સીધો સોદો કર્યો'],rtBypassSub:['Your buyer or seller skipped you','તમારા ગ્રાહકે તમને બાજુ પર મૂક્યા'],
rtPay:['Payment issue','ચુકવણીમાં વાંધો'],rtPaySub:['Unpaid, short or false payment','બાકી, ઓછી કે ખોટી ચુકવણી'],
rtFake:['Fake profile','નકલી પ્રોફાઇલ'],rtFakeSub:['Someone using your name','કોઈ તમારું નામ વાપરે છે'],
related:['Related record','સંબંધિત રેકોર્ડ'],details:['Describe briefly','ટૂંકમાં જણાવો'],detailsPh:['What happened and when','શું થયું અને ક્યારે'],
evidence:['Evidence attached automatically','આપમેળે જોડાતા પુરાવા'],addFiles:['Add screenshots or files','સ્ક્રીનશૉટ કે ફાઇલ ઉમેરો'],
submit:['Submit report','ફરિયાદ મોકલો'],pickType:['Choose what happened','શું થયું તે પસંદ કરો'],
repDone:['Report submitted','ફરિયાદ મોકલાઈ'],
repDoneSub:['The other party has 7 days to respond. A moderator then decides based on the records.','સામેના પક્ષને જવાબ આપવા 7 દિવસ મળશે. પછી મોડરેટર રેકોર્ડના આધારે નિર્ણય લેશે.'],
nextSteps:['What happens next','હવે શું થશે'],ns1:['Other party is notified','સામેના પક્ષને જાણ થાય'],ns2:['7 days to respond with their records','પોતાના રેકોર્ડ સાથે જવાબ માટે 7 દિવસ'],ns3:['Moderator reviews both sides','મોડરેટર બંને પક્ષ તપાસે'],ns4:['Decision, with 14 days to appeal','નિર્ણય, અપીલ માટે 14 દિવસ'],
viewReports:['View my reports','મારી ફરિયાદો જુઓ'],
verification:['Verification','ચકાસણી'],vMobile:['Mobile number','મોબાઇલ નંબર'],vId:['Identity (Aadhaar)','ઓળખ (આધાર)'],vRera:['GujRERA agent registration','GujRERA એજન્ટ નોંધણી'],vAgency:['Office address','ઓફિસનું સરનામું'],
vDone:['Verified','ચકાસાયેલ'],vPending:['Pending','બાકી'],
trust:['Track record','કામગીરી'],tr1:['deals recorded','ડીલ નોંધાઈ'],tr2:['commission paid on time','કમિશન સમયસર'],tr3:['upheld reports','સાચી ઠરેલી ફરિયાદ'],
language:['Language','ભાષા'],menuNotifs:['Notifications','સૂચનાઓ'],menuHistory:['Transaction history','વ્યવહારનો ઇતિહાસ'],menuPrivacy:['Privacy & data','ગોપનીયતા અને ડેટા'],logout:['Log out','લૉગ આઉટ'],
agency:['Patel Realty · Vesu, Surat','પટેલ રિયલ્ટી · વેસુ, સુરત'],
notifTitle:['Notifications','સૂચનાઓ'],
protoOnly:['Prototype: D-1187 is the built-out deal','પ્રોટોટાઇપ: D-1187 ડીલ તૈયાર છે'],
accessToast:['Access request sent to the listing agent','લિસ્ટિંગ દલાલને ઍક્સેસ વિનંતી મોકલી'],
privacyToast:['Privacy settings open in the full app','ગોપનીયતા સેટિંગ્સ પૂરી એપમાં ખૂલશે'],
};
const agents={rp:{n:g('Rakesh Patel','રાકેશ પટેલ'),i:'RP',v:true,id:'DS-AG-1042',ag:g('Patel Realty','પટેલ રિયલ્ટી'),deals:38},ms:{n:g('Mehul Shah','મેહુલ શાહ'),i:'MS',v:true,id:'DS-AG-1107',ag:g('Shah Properties','શાહ પ્રોપર્ટીઝ'),deals:51},hd:{n:g('Hiral Desai','હિરલ દેસાઈ'),i:'HD',v:true,id:'DS-AG-1188',ag:g('Desai Estates','દેસાઈ એસ્ટેટ્સ'),deals:22},jm:{n:g('Jignesh Modi','જિજ્ઞેશ મોદી'),i:'JM',v:true,id:'DS-AG-1015',ag:g('Modi Land Consultants','મોદી લેન્ડ કન્સલ્ટન્ટ્સ'),deals:64},kr:{n:g('Kalpesh Rana','કલ્પેશ રાણા'),i:'KR',v:false,id:'DS-AG-2290',ag:g('Not provided','આપેલ નથી'),deals:0}};
const L=(id,kind,tx,title,soc,loc,price,size,extra,agent,photos,upd,st,listed,comm,dup)=>({id,kind,tx,title,soc,loc,price,size,extra,agent,photos,upd,st,listed,comm,dup:!!dup,auth:agent!=='kr'});
const listings=[
L('24822','res','sale',g('3 BHK Flat','3 BHK ફ્લેટ'),g('Sanskruti Heights','સંસ્કૃતિ હાઇટ્સ'),g('Vesu','વેસુ'),g('₹1.09 Cr','₹1.09 કરોડ'),g('1,850 sq ft','1,850 ચો. ફૂટ'),g('8th floor · East facing','8મો માળ · પૂર્વ તરફ'),'kr',7,g('Updated 4 hours ago','4 કલાક પહેલાં અપડેટ'),'review','16 Oct 2026, 21:15',g('Not specified','સ્પષ્ટ નથી'),true),
L('24817','res','sale',g('3 BHK Flat','3 BHK ફ્લેટ'),g('Sanskruti Heights','સંસ્કૃતિ હાઇટ્સ'),g('Vesu','વેસુ'),g('₹1.15 Cr','₹1.15 કરોડ'),g('1,850 sq ft','1,850 ચો. ફૂટ'),g('8th floor · East facing','8મો માળ · પૂર્વ તરફ'),'rp',7,g('Updated 1 day ago','1 દિવસ પહેલાં અપડેટ'),'avail','12 Oct 2026, 10:42',g('2% total · 50/50 with partner agent','કુલ 2% · સાથી દલાલ સાથે 50/50')),
L('24790','res','sale',g('2 BHK Flat','2 BHK ફ્લેટ'),g('Riverview Residency','રિવરવ્યૂ રેસિડેન્સી'),g('Pal','પાલ'),g('₹62 L','₹62 લાખ'),g('1,180 sq ft','1,180 ચો. ફૂટ'),g('5th floor · Garden facing','5મો માળ · ગાર્ડન તરફ'),'ms',9,g('Updated 2 days ago','2 દિવસ પહેલાં અપડેટ'),'neg','3 Oct 2026, 12:10',g('1.5% total · 60/40 listing / partner','કુલ 1.5% · 60/40 લિસ્ટિંગ / સાથી')),
L('24755','com','rent',g('Shop in textile market','ટેક્સટાઇલ માર્કેટમાં દુકાન'),g('Millennium Textile Market','મિલેનિયમ ટેક્સટાઇલ માર્કેટ'),g('Ring Road','રીંગ રોડ'),g('₹85,000/mo','₹85,000/મહિને'),g('640 sq ft','640 ચો. ફૂટ'),g('Ground floor · Road facing','ભોંયતળિયું · રોડ તરફ'),'hd',5,g('Updated 3 days ago','3 દિવસ પહેલાં અપડેટ'),'avail','28 Sep 2026, 16:30',g('One month rent · 50/50','એક મહિનાનું ભાડું · 50/50')),
L('24731','land','sale',g('Residential plot','રહેણાંક પ્લોટ'),g('Near Dumas Lake Garden','ડુમસ લેક ગાર્ડન પાસે'),g('Dumas Road','ડુમસ રોડ'),g('₹2.4 Cr','₹2.4 કરોડ'),g('450 sq yd','450 ચો. વાર'),g('NA plot · Clear title','NA પ્લોટ · ક્લિયર ટાઇટલ'),'jm',4,g('Updated 6 days ago','6 દિવસ પહેલાં અપડેટ'),'hold','21 Sep 2026, 11:05',g('1% total · 50/50','કુલ 1% · 50/50')),
L('24702','res','sale',g('4 BHK Bungalow','4 BHK બંગલો'),g('Shivalik Bungalows','શિવાલિક બંગલોઝ'),g('Piplod','પીપલોદ'),g('₹3.1 Cr','₹3.1 કરોડ'),g('3,400 sq ft','3,400 ચો. ફૂટ'),g('Corner plot · Private garden','કોર્નર પ્લોટ · ખાનગી બગીચો'),'rp',12,g('Updated 5 days ago','5 દિવસ પહેલાં અપડેટ'),'avail','18 Sep 2026, 09:20',g('2% total · 50/50','કુલ 2% · 50/50')),
L('24688','res','rent',g('1 BHK Flat','1 BHK ફ્લેટ'),g('Star Galaxy','સ્ટાર ગેલેક્સી'),g('Adajan','અડાજણ'),g('₹14,000/mo','₹14,000/મહિને'),g('620 sq ft','620 ચો. ફૂટ'),g('Semi-furnished · 3rd floor','સેમી-ફર્નિશ્ડ · 3જો માળ'),'ms',6,g('Updated 1 week ago','1 અઠવાડિયા પહેલાં અપડેટ'),'avail','10 Sep 2026, 18:45',g('Half month rent · 50/50','અડધા મહિનાનું ભાડું · 50/50')),
];
const st={avail:{l:g('Available','ઉપલબ્ધ'),tone:'ok'},neg:{l:g('Under negotiation','વાટાઘાટ ચાલુ'),tone:'warn'},hold:{l:g('On hold','હોલ્ડ પર'),tone:'neutral'},review:{l:g('Under review','તપાસ હેઠળ'),tone:'err'}};
const tx={sale:g('For sale','વેચાણ માટે'),rent:g('For rent','ભાડે'),lease:g('For lease','લીઝ પર')};
const h24817=[
{time:'28 Oct',icon:'Share',text:g('Shared 14 times · 38 link opens','14 વાર શેર · 38 વાર લિંક ખૂલી')},
{time:'22 Oct, 15:02',icon:'Unlock',text:g('Protected details shared with Mehul Shah','મેહુલ શાહ સાથે સુરક્ષિત વિગતો શેર કરી')},
{time:'20 Oct, 11:30',icon:'Edit',text:g('Price changed ₹1.20 Cr → ₹1.15 Cr','કિંમત બદલી ₹1.20 કરોડ → ₹1.15 કરોડ')},
{time:'12 Oct, 10:58',icon:'FileAdd',text:g('Owner mandate letter uploaded','માલિકનો મંજૂરી પત્ર અપલોડ કર્યો')},
{time:'12 Oct, 10:42',icon:'PlusCircle',text:g('Created by Rakesh Patel','રાકેશ પટેલે બનાવ્યું')}];
const alerts=[
{k:'copy',icon:'Copy',tone:'err',title:g('Possible copy of your listing','તમારા લિસ્ટિંગની સંભવિત નકલ'),desc:g('DS-SUR-24822 in Vesu matches 5 of your 7 photos.','વેસુમાં DS-SUR-24822 તમારા 7 માંથી 5 ફોટા સાથે મેળ ખાય છે.')},
{k:'overdue',icon:'BanknoteOutline',tone:'warn',title:g('Commission overdue · 6 days','કમિશન મુદત વીતી · 6 દિવસ'),desc:g('₹1,20,000 from Mehul Shah · Adajan 3 BHK','મેહુલ શાહ પાસેથી ₹1,20,000 · અડાજણ 3 BHK')},
{k:'token',icon:'CheckCircle',tone:'info',title:g('Confirm token payment','ટોકન ચુકવણીની પુષ્ટિ કરો'),desc:g('Mehul Shah reported ₹5,00,000 · Vesu 3 BHK','મેહુલ શાહે ₹5,00,000 નોંધ્યા · વેસુ 3 BHK')}];
const recent=[
{time:'11:20',text:g('Mehul Shah reported the token on D-1187','મેહુલ શાહે D-1187 પર ટોકન નોંધ્યું')},
{time:g('Yesterday','ગઈકાલે'),text:g('Buyer Priya Kapadia confirmed the Pal visit by OTP','ખરીદનાર પ્રિયા કાપડિયાએ OTPથી પાલની મુલાકાતની પુષ્ટિ કરી')},
{time:'27 Oct',text:g('Your card for DS-SUR-24817 was opened 9 times','DS-SUR-24817 નું તમારું કાર્ડ 9 વાર ખૂલ્યું')}];
const stages=[g('Introduced','પરિચય'),g('Visit','મુલાકાત'),g('Negotiation','વાટાઘાટ'),g('Token','ટોકન'),g('Agreement','કરાર'),g('Closed','પૂર્ણ')];
const people=[
{i:'RP',n:g('Rakesh Patel','રાકેશ પટેલ'),role:g('Listing agent · You','લિસ્ટિંગ દલાલ · તમે')},
{i:'MS',n:g('Mehul Shah','મેહુલ શાહ'),role:g("Buyer's agent",'ખરીદનારના દલાલ')},
{i:'NJ',n:g('Nirav Joshi','નીરવ જોશી'),role:g('Buyer · +91 98••• ••412','ખરીદનાર · +91 98••• ••412')},
{i:'SM',n:g('Sunil Mehta','સુનીલ મહેતા'),role:g('Owner · contact hidden from partner','માલિક · સાથીથી સંપર્ક છુપાયેલ')}];
const tags={reported:{l:g('Reported','નોંધાયેલ'),tone:'warn'},confirmed:{l:g('Confirmed by both','બંનેએ પુષ્ટિ કરી'),tone:'ok'},otp:{l:g('Buyer confirmed by OTP','ખરીદનારે OTPથી પુષ્ટિ કરી'),tone:'ok'},ack:{l:g('Both acknowledged','બંનેએ સ્વીકાર્યું'),tone:'ok'},logged:{l:g('Logged','નોંધ્યું'),tone:'neutral'}};
const activity=[
{time:'29 Oct, 11:20',icon:'BanknoteOutline',text:g('Token ₹5,00,000 paid to owner','માલિકને ₹5,00,000 ટોકન ચૂકવાયું'),by:g('Reported by Mehul Shah · receipt attached','મેહુલ શાહે નોંધ્યું · રસીદ જોડેલી'),tag:'TOKEN'},
{time:'24 Oct, 17:05',icon:'ThumbUpOutline',text:g('Owner accepted offer of ₹1.10 Cr','માલિકે ₹1.10 કરોડની ઓફર સ્વીકારી'),by:g('Logged by Rakesh Patel','રાકેશ પટેલે નોંધ્યું'),tag:'logged'},
{time:'18 Oct, 16:30',icon:'MarkerPin',text:g('Second site visit','બીજી સ્થળ મુલાકાત'),by:g('Recorded by Mehul Shah','મેહુલ શાહે નોંધ્યું'),tag:'otp'},
{time:'14 Oct, 11:00',icon:'MarkerPin',text:g('First site visit','પ્રથમ સ્થળ મુલાકાત'),by:g('Recorded by Mehul Shah','મેહુલ શાહે નોંધ્યું'),tag:'otp'},
{time:'13 Oct, 18:11',icon:'Percent',text:g('Commission terms agreed: 2% · 50/50','કમિશન શરતો નક્કી: 2% · 50/50'),by:g('Rakesh Patel & Mehul Shah','રાકેશ પટેલ અને મેહુલ શાહ'),tag:'ack'},
{time:'13 Oct, 17:48',icon:'UserOutline',text:g('Buyer Nirav Joshi introduced · IN-5498','ખરીદનાર નીરવ જોશીનો પરિચય · IN-5498'),by:g('Recorded by Mehul Shah','મેહુલ શાહે નોંધ્યું'),tag:'otp'}];
const split=[
{i:'RP',n:g('Rakesh Patel','રાકેશ પટેલ'),pct:'50%',amt:'₹1,10,000',ack:'13 Oct, 18:04'},
{i:'MS',n:g('Mehul Shah','મેહુલ શાહ'),pct:'50%',amt:'₹1,10,000',ack:'13 Oct, 18:11'}];
const miles=[
{title:g('On token · from owner','ટોકન વખતે · માલિક તરફથી'),amt:'₹1,10,000',due:g('Due 31 Oct','મુદત 31 ઑક્ટો'),st:g('Due in 2 days','2 દિવસમાં બાકી'),tone:'warn'},
{title:g('On registry · from owner','દસ્તાવેજ વખતે · માલિક તરફથી'),amt:'₹1,10,000',due:g('Due 30 Nov','મુદત 30 નવે'),st:g('Upcoming','આવનારું'),tone:'neutral'},
{title:g('Your payout to Mehul Shah','મેહુલ શાહને તમારી ચુકવણી'),amt:'₹1,10,000',due:g('Within 7 days of each receipt','દરેક રકમ મળ્યાના 7 દિવસમાં'),st:g('Upcoming','આવનારું'),tone:'neutral'}];
const docs=[
{n:'Introduction IN-5498.pdf',s:g('Auto-generated · 13 Oct','આપમેળે બનેલું · 13 ઑક્ટો'),icon:'FilePdf'},
{n:'Commission terms D-1187.pdf',s:g('Acknowledged by both · 13 Oct','બંનેએ સ્વીકાર્યું · 13 ઑક્ટો'),icon:'FilePdf'},
{n:'Visit confirmations (2).pdf',s:g('Buyer OTP records · 14 & 18 Oct','ખરીદનારના OTP રેકોર્ડ · 14 અને 18 ઑક્ટો'),icon:'FilePdf'},
{n:'Token receipt.jpg',s:g('Uploaded by Mehul Shah · 29 Oct','મેહુલ શાહે અપલોડ કર્યું · 29 ઑક્ટો'),icon:'FileImage'}];
const deals={active:[{id:'D-1187',title:g('3 BHK Flat · Vesu','3 BHK ફ્લેટ · વેસુ'),with:g('with Mehul Shah · buyer Nirav Joshi','મેહુલ શાહ સાથે · ખરીદનાર નીરવ જોશી'),amt:g('₹1.10 Cr','₹1.10 કરોડ'),main:true},{id:'D-1192',title:g('2 BHK Flat · Pal','2 BHK ફ્લેટ · પાલ'),with:g('buyer Priya Kapadia','ખરીદનાર પ્રિયા કાપડિયા'),amt:g('₹62 L','₹62 લાખ'),stage:g('Visit','મુલાકાત')}],
closed:[{id:'D-1162',title:g('3 BHK Flat · Adajan','3 BHK ફ્લેટ · અડાજણ'),st:g('Commission overdue','કમિશન બાકી'),tone:'err'},{id:'D-1140',title:g('Shop · Ring Road','દુકાન · રીંગ રોડ'),st:g('Settled','પતી ગયું'),tone:'ok'},{id:'D-1121',title:g('Plot · Dumas Road','પ્લોટ · ડુમસ રોડ'),st:g('Disputed','વિવાદ'),tone:'warn'}]};
const pays=[
{id:'P-3301',dir:'in',party:g('Mehul Shah','મેહુલ શાહ'),deal:g('D-1162 · Adajan 3 BHK','D-1162 · અડાજણ 3 BHK'),amt:'₹1,20,000',when:g('Was due 23 Oct','મુદત 23 ઑક્ટો હતી'),st:g('Overdue · 6 days','મુદત વીતી · 6 દિવસ'),tone:'err',cat:'overdue',remind:true},
{id:'P-3310',dir:'in',party:g('Sunil Mehta (owner)','સુનીલ મહેતા (માલિક)'),deal:g('D-1187 · Vesu 3 BHK','D-1187 · વેસુ 3 BHK'),amt:'₹1,10,000',when:g('Due 31 Oct','મુદત 31 ઑક્ટો'),st:g('Due in 2 days','2 દિવસમાં બાકી'),tone:'warn',cat:'due'},
{id:'P-3311',dir:'out',party:g('Mehul Shah','મેહુલ શાહ'),deal:g('D-1187 · Vesu 3 BHK','D-1187 · વેસુ 3 BHK'),amt:'₹1,10,000',when:g('Due 7 Nov','મુદત 7 નવે'),st:g('Upcoming','આવનારું'),tone:'neutral',cat:'due'},
{id:'P-3288',dir:'in',party:g('Jignesh Modi','જિજ્ઞેશ મોદી'),deal:g('D-1121 · Dumas Road plot','D-1121 · ડુમસ રોડ પ્લોટ'),amt:'₹40,000',when:g('He reports cash paid on 9 Oct. You have not confirmed.','તેમના મુજબ 9 ઑક્ટોએ રોકડ ચૂકવ્યા. તમે પુષ્ટિ કરી નથી.'),st:g('Disputed · RP-208','વિવાદ · RP-208'),tone:'warn',cat:'disputed'},
{id:'P-3264',dir:'in',party:g('Hiral Desai','હિરલ દેસાઈ'),deal:g('D-1140 · Ring Road shop','D-1140 · રીંગ રોડ દુકાન'),amt:'₹42,500',when:g('2 Oct · UPI · UTR 4471 0938 2215','2 ઑક્ટો · UPI · UTR 4471 0938 2215'),st:g('Confirmed by both','બંનેએ પુષ્ટિ કરી'),tone:'ok',cat:'paid'}];
const reports=[
{id:'RP-221',icon:'Copy',title:g('Listing copied','લિસ્ટિંગની નકલ'),desc:g('DS-SUR-24822 by Kalpesh Rana matches 5 of 7 photos of DS-SUR-24817','કલ્પેશ રાણાનું DS-SUR-24822, DS-SUR-24817 ના 7 માંથી 5 ફોટા સાથે મેળ ખાય છે'),st:g('Under review','તપાસ ચાલુ'),tone:'info',date:'26 Oct'},
{id:'RP-208',icon:'BanknoteOutline',title:g('Payment issue','ચુકવણીમાં વાંધો'),desc:g('Jignesh Modi · ₹40,000 · D-1121','જિજ્ઞેશ મોદી · ₹40,000 · D-1121'),st:g('Awaiting response · 4 days left','જવાબની રાહ · 4 દિવસ બાકી'),tone:'warn',date:'21 Oct'},
{id:'RP-190',icon:'UserOutline',title:g('Fake profile','નકલી પ્રોફાઇલ'),desc:g('A profile was using the name Patel Realty','એક પ્રોફાઇલ પટેલ રિયલ્ટી નામ વાપરતી હતી'),st:g('Resolved · profile removed','ઉકેલાયું · પ્રોફાઇલ દૂર'),tone:'ok',date:'2 Sep'}];
const rtypes={
copy:{icon:'Copy',rel:[g('DS-SUR-24822 · Kalpesh Rana','DS-SUR-24822 · કલ્પેશ રાણા'),g('Another listing ID or link','બીજું લિસ્ટિંગ ID કે લિંક')],ev:[g('Your listing history from 12 Oct','12 ઑક્ટોથી તમારા લિસ્ટિંગનો ઇતિહાસ'),g('Photo match result: 5 of 7','ફોટો મેળ: 7 માંથી 5'),g('Share log: 14 shares, 38 opens','શેર લોગ: 14 શેર, 38 વાર ખૂલ્યું')]},
bypass:{icon:'UsersOutline',rel:[g('IN-5498 · Nirav Joshi · Vesu','IN-5498 · નીરવ જોશી · વેસુ'),g('D-1162 · Adajan 3 BHK','D-1162 · અડાજણ 3 BHK')],ev:[g('Introduction record with buyer OTP','ખરીદનારના OTP સાથેનો પરિચય રેકોર્ડ'),g('2 visit confirmations','2 મુલાકાતની પુષ્ટિ'),g('Acknowledged commission terms','સ્વીકારેલી કમિશન શરતો')]},
pay:{icon:'BanknoteOutline',rel:[g('P-3301 · Mehul Shah · ₹1,20,000','P-3301 · મેહુલ શાહ · ₹1,20,000'),g('P-3310 · D-1187 token','P-3310 · D-1187 ટોકન')],ev:[g('Acknowledged commission terms','સ્વીકારેલી કમિશન શરતો'),g('Ledger entries for this deal','આ ડીલની ખાતાવહી'),g('Uploaded receipts','અપલોડ કરેલી રસીદો')]},
fake:{icon:'UserOutline',rel:[g('Kalpesh Rana · DS-AG-2290','કલ્પેશ રાણા · DS-AG-2290'),g('Someone outside DalalSetu','દલાલસેતુની બહારની વ્યક્તિ')],ev:[g('Your verified identity and GujRERA record','તમારી ચકાસાયેલ ઓળખ અને GujRERA રેકોર્ડ'),g('Profile creation dates','પ્રોફાઇલ બન્યાની તારીખો')]}};
const notifs=[
{icon:'CheckCircle',text:g('Mehul Shah reported the token on D-1187. Confirm or dispute.','મેહુલ શાહે D-1187 પર ટોકન નોંધ્યું. પુષ્ટિ કરો કે વાંધો ઉઠાવો.'),time:'11:20',unread:true,go:'deal'},
{icon:'Copy',text:g('Possible copy of DS-SUR-24817 found in Vesu','વેસુમાં DS-SUR-24817 ની સંભવિત નકલ મળી'),time:'09:05',unread:true,go:'dup'},
{icon:'Unlock',text:g('Hiral Desai asked for access to DS-SUR-24702','હિરલ દેસાઈએ DS-SUR-24702 માટે ઍક્સેસ માગ્યો'),time:g('Yesterday','ગઈકાલે'),go:'mine'},
{icon:'BanknoteOutline',text:g('Reminder: ₹1,20,000 from Mehul Shah is overdue','યાદ: મેહુલ શાહ પાસેથી ₹1,20,000 બાકી છે'),time:g('Yesterday','ગઈકાલે'),go:'pay'},
{icon:'CalendarDate',text:g('Visit tomorrow 11:00 · Pal 2 BHK with Priya Kapadia','આવતીકાલે 11:00 મુલાકાત · પાલ 2 BHK, પ્રિયા કાપડિયા સાથે'),time:'27 Oct'}];
const locs=[['Vesu','વેસુ'],['Pal','પાલ'],['Adajan','અડાજણ'],['Piplod','પીપલોદ'],['Citylight','સિટીલાઇટ'],['Althan','અલથાણ'],['VIP Road','વીઆઇપી રોડ'],['Dumas Road','ડુમસ રોડ'],['Ring Road','રીંગ રોડ'],['Varachha','વરાછા'],['Katargam','કતારગામ'],['Sarthana','સરથાણા']];
const amen=[['Lift','લિફ્ટ'],['Parking','પાર્કિંગ'],['Security','સિક્યોરિટી'],['Power backup','પાવર બેકઅપ'],['Garden','બગીચો'],['Gym','જીમ']];
const verif=[{k:'vMobile',ok:true,sub:'+91 98250 41042'},{k:'vId',ok:true,sub:'•••• •••• 4417'},{k:'vRera',ok:true,sub:'Reg. on file · 2024'},{k:'vAgency',ok:false,sub:g('Upload a utility bill or rent agreement','લાઇટ બિલ કે ભાડા કરાર અપલોડ કરો')}];
window.DSD={g,T,agents,listings,st,tx,h24817,alerts,recent,stages,people,tags,activity,split,miles,docs,deals,pays,reports,rtypes,notifs,locs,amen,verif};
})();
