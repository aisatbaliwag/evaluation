// Function to sort the table rows based on Total Average
function sortTable() {
    // Get the table element
    var table = document.querySelector('.ranking-table');

    // Get the rows except the header row
    var rows = Array.from(table.querySelectorAll('.TR'));

    // Sort the rows based on Total Average
    rows.sort(function(rowA, rowB) {
        var totalAverageA = parseFloat(rowA.querySelector('td:nth-child(3)').textContent);
        var totalAverageB = parseFloat(rowB.querySelector('td:nth-child(3)').textContent);
        return totalAverageB - totalAverageA; // Descending order
    });

    // Re-append the sorted rows to the table
    rows.forEach(function(row, index) {
        // Update count
        row.querySelector('.tableRows').textContent = (index + 1) + '.';
        table.appendChild(row);
    });
}

// Call the sortTable function when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    sortTable();
});
