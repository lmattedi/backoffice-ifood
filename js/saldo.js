document.addEventListener('DOMContentLoaded', function () {
  
    const menuToggle = document.getElementById('menu-toggle');
    const wrapper = document.getElementById('wrapper');

    menuToggle.addEventListener('click', function () {
        wrapper.classList.toggle('toggled');
    });
});


document.getElementById('filter-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const filterDate = document.getElementById('filter-date').value;
    const filterType = document.getElementById('filter-type').value;
    const filterValue = document.getElementById('filter-value').value;

    const tableBody = document.getElementById('transaction-table-body');
    const rows = tableBody.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const date = cells[1].textContent.split('/').reverse().join('-'); 
        const type = cells[3].textContent;
        const value = parseFloat(cells[2].textContent.replace('R$ ', '').replace('.', '').replace(',', '.'));

        let showRow = true;

        
        if (filterDate) {
            const filterDateObj = new Date(filterDate);
            const cellDateObj = new Date(date);
            if (cellDateObj.getTime() !== filterDateObj.getTime()) {
                showRow = false;
            }
        }
      
        if (filterType && type !== filterType) {
            showRow = false;
        }

        if (filterValue && value < parseFloat(filterValue)) {
            showRow = false;
        }

        rows[i].style.display = showRow ? '' : 'none';
        
    }
});
