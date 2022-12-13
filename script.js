// Turite HTML dokumentą, kuriame yra pateiktas vienas div su id=”main”.
// UŽDUOTIS: Sukurti jam (jo vidui) tokį markup naudojant JavaScipt:
	
// <h2> tag’as su tekstu;
// <p> tag’as su tekstu;
// <ul> tag’as, kurio viduje yra vienas <li>;
// <p> tag’as su tekstu.

let main = document.querySelector('#main');

const h2Tag = document.createElement("h2");
h2Tag.textContent = "Header-2 text";
main.append(h2Tag);

const p1Tag = document.createElement("p");
p1Tag.textContent = "Paragraph-1 text";
main.append(p1Tag);

const ulTag = document.createElement("ul");
const liTag = document.createElement("li");
liTag.textContent = "List text";
ulTag.append(liTag);
main.append(ulTag);

const p2Tag = document.createElement("p");
p2Tag.textContent = "Paragraph-2 text";
main.append(p2Tag);