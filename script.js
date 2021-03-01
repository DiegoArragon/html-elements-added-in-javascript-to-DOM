
// Header Section

const newElement = document.createElement('header');
document.body.appendChild(newElement);
newElement.id = 'nav';

// Ul Element

const ulList = document.createElement('ul');
newElement.appendChild(ulList);
ulList.className = 'ulstyle';

const liItem = document.createElement('li');
ulList.appendChild(liItem);

// Activ link
const a = document.createElement('a');
const linkText = document.createTextNode('Gmail');
a.append(linkText);
a.title = 'Gmail';
a.href = 'https://mail.google.com/';
liItem.appendChild(a);


const liItem2 = document.createElement('li');
ulList.appendChild(liItem2);

// Activ link
const a2 = document.createElement('a');
const linkText2 = document.createTextNode('Images');
a2.append(linkText2);
a2.title = 'Images';
a2.href = 'https://www.google.ie/imghp?hl=en&ogbl';
liItem2.appendChild(a2);

// Main section

const mainElement = document.createElement('main');
document.body.appendChild(mainElement);
mainElement.id = 'main';

// Google Logo

const img = document.createElement('img');
img.setAttribute('src', 'https://www.google.ie/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png');
const body = document.querySelector('main');
body.append(img);

// Input

const inputField = document.createElement('input');
inputField.type = 'search'; inputField.value = '';
mainElement.appendChild(inputField);
inputField.className = 'input-field';

// Buttons

const buttonsElement = document.createElement('section');
main.appendChild(buttonsElement);
buttonsElement.id = 'buttelemnts';

const buttonElement = document.createElement('button');
buttonsElement.appendChild(buttonElement);
buttonElement.className = 'buttonone';
buttonElement.textContent = 'Google Search';

const buttonElement2 = document.createElement('button');
buttonsElement.appendChild(buttonElement2);
buttonElement2.className = 'buttonone';
buttonElement2.textContent = 'Feeling Lucky';

// Lang section

const sectLanguage = document.createElement('section');
mainElement.appendChild(sectLanguage);
sectLanguage.id = 'lang';
sectLanguage.textContent = 'Google offered in:';

// Activ link
const secLink1 = document.createElement('li');
sectLanguage.appendChild(secLink1);

const a10 = document.createElement('a');
const linkText10 = document.createTextNode('Polski');
a10.append(linkText10);
a10.title = 'Polski';
a10.href = 'https://www.google.pl/';
secLink1.appendChild(a10);

// Activ link
const secLink2 = document.createElement('li');
sectLanguage.appendChild(secLink2);
    
const a11 = document.createElement('a');
const linkText11 = document.createTextNode('Gaeilge');
a11.append(linkText11);
a11.title = 'Gaeilge';
a11.href = 'https://www.google.ie/';
secLink2.appendChild(a11);

// Footer
const newFooter = document.createElement('footer');
document.body.appendChild(newFooter);
newFooter.id = 'foot';

// Left link
const footEr = document.getElementById('foot');
const lefT = document.createElement('span');
footEr.appendChild(lefT);
lefT.textContent = 'Ireland';

// First footer section

const sectionElement1 = document.createElement('section');
newFooter.appendChild(sectionElement1);
sectionElement1.id = 'sectionone';

// List left and links
const righT = document.createElement('ul');
sectionElement1.appendChild(righT);
righT.className = 'ulfoot';

const fooItem = document.createElement('li');
righT.appendChild(fooItem)

const a3 = document.createElement('a');
const linkText3 = document.createTextNode('About');
a3.append(linkText3);
a3.title = 'About';
a3.href = 'https://about.google/?utm_source=google-IE&utm_medium=referral&utm_campaign=hp-footer&fg=1';
fooItem.appendChild(a3);


const fooItem2 = document.createElement('li');
righT.appendChild(fooItem2);

const a4 = document.createElement('a');
const linkText4 = document.createTextNode('Advertising');
a4.append(linkText4);
a4.title = 'Advertising';
a4.href = 'https://ads.google.com/intl/en_ie/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1';
fooItem2.appendChild(a4);


const fooItem3 = document.createElement('li');
righT.appendChild(fooItem3);

 const a5 = document.createElement('a');
const linkText5 = document.createTextNode('Business');
a5.append(linkText5);
a5.title = 'Business';
a5.href = 'https://www.google.ie/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none';
fooItem3.appendChild(a5);


const fooItem4 = document.createElement('li');
righT.appendChild(fooItem4);

const a6 = document.createElement('a');
const linkText6 = document.createTextNode('How Search works');
a6.append(linkText6);
a6.title = 'How Search works';
a6.href = 'https://www.google.com/search/howsearchworks/?fg=1';
fooItem4.appendChild(a6);

// Second footer section

const sectionElement2 = document.createElement('section');
newFooter.appendChild(sectionElement2);
sectionElement2.id = 'sectiontwo';

// List right and links
const secRight = document.createElement('ul');
sectionElement2.appendChild(secRight);
secRight.className = 'ulright';

const fooItemr = document.createElement('li');
secRight.appendChild(fooItemr);

const a7 = document.createElement('a');
const linkText7 = document.createTextNode('Privacy');
 a7.append(linkText7);
a7.title = 'Privacy';
a7.href = 'https://policies.google.com/privacy?hl=en-IE&fg=1';
fooItemr.appendChild(a7);

const fooItem2r = document.createElement('li');
secRight.appendChild(fooItem2r);

const a8 = document.createElement('a');
const linkText8 = document.createTextNode('Terms');
a8.append(linkText8);
a8.title = 'Terms';
a8.href = 'https://policies.google.com/terms?hl=en-IE&fg=1';
fooItem2r.appendChild(a8);

const fooItem3r = document.createElement('li');
secRight.appendChild(fooItem3r);

const a9 = document.createElement('a');
const linkText9 = document.createTextNode('Search Settings');
a9.append(linkText9);
a9.title = 'Search Settings';
a9.href = 'https://www.google.ie/preferences?hl=en-IE&fg=1';
fooItem3r.appendChild(a9);




