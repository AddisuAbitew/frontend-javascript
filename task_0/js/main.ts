// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Addisu",
  lastName: "Kebede",
  age: 24,
  location: "Addis Ababa",
};

const student2: Student = {
  firstName: "Sara",
  lastName: "Tesfaye",
  age: 22,
  location: "Dire Dawa",
};

// Create an array containing the students
const studentsList: Student[] = [student1, student2];

// Create and render a table
const table = document.createElement("table");
const tableHead = document.createElement("thead");
const headerRow = document.createElement("tr");

const header1 = document.createElement("th");
header1.textContent = "First Name";
const header2 = document.createElement("th");
header2.textContent = "Location";

headerRow.appendChild(header1);
headerRow.appendChild(header2);
tableHead.appendChild(headerRow);
table.appendChild(tableHead);

// Add students as rows
const tableBody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
