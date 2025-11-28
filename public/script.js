// Dynamically load cotton table
toTable = (arr, headers, rowFn) => {
  let thead = '<thead><tr>' + headers.map(h => `<th>${h}</th>`).join('') + '<th></th></tr></thead>';
  let tbody = '<tbody>' + arr.map(r => rowFn(r)).join('') + '</tbody>';
  return `<table id="cotton-table">${thead}${tbody}</table>`;
};
function loadCottonTable() {
  fetch('/api/cotton').then(r=>r.json()).then(data => {
    if(!data.length) return document.getElementById('cotton-table-wrapper').innerHTML = '<em>No cotton entries found.</em>';
    let fields = Object.keys(data[0]);
    let table = toTable(data, fields, r => '<tr>' + fields.map(f => `<td>${r[f]}</td>`).join('') + `<td><button class='btn-explore' onclick="location.href='/traits/${encodeURIComponent(r.name)}'">Explore</button></td></tr>`);
    document.getElementById('cotton-table-wrapper').innerHTML = table;
  }).catch(()=>document.getElementById('cotton-table-wrapper').innerHTML = '<em>Error loading data</em>');
}
window.loadCottonTable = loadCottonTable;

function loadTraitsTable(name) {
  fetch('/api/traits/' + encodeURIComponent(name)).then(r=>r.json()).then(data => {
    if(!data.length) return document.getElementById('traits-table-wrapper').innerHTML = '<em>No traits found for ' + name + '.</em>';
    let fields = Object.keys(data[0]);
    let table = `<table id="traits-table"><thead><tr>` + fields.map(h => `<th>${h}</th>`).join('') + '</tr></thead><tbody>' + data.map(r => '<tr>' + fields.map(f => `<td>${r[f]}</td>`).join('') + '</tr>').join('') + '</tbody></table>';
    document.getElementById('traits-table-wrapper').innerHTML = table;
  }).catch(()=>document.getElementById('traits-table-wrapper').innerHTML = '<em>Error loading trait data</em>');
}
window.loadTraitsTable = loadTraitsTable;
