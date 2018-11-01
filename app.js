let rows = document.querySelectorAll(".row");

pattern
let players = ["X", "O"];
let player = players[0];

rows.forEach(function(row) {
  row.addEventListener("click", rowClicked);
});

function rowClicked(n) {
  n.target.textContent = player;
}


