document.querySelector("#showAttendance").addEventListener('submit',function(event){
	event.preventDefault();
	var attendanceDate = document.getElementById('date-input').value;
	var attendanceClass = document.getElementById('select-class').value;
	console.log(attendanceClass);
	if (attendanceClass== '' || attendanceDate == '') {
		alert('Please Fill date and class');
	}else{
		document.getElementById('attendance-table').innerHTML = "";
		eel.fetchAttendance(attendanceClass, attendanceDate);
	}
});

eel.expose(attendanceTable);
function attendanceTable(student_id, fullname, attendanceClass, attendanceDate){
	document.getElementById('attendance-table').innerHTML +="<tr><th scope='row'>"+student_id+"</th><td>"+fullname+"</td><td>"+attendanceClass+"</td><td>"+attendanceDate+"</td></tr>";
}

//download report
function exportF(elem) {
  var table = document.getElementById("table");
  var html = table.outerHTML;
  var url = 'data:application/vnd.ms-excel,' + escape(html); // Set your html table into url 
  elem.setAttribute("href", url);
  elem.setAttribute("download", "report.xls");
  return false;
}