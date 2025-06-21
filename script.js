function createTable() {
  // Get the table element
  const table = document.getElementById("myTable");

  // Clear any existing table content
  table.innerHTML = "";

  // Prompt user for rows and columns
  const rn = parseInt(prompt("Input number of rows"));
  const cn = parseInt(prompt("Input number of columns"));

  // Validate input: numeric, positive, non-zero
  if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
    alert("Please enter valid positive numbers for rows and columns.");
    return;
  }

  // Create rows and columns
  for (let i = 0; i < rn; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < cn; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}
