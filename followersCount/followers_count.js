let count = 0;

// function increaseCount() {
//     count++;
// }

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
    }

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue();
}

function checkCountValue() {
    if (count === 10) {
        
        alert("your instagram post gain 10 followers");
    } else if(count ===20) {
        alert("your instagram post gain 20 followers");
    }
}