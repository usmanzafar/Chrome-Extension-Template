
function getData()
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET","http://apilink/api/data.json",true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            hideSpinner();
            console.log("All Data Received");
            var resp = JSON.parse(xhr.responseText);
            var today = resp.summary.today;
            console.log (today);

            var calls = document.getElementById('calls');
            var paid_calls = document.getElementById('paidcalls');
            var revenue = document.getElementById('revenue');
            var profit = document.getElementById('profit');

            calls.innerText = today.calls;
            paid_calls.innerText = today.paid_calls;
            revenue.innerHTML = today.revenue;
            profit.innerHTML = today.profit;


        }
        else
        {
            showSpinner();
        }
    }
    xhr.send();
}



function showData()
{
    var dataTable = document.getElementById('datatable');
    var spinner = document.getElementById('spinner');
    spinner.hidden = true;
    dataTable.hidden = false;
}

function showSpinner()
{
    var spinner = document.getElementById('spinner');
    spinner.hidden = false;
}

function hideSpinner()
{
    var spinner = document.getElementById('spinner');
    spinner.hidden = true;

}

document.addEventListener('DOMContentLoaded', function() {

    setTimeout(function () {
        getData();
        showData();
    }, 2000);


});
