function createTable() {
  // Prompt for rows and columns
  const rows = prompt("Input number of rows");
  const cols = prompt("Input number of columns");

  // Convert to integers
  const rn = parseInt(rows);
  const cn = parseInt(cols);

  // Validate inputs
  if (isNaN(rn) || isNaN(cn)) {
    alert("Please enter valid numeric values.");
    return;
  }

  if (rn <= 0 || cn <= 0) {
    alert("Rows and columns must be greater than 0.");
    return;
  }

  // Get the table element
  const table = document.getElementById("myTable");

  // Clear any existing table content
  table.innerHTML = "";

  // Create the table rows and columns
  for (let i = 0; i < rn; i++) {
    const row = table.insertRow();

    for (let j = 0; j < cn; j++) {
      const cell = row.insertCell();
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}

