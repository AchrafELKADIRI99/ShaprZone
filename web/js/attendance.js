function start_video() {
  document.getElementById("attendees").innerHTML = "";
  document.getElementById("attendees-count").value = 0;
  var attendanceClass = document.getElementById("live-attendance-class").value;
  alert("cc");
  if (attendanceClass == "") {
    alert("Please Select Class First");
  } else {
    var cameraType = document.getElementById("camera-type").value;

      eel.start_video_py(cameraType, attendanceClass);

  }
}
function stop_video() {
  eel.stop_video_py();
}

//update cam icon
eel.expose(updateImageSrc);
function updateImageSrc(val) {
  let elem = document.getElementById("video");
  elem.src = "data:image/jpeg;base64," + val;
}
eel.expose(camera_status);
function camera_status(status_value) {
  switch (status_value) {
    case 0:
      document.getElementById("camera-status").innerText = "Disconnected";
      document.getElementById("camera-status").style.color = "Red";
      break;
    case 1:
      document.getElementById("camera-status").innerText = "Connected";
      document.getElementById("camera-status").style.color = "Green";
      break;
    case 2:
      document.getElementById("camera-status").innerText =
        "Camera not found ! Please check and try";
      document.getElementById("camera-status").style.color = "red";
      break;
    case 3:
      document.getElementById("camera-status").innerText = "Loading Camera";
      document.getElementById("camera-status").style.color = "Green";
      break;
  }
}

eel.expose(updateAttendance);
function updateAttendance(val) {
  let elem = document.getElementById("attendees");
  elem.innerHTML += "<tr><td>" + val + "</td></tr>";
  var count = parseInt(document.getElementById("attendees-count").value);

  document.getElementById("attendees-count").value = count + 1;
}






;
