function functionClickFaculty() {
    var input, filter, table, tr, td, txtValue;
    input = document.getElementById("facultyDropdown");
    filter = input.value;
    table = document.getElementById("studentTable");
    tr = table.getElementsByTagName("tr");
    for (var i=0;i<tr.length; i++){
      td=tr[i].getElementsByTagName("td")[3];
      if(td){
        txtValue=td.textContent || td.innerText;
        if(txtValue.indexOf(filter)>-1){
          tr[i].style.display="";
        }else{
          tr[i].style.display="none";
        }
      }
    }
    console.log(input);
  }
  function functionClickProdi() {
    var input, filter, table, tr, td, txtValue;
    input = document.getElementById("prodiDropdown");
    filter = input.value;
    table = document.getElementById("studentTable");
    tr = table.getElementsByTagName("tr");
    for (var i=0;i<tr.length; i++){
      td=tr[i].getElementsByTagName("td")[4];
      if(td){
        txtValue=td.textContent || td.innerText;
        if(txtValue.indexOf(filter)>-1){
          tr[i].style.display="";
        }else{
          tr[i].style.display="none";
        }
      }
    }
    console.log(input);
  }
  function functionSearch() {
    var input, filter, table, tr, td, txtValue;
    input = document.getElementById("searchStudent");
    filter = input.value.toUpperCase();
    table = document.getElementById("studentTable");
    tr = table.getElementsByTagName("tr");
    for (var i=0;i<tr.length; i++){
      td=tr[i].getElementsByTagName("td")[1];
      if(td){
        txtValue=td.textContent || td.innerText;
        if(txtValue.toUpperCase().indexOf(filter)>-1){
          tr[i].style.display="";
        }else{
          tr[i].style.display="none";
        }
      }
    }
    console.log(input);
  }
  const prodiFromFaculty = {
    none: ["-- SELECT FACULTY --"],
    "Akademi Sekretari Manajemen Indonesia Klabat": [
      "-- SELECT PROGRAM OF STUDY --",
      "Sekretari (D3)",
    ],
    "Fakultas Ekonomi dan Bisnis": [
      "-- SELECT PROGRAM OF STUDY --",
      "Manajemen",
      "Akuntansi",
    ],
    "Fakultas Filsafat": ["-- SELECT PROGRAM OF STUDY --", "Ilmu Filsafat"],
    "Fakultas Ilmu Komputer": [
      "-- SELECT PROGRAM OF STUDY --",
      "Informatika",
      "Sistem Informasi",
    ],
    "Fakultas Keguruan dan Ilmu Pendidikan": [
      "-- SELECT PROGRAM OF STUDY --",
      "Pendidikan Agama",
      "Pendidikan Bahasa Inggris",
      "Pendidikan Ekonomi",
      "Pendidikan Luar Sekolah",
    ],
    "Fakultas Keperawatan": ["-- SELECT PROGRAM OF STUDY--", "Keperawatan"],
    "Fakultas Pertanian": [
      "-- SELECT PROGRAM OF STUDY --",
      "Agronomi",
      "Budidaya Pertanian",
    ],
    "Pascasarjana": [
      "-- SELECT PROGRAM OF STUDY --",
      "Magister Manajemen",
      "Magister Teologi",
      "Profesi Ners",
    ],
  };
  
  
  function changeListForm(value) {
    if (value.length == 0)
      document.getElementById("prodiDropdownForm").innerHTML =
        "<option></option>";
    else {
      var catOptions = "";
      for (facultyId in prodiFromFaculty[value]) {
        catOptions +=
          "<option>" + prodiFromFaculty[value][facultyId] + "</option>";
      }
      document.getElementById("prodiDropdownForm").innerHTML = catOptions;
    }
  }
  function changeList(value) {
    if (value.length == 0)
      document.getElementById("prodiDropdown").innerHTML = "<option></option>";
    else {
      var catOptions = "";
      for (facultyId in prodiFromFaculty[value]) {
        catOptions +=
          "<option>" + prodiFromFaculty[value][facultyId] + "</option>";
      }
      document.getElementById("prodiDropdown").innerHTML = catOptions;
    }
  }
  function hideForm() {
    var x = document.getElementById("myForm");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  var validating;
  function validateForm() {
    var x = document.forms["myForm"]["studentIdBox"].value;
    var y = document.forms["myForm"]["studentNameBox"].value;
    var z = document.forms["myForm"]["facultyDropdownForm"].value;
    var v = document.forms["myForm"]["prodiDropdownForm"].value;
    var w = (document.querySelector('input[name="radio"]:checked'));
    var xTemp, yTemp, zTemp, vTemp;
    if (x == "") {
      // alert("Student's ID must be filled out");
      xTemp = false;
    } else {
      xTemp = true;
    }
  
    if (y == "") {
      // alert("Student's Name must be filled out");
      yTemp = false;
    } else {
      yTemp = true;
    }
  
    if (z == "none") {
      // alert("Student's Faculty must be selected");
      zTemp = false;
    } else {
      zTemp = true;
    }
  
    if (v == "-- SELECT PROGRAM OF STUDY --") {
      alert("Student's program of study must be selected");
      vTemp = false;
  
    } else {
      vTemp = true;
    }
    if (w == null){
      // alert("Student's gender must be choosed");
      wTemp = false;
      
    }else{wTemp = true;}
      
    
    if (xTemp == true && yTemp == true && zTemp == true && vTemp == true && wTemp==true) {
      validating = true;
    } else {
      validating = false;
    }
    // console.log(vTemp); debug
  
    console.log(validating);
    return 0;
  }
  function addStudents() {
    var tes = document.getElementById("studentIdBox").value;
    console.log(tes);
    if (validating == true) {
      // Get student pe data - data
  
      var studentId = document.getElementById("studentIdBox").value;
      var studentName = document.getElementById("studentNameBox").value;
      var x = document.querySelector('input[name="radio"]:checked');
      var studentGender = x ? x.value : "";
      var studentFaculty = document.getElementById("facultyDropdownForm").value;
      var studentProdi = document.getElementById("prodiDropdownForm").value;
      var rowDelete =
        '<button id="rowDelete" class="deleteButton" value="delete" onclick="deleteRowFunction(this)"><i class="fas fa-user-minus"></i></button>';
      var arrayStudent = [
        studentId,
        studentName,
        studentGender,
        studentFaculty,
        studentProdi,
        rowDelete,
      ];
      console.log(arrayStudent);
      // Deklarasi tabel
      var table = document.getElementById("studentTable");
      var row = table.insertRow("studentTable"[length - 1]);
  
      // Deklarasi cell baru kong insert student-
      // pe data yang aktiv(form) kedalam variable array
      var cell = [];
      for (var i = 0; i < 6; i++) {
        cell.push(row.insertCell(i));
      }
      // Mo tampilkan student pe data di table
      for (var i = 0; i < 6; i++) {
        cell[i].innerHTML = arrayStudent[i];
      }
      // mo delete form setelah submit
      document.getElementById("studentIdBox").value = "";
      document.getElementById("studentNameBox").value = "";
      var w = (document.querySelector(
        'input[name="radio"]:checked'
      ).checked = false);
      document.getElementById("facultyDropdownForm").selectedIndex = 0;
      document.getElementById("prodiDropdownForm").selectedIndex = 0;
    }
  }
  function deleteRowFunction(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  var form = document.getElementById("myForm");
  function handleForm(event) {
    event.preventDefault();
  }
  form.addEventListener("submit", handleForm);