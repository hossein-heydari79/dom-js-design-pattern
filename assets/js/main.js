// alert("welcome to javascript");
const form = document.getElementById("form")
let studends = [];

form.addEventListener("submit", e => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const family = document.getElementById("family").value;
    const phone = document.getElementById("phone").value;

    addStudent(name, family, email, phone);
})


function Student(name, lastName, email, phone) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
}


function addStudent(name, lastName, email, phone) {
    const student = new Student(name, lastName, email, phone);
    console.log(student);
    studends.push(student);
    render();
}


function editStudent(index, name, lastName, email, phone) {
    const student = new Student(name, lastName, email, phone);
    studends = studends.map((item, i) => i === index ? student : item);
    render();
}



function removeStudent(index) {
    studends = studends.filter((item, i) => i !== index);
    render();
}



function render() {

    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    for (let i = 0; i < studends.length; i++) {

        let tr = document.createElement("tr");

        let td1 = document.createElement("td");

        let i1 = document.createElement("i");
        td1.setAttribute("class", "delete");
        td1.addEventListener("click", (e) => {
            // let parent = e.currentTarget.parentElement;

            // parent.remove();

            removeStudent(i);
        })
        i1.className = "fa fa-close";
        i1.style.cursor = "pointer";

        td1.append(i1);

        tr.append(td1);

        let td2 = document.createElement("td");

        let i2 = document.createElement("i");
        td2.setAttribute("class", "edit");
        td2.addEventListener("click", (e) => {
            let name_edit = prompt("Enter your edit name : ", studends[i].name);
            let family_edit = prompt("Enter your edit family : ", studends[i].lastName);
            let email_edit = prompt("Enter your edit email : ", studends[i].email);
            let phone_edit = prompt("Enter your edit phone : ", studends[i].phone);

            editStudent(i, name_edit, family_edit, email_edit, phone_edit);

        })
        i2.className = "fa fa-edit";
        i2.style.cursor = "pointer";

        td2.append(i2);

        tr.append(td2);

        let td3 = document.createElement("td");
        td3.append(i);

        tr.append(td3);

        let td4 = document.createElement("td");
        td4.setAttribute("class", "name");
        td4.innerHTML = studends[i].name;

        tr.append(td4);

        let td5 = document.createElement("td");
        td5.setAttribute("class", "family");
        td5.innerHTML = studends[i].lastName;

        tr.append(td5);

        let td6 = document.createElement("td");
        td6.setAttribute("class", "email");
        td6.innerHTML = studends[i].email;

        tr.append(td6);

        let td7 = document.createElement("td");
        td7.setAttribute("class", "phone");
        td7.innerHTML = studends[i].phone;

        tr.append(td7);

        tbody.append(tr);

    }


}