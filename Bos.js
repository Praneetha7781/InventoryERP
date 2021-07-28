function myfunction() {

    var tableElement = document.getElementsByTagName("table")[0];
    var newrow = tableElement.insertRow(1);
    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);
    var cell3 = newrow.insertCell(2);
    var name = document.getElementById("ProductEntry").value;
    document.getElementById("ProductEntry").value = "";
    var quantity;
    var edate;
    if (name == "1112105622") {
        name = "Bread";
        quantity = "210";
        edate = "5 June 2022";
    }
    if (name == "2425509923") {
        name = "Maggi";
        quantity = "550";
        edate = "9 Sept 2023";
    }
    if (name == "1231007722") {
        name = "Moov";
        quantity = "100";
        edate = "7 July 2022";
    }
    cell1.innerHTML = name;
    cell2.innerHTML = quantity;
    cell3.innerHTML = edate;
}