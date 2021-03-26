const jobList = [
'Talent Delivery Specialist','Snake Milker','Chick Sexer','Lab Rat','Media Distribution Officer','Animal Colorist','Hair Boiler','Digital Overlord','Reindeer Walker','Retail Jedi','Slaughterer','Wizard of Light Bulb Moments','Direct Mail Demi-God','Wet Leisure Attendant','Grand Master of Underlings','Twisted Brother','Under Secretary to the Sub','Ghost Hunter','Master Handshaker','Great Service Agent','Wet Leisure Attendant','Education Centre Nourishment Consultants','Chief Everything Officer','Communications Ambassador','Colour Distribution Technician','Zombie','Happiness Advocate','Bride Kidnapping Expert','Legal Bank Robber','Second Tier Totalist','Teddy Bear Surgeon','Creator of Happiness','Change Magician','Champagne Tester','Water Slide Tester','Rollercoaster Tester','Digital Dynamo','Dream Alchemist','Scrum Master','Paradise Island Caretaker','Ice Rink Hand-Holder','Professional Sleeper','Marketing Rock Star','Head of Potatoes','Senior Kindle Evangelist','Brand Evangelist','Tree Decorator','Warden of the Swans','Marker of the Swans','Chief Inspiration Officer','Chocolate Taster','Associate to the Exec Manager of Marketeering & Conservation Efforts','Pneumatic Device and Machine Optimizer','International & World-Wide Optical & Vision-Focused Tenured Professorship','Beverage Dissemination Officer – A Bartender','Hyphenated-Specialist','Digital Prophet','Director of Making People Happy and Content','Actions and Repercussions Adviser','Galactic Viceroy of Research Excellence','Space Travel Agent','Patron Saint of Academic Studying','Cheese Sprayer','Chief Biscuit Dunker','Teen Exorcist','The Finish Line','Chief Troublemaker','Chief Chatter','Bear Biologist and Paper Folder','Problem Wrangler','Pornography Historian','Creativity Analyst','In-house Philosopher','Crayon Evangelist','Genius','Hacker','Waking Night Support Worker','Accounting Ninja','Sales Ninja','Sales Superhero','Catalyst','Conversation Architect','Director of Fun','Cat Behaviour Consultant','Pet Food Taster','New Media Guru','Initiative Officer','Social Media Trailblazer','Corporate Magician','Conversation Architect','Oyster Floater','Toilet Sniffer','Night Stalker','Dog W@nk#r','Hairapist','Professional Snuggler','Professional Liar','Face Feeler','Bike Fishermen','Airport Scarecrow']

const nameList = [
'Curtis Caballero','Roman Royal','Devin Dehner','Francis Fullmer','Billie Bauer','Tracey Touchette','Alvaro Armstead','Pedro Parkerson','Tanner Tichenor','Dominic Downes','Modesto Moline','Javier Jernigan','Steve Stuber','Ike Irvine','Otha Olmo','Luther Lukach','Vincent Vise','Benjamin Blanding','John Jeanes','Lenny Lieberman','Shelby Sabatini','Genaro Garnett','Perry Peppard','Anton Ahner','Noble Neer','Marcelino Matula','Amos Apolinar','Dorsey Dedrick','Weston Whisenhunt','Rodrigo Rosenblum','Benny Bizzell','Reinaldo Remus','Clinton Carnes','Joesph Jacinto','Lincoln Layfield','Elmer Eckhart','Hershel Hunt','Sherman Schlottmann','Williams Wee','Ezra Eanes','Millard Mccaster','Dee Derby','Terrance Tokarski','Lindsey Lueders','Rolf Rosenberry','Percy Pinzon','Anthony Amavisca','Jeremy Jeon','Norris Nance','Kermit Kluth','Rena Risk','Lyla Leggett','Jeneva Junkin','Novella Newport','Delta Debelak','Bettye Billingsley','Valrie Vizcarra','Toshia Tilton','Marissa Munsell','Lizette Loso','Grayce Gheen','Belinda Budde','Margery Midgley','Brianne Billings','Britany Beachy','Mi Messerly','Lovie Lyttle','Earlie Eis','Aundrea Andersen','Beata Barcomb','Porsha Poudrier','Donetta Debose','Helene Holle','Alida Adkisson','Pam Partida','Lani Lamborn','Hillary Hedley','Velia Vancleve','Nelia Nowack','Antionette Alles','Elsy Ensminger','Dominga Delmont','Claudia Cumbo','Mitzie Martinson',
'Catharine Cashman','Cristin Campa','Adelaide Anding','Ona Oler','Arcelia Albano','Kelsie Kittelson','Arianna Arteaga','Damaris Dent','Lenna Landa','Demetrice Duenes','Lanie Laforest','Wynona Woodham','Teresa Tannenbaum','Judie Janas','Asuncion Araya','Angelika Alves'
]

const cityList = [
'Campinas, Brazil','Hefei, China','Guadalajara, Mexico','Rio de Janeiro, Brazil','Yaoundé, Cameroon','Calgary, Canada','Quanzhou, China','Daegu, South','Chicago, UnitedStates','Jaipur, India','Surabaya, Indonesia','Chongqing, China','Guatemala City, Guatemala','Ahvaz, Iran','Santiago, Chile','Hyderabad, India','Delhi, India','Pyongyang, North','Dallas, United States','Kobe, Japan','Madrid, Spain','Barranquilla, Colombia','Tainan, Taiwan','Rostov-on-Don, Russia','Manila, Philippines','Nagoya, Japan','Warsaw, Poland','Karaj, Iran','Ankara, Turkey','Baku, Azerbaijan','İzmir, Turkey','Moscow, Russia','Algiers, Algeria','Peshawar, Pakistan','Kampala, Uganda','Mashhad, Iran','Ningbo, China','Yokohama, Japan','Vijayawada, India','Houston, UnitedStates','Rome, Italy','Brazzaville, Congo Republic','Chaozhou, China','Minsk, Belarus','Lagos, Nigeria','Tabriz, Iran','Astana, Kazakhstan','Hiroshima, Japan','Bandung, Indonesia','Fez, Morocco','Medan, Indonesia','Semarang, Indonesia','Johannesburg, South Africa','Guayaquil, Ecuador','New Taipei City, Taiwan','Chengdu, China','Mumbai, India','Harbin, China','Dubai, United Arab Emirates','Medellin, Colombia','Vienna, Austria','Milan, Italy','Cali, Colombia','Gujranwala, Pakistan','Shenyang, China','Makassar, Indonesia','Xiamen, China','Belo Horizonte, Brazil','Guangzhou, China','Zhengzhou, China','Palembang, Indonesia','Alexandria, Egypt','Qingdao, China','Fukuoka, Japan','Dakar, Senegal','Taichung, Taiwan','Caracas, Venezuela','Budapest, Hungary','Ho Chi Minh City, Vietnam','Prague, Czech Republic','Riyadh, Saudi Arabia','Lima, Peru','Shenzhen, China','Kolkata, India','Sapporo, Japan','Kathmandu, Nepal','Douala, Cameroon','Shanghai, China','Nagpur, India','Seoul, Korea,South','Caloocan, Philippines','Tunis, Tunisia','Kwangju,South Korea','Ulsan, South','Munich, Germany','Kyoto, Japan','Kawasaki, Japan','San Antonio, United States','Brasília, Brazil','Maracaibo, Venezuela'
]

const relationshipStatus = ['married', 'engaged', 'in a civil partnership']

const livingSituation = ['House', 'Villa', 'Apartment', 'Street', 'Hotel', 'Motel']

function inYears(){
  let y=Math.floor((Math.random() * 10) + 1)
  if (y == 1){
    return `<b>${y} year</b>`
  }
  else{
    return `<b>${y} years</b>`
  }
}
function inRandomCity(){
  return `in <b>${cityList[Math.floor((Math.random() * 100) + 1)]}</b>`
}
function asRandomJob(){
  let job = jobList[Math.floor((Math.random() * 100))];
  let f = job.slice(0,1).toLowerCase();
  if (f=='a' || f=='e' || f=='i' || f=='o' || f=='u'){
    return `as an <b>${job}</b>`
  }
  else {
    return `as a <b>${job}</b>`
  }
}
function randomStatus(){
  let s=relationshipStatus[Math.floor((Math.random() * 3))]
  if (s==='married'){
    return `<b>${s}</b> to`
  }
  else {
    return `<b>${s}</b> with`
  }
}
function name(){
  let n=nameList[Math.floor((Math.random() * 100)+1)];
  return `<b>${n}</b>`
}
function living(){
  let living=livingSituation[Math.floor((Math.random() *6))];
  let f = living.slice(0,1).toLowerCase();
  if (living=='Street'){
    return `<b>the ${living}</b>`
  }
  else if (f=='a' || f=='e' || f=='i' || f=='o' || f=='u'){
    return `an <b>${living}</b>`
  }
  else {
    return `a <b>${living}</b>`
  }
}

function children(){
  let c=Math.floor(Math.random()*10);
  if (c==0){
    return `<b>no children</b>`
  }
  else if (c==1){
    return `<b>${c} child</b>`
  }
  else{
    return `<b>${c} children</b>`
  }
}

function dieIn(){
  d=Math.floor(Math.random()*60)
  if (d==0){
    return `<b>very, very, very soon!</b>`
  }
  else if(d==1){
    return `in <b>${d} year!</b>`
  }
  else{
    return `in <b>${d} years!</b>`
  }
}
console.log(dieIn());

function fortuneTeller(){
  return `Thank you for using the Fortune teller 2000. <br><br>
  In ${inYears()} you will be living ${inRandomCity()} and working as a ${asRandomJob()}. <br><br>
  You will be ${randomStatus()} ${name()} and you will be living in ${living()} together. Also, and this might sound crazy, but you you will have ${children()} together.<br><br>
  And also, and I really shouldn't be telling you this, <br><br>
  you will die ${dieIn()}` 
}

function fortune(){
  let rootElement = document.querySelector('#fortune')
  rootElement.innerHTML = fortuneTeller();
}

console.log(fortuneTeller());