$(document).ready(function(){
    let totalExpense = 0;

    function addExpense(){
        const expenseName = $('#Name').val();
        const expenseAmount = parseFloat($('#Amount').val());

        if (!expenseName || isNaN(expenseAmount) || expenseAmount <= 0) {
            alert('Please enter a valid expense name and amount.');
            return;
        }
    

        $('#expenseList').append(`
            <tr>
                <td>${expenseName}</td>
                <td>$${expenseAmount.toFixed(3)}</td>
                <td><button class="deleteExpense">Delete</button></td>
            </tr>
        `);

        totalExpense += expenseAmount ;
        updateTotalExpense();

        $('#Name').val('');
        $('#Amount').val('');
    }

    function updateTotalExpense(){
        $('#totalExpense').text(`Total Expense: $${totalExpense.toFixed(4)}`);
    }

    $('#addExpense').on('click' , addExpense)

    $('#expenseList').on('click', '.deleteExpense', function() {
        const row = $(this).closest('tr');
        const expenseAmount = parseFloat(row.find('td:eq(1)').text().slice(1));

        row.remove();
        totalExpense -= expenseAmount;
        updateTotalExpense();
    });
});