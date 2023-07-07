import "./styles.css";

document.getElementById("app").innerHTML = `
<h1></h1>
<div>
  
</div>
`;
let link =
  "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";

getData();

async function getData(link) {
  try {
    let datas = await fetch(link);
    let x = await dataset.dimension.Alue.category.label(datas);
    console.log("Data received");
    fetchData(x);
  } catch {
    console.log(Error);
  }
}

function fetchData(x) {
  document.getElementById("tablein").appendChild(x);
}
