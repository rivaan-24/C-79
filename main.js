// JavaScript source code
student_names = []

function submitButton() {
    var student_name1 = document.getElementById("student_name1").value;
    var student_name2 = document.getElementById("student_name2").value;
    var student_name3 = document.getElementById("student_name3").value;
    var student_name4 = document.getElementById("student_name4").value;
    student_names.push(student_name1);
    student_names.push(student_name2);
    student_names.push(student_name3);
    student_names.push(student_name4);
    console.log(student_names)
    document.getElementById("result_of_students_name").innerHTML = student_names;
    document.getElementById("submitButton").style.display = "none";
    document.getElementById("buttonSort").style.display = "inline-block";
}
function sorting_alphabetically() {
    student_names.sort();
    document.getElementById("result_of_students_name").innerHTML = student_names;
}