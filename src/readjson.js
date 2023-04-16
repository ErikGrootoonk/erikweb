fetch('boekenlijst.json')
  .then(response => response.json())
  .then(function (data) {
    // console.log(data)
      // Create a new <ul> element
      const ul = document.createElement('ul');

      // Loop through the JSON data and create <li> elements for each item
      data.forEach(item => {
        // console.log(item)
        const li = document.createElement('li');
        li.innerText = item.voornaam;
        ul.appendChild(li);
      });

      // Add the <ul> element to the <body> element
      document.body.appendChild(ul);
    })
  .catch(error => console.error(error));
