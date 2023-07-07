import "./styles.css";

document.getElementById("app").innerHTML = `
<h1></h1>
<div>
  
</div>
`;

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  myDisplay(myText);
}
