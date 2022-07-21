let data;

async function fetchData() {
const res = await fetch("./data.json");
data = await res.json();
}

fetchData();