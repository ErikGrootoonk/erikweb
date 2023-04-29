  // Load the JSON file using Fetch API
fetch('boekenlijst.json')
.then(response => response.json())
.then(data => {
  // Get the div where we'll create the grid
  const gridDiv = document.getElementById('grid');
  
  // Create a table element
  const table = document.createElement('table');
  
  // Create a header row
  const headerRow = document.createElement('tr');
  
  // Loop through the keys in the first object to create the header cells
  for (let key in data[0]) {
    const headerCell = document.createElement('th');
    headerCell.textContent = key;
    headerRow.appendChild(headerCell);
  }
  
  // Add the header row to the table
  table.appendChild(headerRow);
  
  // Loop through the objects in the array to create the rows
  data.forEach(object => {
    const row = document.createElement('tr');
    
    // Loop through the keys in the object to create the cells
    for (let key in object) {
      const cell = document.createElement('td');
      cell.textContent = object[key];
      row.appendChild(cell);
    }
    
    // Add the row to the table
    table.appendChild(row);
  });
  
  // Add the table to the grid div
  gridDiv.appendChild(table);
})
.catch(error => console.error(error));

