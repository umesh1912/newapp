// Sample Surat data, ported from the Claude Design prototype (project/dalal-data.js).
// The app runs entirely on this mock data; there is no backend yet.
import type { ActivityTag, Agent, AgentKey, Bi, Listing, ListingStatus, Payment, PropKind, Report, ReportType, Tone, TxKind } from './types';
import type { IconName } from '../components/glyphs';

const g = (en: string, gu: string): Bi => ({ en, gu });

export const agents: Record<AgentKey, Agent> = {rp:{n:g('Rakesh Patel','રાકેશ પટેલ'),i:'RP',v:true,id:'DS-AG-1042',ag:g('Patel Realty','પટેલ રિયલ્ટી'),deals:38},ms:{n:g('Mehul Shah','મેહુલ શાહ'),i:'MS',v:true,id:'DS-AG-1107',ag:g('Shah Properties','શાહ પ્રોપર્ટીઝ'),deals:51},hd:{n:g('Hiral Desai','હિરલ દેસાઈ'),i:'HD',v:true,id:'DS-AG-1188',ag:g('Desai Estates','દેસાઈ એસ્ટેટ્સ'),deals:22},jm:{n:g('Jignesh Modi','જિજ્ઞેશ મોદી'),i:'JM',v:true,id:'DS-AG-1015',ag:g('Modi Land Consultants','મોદી લેન્ડ કન્સલ્ટન્ટ્સ'),deals:64},kr:{n:g('Kalpesh Rana','કલ્પેશ રાણા'),i:'KR',v:false,id:'DS-AG-2290',ag:g('Not provided','આપેલ નથી'),deals:0}};
const L = (id: string, kind: PropKind, tx: TxKind, title: Bi, soc: Bi, loc: Bi, price: Bi, size: Bi, extra: Bi, agent: AgentKey, photos: number, upd: Bi, st: ListingStatus, listed: string, comm: Bi, dup?: boolean): Listing =>({id,kind,tx,title,soc,loc,price,size,extra,agent,photos,upd,st,listed,comm,dup:!!dup,auth:agent!=='kr'});
export const listings: Listing[] = [
L('24822','res','sale',g('3 BHK Flat','3 BHK ફ્લેટ'),g('Sanskruti Heights','સંસ્કૃતિ હાઇટ્સ'),g('Vesu','વેસુ'),g('₹1.09 Cr','₹1.09 કરોડ'),g('1,850 sq ft','1,850 ચો. ફૂટ'),g('8th floor · East facing','8મો માળ · પૂર્વ તરફ'),'kr',7,g('Updated 4 hours ago','4 કલાક પહેલાં અપડેટ'),'review','16 Oct 2026, 21:15',g('Not specified','સ્પષ્ટ નથી'),true),
L('24817','res','sale',g('3 BHK Flat','3 BHK ફ્લેટ'),g('Sanskruti Heights','સંસ્કૃતિ હાઇટ્સ'),g('Vesu','વેસુ'),g('₹1.15 Cr','₹1.15 કરોડ'),g('1,850 sq ft','1,850 ચો. ફૂટ'),g('8th floor · East facing','8મો માળ · પૂર્વ તરફ'),'rp',7,g('Updated 1 day ago','1 દિવસ પહેલાં અપડેટ'),'avail','12 Oct 2026, 10:42',g('2% total · 50/50 with partner agent','કુલ 2% · સાથી દલાલ સાથે 50/50')),
L('24790','res','sale',g('2 BHK Flat','2 BHK ફ્લેટ'),g('Riverview Residency','રિવરવ્યૂ રેસિડેન્સી'),g('Pal','પાલ'),g('₹62 L','₹62 લાખ'),g('1,180 sq ft','1,180 ચો. ફૂટ'),g('5th floor · Garden facing','5મો માળ · ગાર્ડન તરફ'),'ms',9,g('Updated 2 days ago','2 દિવસ પહેલાં અપડેટ'),'neg','3 Oct 2026, 12:10',g('1.5% total · 60/40 listing / partner','કુલ 1.5% · 60/40 લિસ્ટિંગ / સાથી')),
L('24755','com','rent',g('Shop in textile market','ટેક્સટાઇલ માર્કેટમાં દુકાન'),g('Millennium Textile Market','મિલેનિયમ ટેક્સટાઇલ માર્કેટ'),g('Ring Road','રીંગ રોડ'),g('₹85,000/mo','₹85,000/મહિને'),g('640 sq ft','640 ચો. ફૂટ'),g('Ground floor · Road facing','ભોંયતળિયું · રોડ તરફ'),'hd',5,g('Updated 3 days ago','3 દિવસ પહેલાં અપડેટ'),'avail','28 Sep 2026, 16:30',g('One month rent · 50/50','એક મહિનાનું ભાડું · 50/50')),
L('24731','land','sale',g('Residential plot','રહેણાંક પ્લોટ'),g('Near Dumas Lake Garden','ડુમસ લેક ગાર્ડન પાસે'),g('Dumas Road','ડુમસ રોડ'),g('₹2.4 Cr','₹2.4 કરોડ'),g('450 sq yd','450 ચો. વાર'),g('NA plot · Clear title','NA પ્લોટ · ક્લિયર ટાઇટલ'),'jm',4,g('Updated 6 days ago','6 દિવસ પહેલાં અપડેટ'),'hold','21 Sep 2026, 11:05',g('1% total · 50/50','કુલ 1% · 50/50')),
L('24702','res','sale',g('4 BHK Bungalow','4 BHK બંગલો'),g('Shivalik Bungalows','શિવાલિક બંગલોઝ'),g('Piplod','પીપલોદ'),g('₹3.1 Cr','₹3.1 કરોડ'),g('3,400 sq ft','3,400 ચો. ફૂટ'),g('Corner plot · Private garden','કોર્નર પ્લોટ · ખાનગી બગીચો'),'rp',12,g('Updated 5 days ago','5 દિવસ પહેલાં અપડેટ'),'avail','18 Sep 2026, 09:20',g('2% total · 50/50','કુલ 2% · 50/50')),
L('24688','res','rent',g('1 BHK Flat','1 BHK ફ્લેટ'),g('Star Galaxy','સ્ટાર ગેલેક્સી'),g('Adajan','અડાજણ'),g('₹14,000/mo','₹14,000/મહિને'),g('620 sq ft','620 ચો. ફૂટ'),g('Semi-furnished · 3rd floor','સેમી-ફર્નિશ્ડ · 3જો માળ'),'ms',6,g('Updated 1 week ago','1 અઠવાડિયા પહેલાં અપડેટ'),'avail','10 Sep 2026, 18:45',g('Half month rent · 50/50','અડધા મહિનાનું ભાડું · 50/50')),
];
export const statuses: Record<ListingStatus, { l: Bi; tone: Tone }> = {avail:{l:g('Available','ઉપલબ્ધ'),tone:'ok'},neg:{l:g('Under negotiation','વાટાઘાટ ચાલુ'),tone:'warn'},hold:{l:g('On hold','હોલ્ડ પર'),tone:'neutral'},review:{l:g('Under review','તપાસ હેઠળ'),tone:'err'}};
export const txLabels: Record<TxKind, Bi> = {sale:g('For sale','વેચાણ માટે'),rent:g('For rent','ભાડે'),lease:g('For lease','લીઝ પર')};
export const history24817: { time: string; icon: IconName; text: Bi }[] = [
{time:'28 Oct',icon:'Share',text:g('Shared 14 times · 38 link opens','14 વાર શેર · 38 વાર લિંક ખૂલી')},
{time:'22 Oct, 15:02',icon:'Unlock',text:g('Protected details shared with Mehul Shah','મેહુલ શાહ સાથે સુરક્ષિત વિગતો શેર કરી')},
{time:'20 Oct, 11:30',icon:'Edit',text:g('Price changed ₹1.20 Cr → ₹1.15 Cr','કિંમત બદલી ₹1.20 કરોડ → ₹1.15 કરોડ')},
{time:'12 Oct, 10:58',icon:'FileAdd',text:g('Owner mandate letter uploaded','માલિકનો મંજૂરી પત્ર અપલોડ કર્યો')},
{time:'12 Oct, 10:42',icon:'PlusCircle',text:g('Created by Rakesh Patel','રાકેશ પટેલે બનાવ્યું')}];
export const alerts: { k: 'copy' | 'overdue' | 'token'; icon: IconName; tone: Tone; title: Bi; desc: Bi }[] = [
{k:'copy',icon:'Copy',tone:'err',title:g('Possible copy of your listing','તમારા લિસ્ટિંગની સંભવિત નકલ'),desc:g('DS-SUR-24822 in Vesu matches 5 of your 7 photos.','વેસુમાં DS-SUR-24822 તમારા 7 માંથી 5 ફોટા સાથે મેળ ખાય છે.')},
{k:'overdue',icon:'BanknoteOutline',tone:'warn',title:g('Commission overdue · 6 days','કમિશન મુદત વીતી · 6 દિવસ'),desc:g('₹1,20,000 from Mehul Shah · Adajan 3 BHK','મેહુલ શાહ પાસેથી ₹1,20,000 · અડાજણ 3 BHK')},
{k:'token',icon:'CheckCircle',tone:'info',title:g('Confirm token payment','ટોકન ચુકવણીની પુષ્ટિ કરો'),desc:g('Mehul Shah reported ₹5,00,000 · Vesu 3 BHK','મેહુલ શાહે ₹5,00,000 નોંધ્યા · વેસુ 3 BHK')}];
export const recent: { time: string | Bi; text: Bi }[] = [
{time:'11:20',text:g('Mehul Shah reported the token on D-1187','મેહુલ શાહે D-1187 પર ટોકન નોંધ્યું')},
{time:g('Yesterday','ગઈકાલે'),text:g('Buyer Priya Kapadia confirmed the Pal visit by OTP','ખરીદનાર પ્રિયા કાપડિયાએ OTPથી પાલની મુલાકાતની પુષ્ટિ કરી')},
{time:'27 Oct',text:g('Your card for DS-SUR-24817 was opened 9 times','DS-SUR-24817 નું તમારું કાર્ડ 9 વાર ખૂલ્યું')}];
export const stages: Bi[] = [g('Introduced','પરિચય'),g('Visit','મુલાકાત'),g('Negotiation','વાટાઘાટ'),g('Token','ટોકન'),g('Agreement','કરાર'),g('Closed','પૂર્ણ')];
export const people: { i: string; n: Bi; role: Bi }[] = [
{i:'RP',n:g('Rakesh Patel','રાકેશ પટેલ'),role:g('Listing agent · You','લિસ્ટિંગ દલાલ · તમે')},
{i:'MS',n:g('Mehul Shah','મેહુલ શાહ'),role:g("Buyer's agent",'ખરીદનારના દલાલ')},
{i:'NJ',n:g('Nirav Joshi','નીરવ જોશી'),role:g('Buyer · +91 98••• ••412','ખરીદનાર · +91 98••• ••412')},
{i:'SM',n:g('Sunil Mehta','સુનીલ મહેતા'),role:g('Owner · contact hidden from partner','માલિક · સાથીથી સંપર્ક છુપાયેલ')}];
export const tags: Record<Exclude<ActivityTag, 'TOKEN'>, { l: Bi; tone: Tone }> = {reported:{l:g('Reported','નોંધાયેલ'),tone:'warn'},confirmed:{l:g('Confirmed by both','બંનેએ પુષ્ટિ કરી'),tone:'ok'},otp:{l:g('Buyer confirmed by OTP','ખરીદનારે OTPથી પુષ્ટિ કરી'),tone:'ok'},ack:{l:g('Both acknowledged','બંનેએ સ્વીકાર્યું'),tone:'ok'},logged:{l:g('Logged','નોંધ્યું'),tone:'neutral'}};
export const activity: { time: string; icon: IconName; text: Bi; by: Bi; tag: ActivityTag }[] = [
{time:'29 Oct, 11:20',icon:'BanknoteOutline',text:g('Token ₹5,00,000 paid to owner','માલિકને ₹5,00,000 ટોકન ચૂકવાયું'),by:g('Reported by Mehul Shah · receipt attached','મેહુલ શાહે નોંધ્યું · રસીદ જોડેલી'),tag:'TOKEN'},
{time:'24 Oct, 17:05',icon:'ThumbUpOutline',text:g('Owner accepted offer of ₹1.10 Cr','માલિકે ₹1.10 કરોડની ઓફર સ્વીકારી'),by:g('Logged by Rakesh Patel','રાકેશ પટેલે નોંધ્યું'),tag:'logged'},
{time:'18 Oct, 16:30',icon:'MarkerPin',text:g('Second site visit','બીજી સ્થળ મુલાકાત'),by:g('Recorded by Mehul Shah','મેહુલ શાહે નોંધ્યું'),tag:'otp'},
{time:'14 Oct, 11:00',icon:'MarkerPin',text:g('First site visit','પ્રથમ સ્થળ મુલાકાત'),by:g('Recorded by Mehul Shah','મેહુલ શાહે નોંધ્યું'),tag:'otp'},
{time:'13 Oct, 18:11',icon:'Percent',text:g('Commission terms agreed: 2% · 50/50','કમિશન શરતો નક્કી: 2% · 50/50'),by:g('Rakesh Patel & Mehul Shah','રાકેશ પટેલ અને મેહુલ શાહ'),tag:'ack'},
{time:'13 Oct, 17:48',icon:'UserOutline',text:g('Buyer Nirav Joshi introduced · IN-5498','ખરીદનાર નીરવ જોશીનો પરિચય · IN-5498'),by:g('Recorded by Mehul Shah','મેહુલ શાહે નોંધ્યું'),tag:'otp'}];
export const split: { i: string; n: Bi; pct: string; amt: string; ack: string }[] = [
{i:'RP',n:g('Rakesh Patel','રાકેશ પટેલ'),pct:'50%',amt:'₹1,10,000',ack:'13 Oct, 18:04'},
{i:'MS',n:g('Mehul Shah','મેહુલ શાહ'),pct:'50%',amt:'₹1,10,000',ack:'13 Oct, 18:11'}];
export const milestones: { title: Bi; amt: string; due: Bi; st: Bi; tone: Tone }[] = [
{title:g('On token · from owner','ટોકન વખતે · માલિક તરફથી'),amt:'₹1,10,000',due:g('Due 31 Oct','મુદત 31 ઑક્ટો'),st:g('Due in 2 days','2 દિવસમાં બાકી'),tone:'warn'},
{title:g('On registry · from owner','દસ્તાવેજ વખતે · માલિક તરફથી'),amt:'₹1,10,000',due:g('Due 30 Nov','મુદત 30 નવે'),st:g('Upcoming','આવનારું'),tone:'neutral'},
{title:g('Your payout to Mehul Shah','મેહુલ શાહને તમારી ચુકવણી'),amt:'₹1,10,000',due:g('Within 7 days of each receipt','દરેક રકમ મળ્યાના 7 દિવસમાં'),st:g('Upcoming','આવનારું'),tone:'neutral'}];
export const docs: { n: string; s: Bi; icon: IconName }[] = [
{n:'Introduction IN-5498.pdf',s:g('Auto-generated · 13 Oct','આપમેળે બનેલું · 13 ઑક્ટો'),icon:'FilePdf'},
{n:'Commission terms D-1187.pdf',s:g('Acknowledged by both · 13 Oct','બંનેએ સ્વીકાર્યું · 13 ઑક્ટો'),icon:'FilePdf'},
{n:'Visit confirmations (2).pdf',s:g('Buyer OTP records · 14 & 18 Oct','ખરીદનારના OTP રેકોર્ડ · 14 અને 18 ઑક્ટો'),icon:'FilePdf'},
{n:'Token receipt.jpg',s:g('Uploaded by Mehul Shah · 29 Oct','મેહુલ શાહે અપલોડ કર્યું · 29 ઑક્ટો'),icon:'FileImage'}];
export const deals: {
  active: { id: string; title: Bi; with: Bi; amt: Bi; main?: boolean; stage?: Bi }[];
  closed: { id: string; title: Bi; st: Bi; tone: Tone }[];
} = {active:[{id:'D-1187',title:g('3 BHK Flat · Vesu','3 BHK ફ્લેટ · વેસુ'),with:g('with Mehul Shah · buyer Nirav Joshi','મેહુલ શાહ સાથે · ખરીદનાર નીરવ જોશી'),amt:g('₹1.10 Cr','₹1.10 કરોડ'),main:true},{id:'D-1192',title:g('2 BHK Flat · Pal','2 BHK ફ્લેટ · પાલ'),with:g('buyer Priya Kapadia','ખરીદનાર પ્રિયા કાપડિયા'),amt:g('₹62 L','₹62 લાખ'),stage:g('Visit','મુલાકાત')}],
closed:[{id:'D-1162',title:g('3 BHK Flat · Adajan','3 BHK ફ્લેટ · અડાજણ'),st:g('Commission overdue','કમિશન બાકી'),tone:'err'},{id:'D-1140',title:g('Shop · Ring Road','દુકાન · રીંગ રોડ'),st:g('Settled','પતી ગયું'),tone:'ok'},{id:'D-1121',title:g('Plot · Dumas Road','પ્લોટ · ડુમસ રોડ'),st:g('Disputed','વિવાદ'),tone:'warn'}]};
export const payments: Payment[] = [
{id:'P-3301',dir:'in',party:g('Mehul Shah','મેહુલ શાહ'),deal:g('D-1162 · Adajan 3 BHK','D-1162 · અડાજણ 3 BHK'),amt:'₹1,20,000',when:g('Was due 23 Oct','મુદત 23 ઑક્ટો હતી'),st:g('Overdue · 6 days','મુદત વીતી · 6 દિવસ'),tone:'err',cat:'overdue',remind:true},
{id:'P-3310',dir:'in',party:g('Sunil Mehta (owner)','સુનીલ મહેતા (માલિક)'),deal:g('D-1187 · Vesu 3 BHK','D-1187 · વેસુ 3 BHK'),amt:'₹1,10,000',when:g('Due 31 Oct','મુદત 31 ઑક્ટો'),st:g('Due in 2 days','2 દિવસમાં બાકી'),tone:'warn',cat:'due'},
{id:'P-3311',dir:'out',party:g('Mehul Shah','મેહુલ શાહ'),deal:g('D-1187 · Vesu 3 BHK','D-1187 · વેસુ 3 BHK'),amt:'₹1,10,000',when:g('Due 7 Nov','મુદત 7 નવે'),st:g('Upcoming','આવનારું'),tone:'neutral',cat:'due'},
{id:'P-3288',dir:'in',party:g('Jignesh Modi','જિજ્ઞેશ મોદી'),deal:g('D-1121 · Dumas Road plot','D-1121 · ડુમસ રોડ પ્લોટ'),amt:'₹40,000',when:g('He reports cash paid on 9 Oct. You have not confirmed.','તેમના મુજબ 9 ઑક્ટોએ રોકડ ચૂકવ્યા. તમે પુષ્ટિ કરી નથી.'),st:g('Disputed · RP-208','વિવાદ · RP-208'),tone:'warn',cat:'disputed'},
{id:'P-3264',dir:'in',party:g('Hiral Desai','હિરલ દેસાઈ'),deal:g('D-1140 · Ring Road shop','D-1140 · રીંગ રોડ દુકાન'),amt:'₹42,500',when:g('2 Oct · UPI · UTR 4471 0938 2215','2 ઑક્ટો · UPI · UTR 4471 0938 2215'),st:g('Confirmed by both','બંનેએ પુષ્ટિ કરી'),tone:'ok',cat:'paid'}];
export const reports: Report[] = [
{id:'RP-221',icon:'Copy',title:g('Listing copied','લિસ્ટિંગની નકલ'),desc:g('DS-SUR-24822 by Kalpesh Rana matches 5 of 7 photos of DS-SUR-24817','કલ્પેશ રાણાનું DS-SUR-24822, DS-SUR-24817 ના 7 માંથી 5 ફોટા સાથે મેળ ખાય છે'),st:g('Under review','તપાસ ચાલુ'),tone:'info',date:'26 Oct'},
{id:'RP-208',icon:'BanknoteOutline',title:g('Payment issue','ચુકવણીમાં વાંધો'),desc:g('Jignesh Modi · ₹40,000 · D-1121','જિજ્ઞેશ મોદી · ₹40,000 · D-1121'),st:g('Awaiting response · 4 days left','જવાબની રાહ · 4 દિવસ બાકી'),tone:'warn',date:'21 Oct'},
{id:'RP-190',icon:'UserOutline',title:g('Fake profile','નકલી પ્રોફાઇલ'),desc:g('A profile was using the name Patel Realty','એક પ્રોફાઇલ પટેલ રિયલ્ટી નામ વાપરતી હતી'),st:g('Resolved · profile removed','ઉકેલાયું · પ્રોફાઇલ દૂર'),tone:'ok',date:'2 Sep'}];
export const reportTypes: Record<ReportType, { icon: IconName; rel: Bi[]; ev: Bi[] }> = {
copy:{icon:'Copy',rel:[g('DS-SUR-24822 · Kalpesh Rana','DS-SUR-24822 · કલ્પેશ રાણા'),g('Another listing ID or link','બીજું લિસ્ટિંગ ID કે લિંક')],ev:[g('Your listing history from 12 Oct','12 ઑક્ટોથી તમારા લિસ્ટિંગનો ઇતિહાસ'),g('Photo match result: 5 of 7','ફોટો મેળ: 7 માંથી 5'),g('Share log: 14 shares, 38 opens','શેર લોગ: 14 શેર, 38 વાર ખૂલ્યું')]},
bypass:{icon:'UsersOutline',rel:[g('IN-5498 · Nirav Joshi · Vesu','IN-5498 · નીરવ જોશી · વેસુ'),g('D-1162 · Adajan 3 BHK','D-1162 · અડાજણ 3 BHK')],ev:[g('Introduction record with buyer OTP','ખરીદનારના OTP સાથેનો પરિચય રેકોર્ડ'),g('2 visit confirmations','2 મુલાકાતની પુષ્ટિ'),g('Acknowledged commission terms','સ્વીકારેલી કમિશન શરતો')]},
pay:{icon:'BanknoteOutline',rel:[g('P-3301 · Mehul Shah · ₹1,20,000','P-3301 · મેહુલ શાહ · ₹1,20,000'),g('P-3310 · D-1187 token','P-3310 · D-1187 ટોકન')],ev:[g('Acknowledged commission terms','સ્વીકારેલી કમિશન શરતો'),g('Ledger entries for this deal','આ ડીલની ખાતાવહી'),g('Uploaded receipts','અપલોડ કરેલી રસીદો')]},
fake:{icon:'UserOutline',rel:[g('Kalpesh Rana · DS-AG-2290','કલ્પેશ રાણા · DS-AG-2290'),g('Someone outside DalalSetu','દલાલસેતુની બહારની વ્યક્તિ')],ev:[g('Your verified identity and GujRERA record','તમારી ચકાસાયેલ ઓળખ અને GujRERA રેકોર્ડ'),g('Profile creation dates','પ્રોફાઇલ બન્યાની તારીખો')]}};
export const notifications: { icon: IconName; text: Bi; time: string | Bi; unread?: boolean; go?: 'deal' | 'dup' | 'mine' | 'pay' }[] = [
{icon:'CheckCircle',text:g('Mehul Shah reported the token on D-1187. Confirm or dispute.','મેહુલ શાહે D-1187 પર ટોકન નોંધ્યું. પુષ્ટિ કરો કે વાંધો ઉઠાવો.'),time:'11:20',unread:true,go:'deal'},
{icon:'Copy',text:g('Possible copy of DS-SUR-24817 found in Vesu','વેસુમાં DS-SUR-24817 ની સંભવિત નકલ મળી'),time:'09:05',unread:true,go:'dup'},
{icon:'Unlock',text:g('Hiral Desai asked for access to DS-SUR-24702','હિરલ દેસાઈએ DS-SUR-24702 માટે ઍક્સેસ માગ્યો'),time:g('Yesterday','ગઈકાલે'),go:'mine'},
{icon:'BanknoteOutline',text:g('Reminder: ₹1,20,000 from Mehul Shah is overdue','યાદ: મેહુલ શાહ પાસેથી ₹1,20,000 બાકી છે'),time:g('Yesterday','ગઈકાલે'),go:'pay'},
{icon:'CalendarDate',text:g('Visit tomorrow 11:00 · Pal 2 BHK with Priya Kapadia','આવતીકાલે 11:00 મુલાકાત · પાલ 2 BHK, પ્રિયા કાપડિયા સાથે'),time:'27 Oct'}];
export const localities: [string, string][] = [['Vesu','વેસુ'],['Pal','પાલ'],['Adajan','અડાજણ'],['Piplod','પીપલોદ'],['Citylight','સિટીલાઇટ'],['Althan','અલથાણ'],['VIP Road','વીઆઇપી રોડ'],['Dumas Road','ડુમસ રોડ'],['Ring Road','રીંગ રોડ'],['Varachha','વરાછા'],['Katargam','કતારગામ'],['Sarthana','સરથાણા']];
export const amenities: [string, string][] = [['Lift','લિફ્ટ'],['Parking','પાર્કિંગ'],['Security','સિક્યોરિટી'],['Power backup','પાવર બેકઅપ'],['Garden','બગીચો'],['Gym','જીમ']];
export const verification: { k: 'vMobile' | 'vId' | 'vRera' | 'vAgency'; ok: boolean; sub: string | Bi }[] = [{k:'vMobile',ok:true,sub:'+91 98250 41042'},{k:'vId',ok:true,sub:'•••• •••• 4417'},{k:'vRera',ok:true,sub:'Reg. on file · 2024'},{k:'vAgency',ok:false,sub:g('Upload a utility bill or rent agreement','લાઇટ બિલ કે ભાડા કરાર અપલોડ કરો')}];
