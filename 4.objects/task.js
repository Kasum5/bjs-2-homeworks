function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
    // Ваш код
}

Student.prototype.setSubject = function (subjectName) {
  this.subjectName = subjectName;
  //ваш код
}

Student.prototype.addMark = function (mark) {
  this.marks = [];
  if(this.marks === undefined) { 
    return this.marks;
  } else {
    return this.marks.push(mark);
      // добавить вторую и последующие оценки в массив
    }
}

Student.prototype.addMarks = function (...mark) {
  this.marks = [];
  for(let i = 0; i < mark.length; i++){
    this.marks.push(mark[i]);
  }

}

Student.prototype.getAverage = function () {
  let sum = 0;
  for(let i = 0; i < this.marks.length; i++){
    sum += this.marks[i];
    getAverage = sum / this.marks.length;
    return getAverage;

  }
}

Student.prototype.exclude = function (reason) {
  delete this.subjectName;
  delete this.marks;
  this.excluded = reason;
}

// ваш код для остальных методов
