let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    let area = length * width
    document.getElementById("result").innerText = `The area of the rectangle is: ${area}`
   
}

function calculate_total_ammount() {
    l1 = parseFloat(document.getElementById('id1').value);
    l2 = parseFloat(document.getElementById('id2').value);
    l3 = parseFloat(document.getElementById('id3').value);
    let result = l1 * l2 * l3;
    document.getElementById("new_result").innerText = `The area of the rectangle is: ${result}`
   

}
