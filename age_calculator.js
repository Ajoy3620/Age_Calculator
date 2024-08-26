let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  let birthDate = new Date(userInput.value);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1; // Month is 0-based, hence +1
  let y1 = birthDate.getFullYear();

  let today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1; // Month is 0-based, hence +1
  let y2 = today.getFullYear();

  let d3, m3, y3;
  y3 = y2 - y1;

  if (m2 > m1 || (m2 === m1 && d2 >= d1)) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }

  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  // Update the content of input-box2 with the result
  let resultBox = document.getElementsByClassName("input-box2");
  document.getElementById(
    "displayAge"
  ).innerText = `Age: ${y3} years, ${m3} months, and ${d3} days`;
  //   console.log(`Age: ${y3} years, ${m3} months, and ${d3} days`);
}

// Define getDaysInMonth function correctly
function getDaysInMonth(year, month) {
  // Month is 1-based in this function; hence subtract 1 for Date constructor
  return new Date(year, month, 0).getDate();
}
