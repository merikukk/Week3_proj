import "./styles.css";

document.getElementById("app").innerHTML = `
<h1></h1>
<div>
  
</div>
`;
let link =
  "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";

async function getData(link) {
  let datas = await fetch(link);
  let x = await datas.text();
  fetchData(x);
}
