// Handle form submission and display entered data
document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.getAll("skills").forEach(skill => {
        if (data.skills) {
            data.skills += `, ${skill}`;
        } else {
            data.skills = skill;
        }
    });
    formData.delete("skills");
    formData.forEach((value, key) => {
        data[key] = value;
    });
    displayFormData(data);
});

// Function to display the entered data
function displayFormData(data) {
    const displayDiv = document.getElementById("displayData");
    displayDiv.innerHTML = `
        <h2>Entered Data:</h2>
        <p><strong>First Name:</strong> ${data.firstName}</p>
        <p><strong>Last Name:</strong> ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Gender:</strong> ${data.gender}</p>
        <p><strong>Skills:</strong> ${data.skills}</p>
      `;

    // Display the uploaded image
    const displayImageDiv = document.getElementById("displayImage");
    if (data.studentImg) {
        displayImageDiv.innerHTML = `
          <h2>Student Image:</h2>
          <img src="${URL.createObjectURL(data.studentImg)}" alt="Student Image">
        `;
    } else {
        displayImageDiv.innerHTML = '';
    }
}