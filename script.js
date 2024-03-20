function displayData() {
    let form = document.getElementById("registrationForm");
    let userDataDiv = document.getElementById("userData");
    let tableHTML = "<h2>Ваші дані:</h2><table border='1'><tr><th>Поле</th><th>Значення</th></tr>";
    
    for (let i = 0; i < form.elements.length; i++) {
        let field = form.elements[i];
        if (field.type !== "button") {
            tableHTML += "<tr><td>" + field.name + "</td><td>" + field.value + "</td></tr>";
        }
    }
    
    tableHTML += "</table>";
    userDataDiv.innerHTML = tableHTML;
}