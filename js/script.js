const DATA_URL = "json/data.json";

fetch(DATA_URL)
  .then(response => response.json())
  .then(data => {
    if (Array.isArray(data.students)) {
      showData(data.students);
    } else {
      console.error("El dato obtenido no es un array");
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

function showData(students) {
  const container = document.getElementById('container'); // Ensure container has an ID
  container.innerHTML = ''; // Clear previous content (optional)

  for (const student of students) {
    container.innerHTML += `<p> ${student.name} ${student.lastname} </p>`;
  }
}