class Admin {
  addStudent(student) {
    let stuID = localStorage.getItem('key');
    let students = new Map(JSON.parse(localStorage.getItem('Students')));
    students.set(stuID, student);
    stuID++;
    localStorage.setItem('key', stuID);
    localStorage.setItem('Students', JSON.stringify(Array.from(students)));
    return students;
  }

  getStudent() {
    let students = new Map(JSON.parse(localStorage.getItem('Students')));
    return students;
  }

  deleteStudent(id) {
    let students = new Map(JSON.parse(localStorage.getItem('Students')));
    console.log(id);
    students.delete(id.toString());
    localStorage.setItem('Students', JSON.stringify(Array.from(students)));
    return students;
  }

  search(key) {
    let check = key.toString();
    console.log("inside the search function");
    let students = new Map(JSON.parse(localStorage.getItem('Students'))); //console.log(students);

    let show = new Map();
    students.forEach((n, i) => {
      let count = 0;

      for (let i = 0; i < n.stuCerti.length; i++) {
        console.log(n.stuCerti[i].startsWith(check));
      }

      while (count != 10) {
        //console.log(JSON.stringify(n.stuCerti[count].startsWith(check)))
        if (n.stuCerti[count] == check || n.special[count] == check) {
          show.set(i, n);
        }

        count++;
      }
    });
    return show;
  }

  emailValid(mail) {
    let flag = 0;
    let students = new Map(JSON.parse(localStorage.getItem('Students')));
    students.forEach((n, i) => {
      // console.log(n.stuEmail.startsWith(mail));
      if (n.stuEmail.startsWith(mail)) {
        flag = 1;
      }
    });
    return flag;
  }

  keyGenerate(key) {
    let flag = 0;
    let students = new Map(JSON.parse(localStorage.getItem('Students')));
    students.forEach((n, i) => {
      if (n.stuName == key) {
        flag = 1;
      }
    });

    if (flag) {
      var data = '';
      var date = new Date();
      var month = new Date();
      var year = new Date();
      data = date.getDate().toString() + month.getMonth() + year.getFullYear();
      var keyset = data.toString() + key.slice(0, 3);
      console.log(keyset);
      return keyset;
    } else {
      return key;
    }
  }

}
