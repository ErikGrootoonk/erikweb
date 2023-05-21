
// Load the JSON file using Fetch API
fetch('boekenlijst.json')
  .then(response => response.json())
  .then(data => {
    // Get the div where we'll create the grid
    const gridDiv = document.getElementById('grid');
    
    // Get the search input element
    const searchInput = document.getElementById('searchInput');
    
    // Function to filter the data based on search query
    const filterData = () => {
      const query = searchInput.value.toLowerCase().trim();
      const filteredData = data.filter(object => {
        for (let key in object) {
          if (object[key].toLowerCase().includes(query)) {
            return true;
          }
        }
        return false;
      });
      
      renderGrid(filteredData);
    };
    
    // Function to render the grid with the filtered data
    const renderGrid = (filteredData) => {
      gridDiv.innerHTML = '';
      
      filteredData.forEach(object => {
        const card = document.createElement('div');
        card.className = 'bg-white p-4 rounded-lg shadow-md';
        
        for (let key in object) {
          const column = document.createElement('div');
          column.className = 'mb-2';
          
          const heading = document.createElement('h2');
          heading.className = 'text-lg font-semibold';
          heading.textContent = key;
          column.appendChild(heading);
          
          const value = document.createElement('p');
          value.textContent = object[key];
          column.appendChild(value);
          
          card.appendChild(column);
        }
        
        gridDiv.appendChild(card);
      });
    };
    
    // Add event listener to the search input for filtering data
    searchInput.addEventListener('input', filterData);
    
    // Render the initial grid
    renderGrid(data);
  })
  .catch(error => console.error(error));



