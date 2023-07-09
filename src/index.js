import { resolve } from "parcel-bundler/lib/utils/localRequire";
import "./styles.css";

document.getElementById("app").innerHTML = `
<h1></h1>
<div>
  
</div>
`;

async function getData() {
    let link =
      "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
    let datas = await fetch(link);
    let x = await datas.json();
    promises().then(() => {
      console.log("Data received");
      fetchData(x)
      }
}  

function promises() {
  const promise = new promise ((resolve, reject) => {
    resolve();
    })
    return promise;
  }

function fetchData(x) {
  const nodeList = document.querySelectorAll(
    x.dataset.dimension.Alue.category.label
  );
  for (let i = 0; i < nodeList.length; i++) {
    let textnode = document.createTextNode(nodeList(i));
    document.getElementById("population").appendChild(textnode);
  }

  /* const textnode = document.createTextNode("Water");

  document.getElementById("population").appendChild(textnode);*/
}

getData();
