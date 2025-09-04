function generateInputs() {
  let num = document.getElementById("numSubjects").value;
  let subjectsDiv = document.getElementById("subjects");
  subjectsDiv.innerHTML = "";
  
  for (let i = 1; i <= num; i++) {
    subjectsDiv.innerHTML += 
      `<input type="number" step="0.01" min="0" max="10" id="sub${i}" placeholder="Enter GPA for Subject ${i}"><br>`;
  }
}

function calculateCGPA() {
  let num = document.getElementById("numSubjects").value;
  if(num == "" || num <= 0) {
    alert("Please enter valid number of subjects!");
    return;
  }

  let sum = 0;
  for (let i = 1; i <= num; i++) {
    let val = parseFloat(document.getElementById("sub"+i).value);
    if(isNaN(val) || val < 0 || val > 10) {
      alert(`Enter valid GPA (0-10) for Subject ${i}`);
      return;
    }
    sum += val;
  }
  let cgpa = (sum / num).toFixed(2);
  document.getElementById("result").innerHTML = "Your CGPA is: " + cgpa;
}
