class PrintEditionItem {
  constructor(name,releaseDate,pagesCount){
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  };
fix(){
    this.state = this.state * 1.5;
    return this.state;
};
set state(state){
    if(state < 0){
      return this._state = 0;
    } else if(state > 100){
        return this._state = 100;
    } else{
        return this._state = state;
    }
};
get state(){
  return this._state;
};
}
class Magazine extends PrintEditionItem {
  constructor(name,releaseDate,pagesCount){
    super(name,releaseDate,pagesCount)
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author,name,releaseDate,pagesCount){
    super(name,releaseDate,pagesCount)
    this.author = author;
    this.type = "book";
  }
}
class NovelBook extends Book {
  constructor(author,name,releaseDate,pagesCount){
    super(author,name,releaseDate,pagesCount)
    this.type = "novel";
  }
}
class DetectiveBook extends Book {
  constructor(author,name,releaseDate,pagesCount){
    super(author,name,releaseDate,pagesCount)
    this.type = "detective";
  }
}
class FantasticBook extends Book {
  constructor(author,name,releaseDate,pagesCount){
    super(author,name,releaseDate,pagesCount)
    this.type = "fantastic";
  }
}

class Library {
  constructor(name,books){
    this.name = name;
    this.books = [];
  };
  addBook(book){
    if(book.state > 30){
     this.books.push(book);
     return this.books;
    } else {
        return this.books;
    };
  };
  findBookBy(type,value){
    for(let i = 0; i < this.books.length; i++){
      if(this.books[i][type] === value) return this.books[i];
    };
    return null
  };
  giveBookByName(bookName){
    for(let i = 0; i < this.books.length; i++){
      if(this.books[i].name === bookName) return this.books.splice([i],1)[0];
    };
    return null;
  };
}

class StudentLog {
  constructor(name){
    this.name = name;
    this.jornal = {
      geometry: [],
      algebra: []
    };
  };
  getName(){
    return this.name;
  };
  addGrade(grade,subject){
    if (grade >= 1 && grade <= 5 && subject === "algebra"){
        this.jornal['algebra'].push(grade);
        return this.jornal; 
    }  else if ( grade >= 1 && grade <= 5 && subject === "geometry"){
        this.jornal['geometry'].push(grade);
        //this.jornal.geometry.push(grade);
        return this.jornal; 
    } else {
      return (`Вы пытались поставить оценку ${grade}  по предмету  ${subject}. Допускаются только числа от 1 до 5.`)
    };
  }; 
  getAverageBySubject(subject){ 
    let averageRating;
    let sum = 0;

    if (subject === "algebra"){
      for(let i = 0; i < this.jornal['algebra'].length; i++){
        sum += this.jornal['algebra'][i];
        averageRating = sum / this.jornal['algebra'].length;
      }; 
      return `Средний балл по предмету ${subject} ${averageRating}`
    } else if (subject === "geometry"){
      for(let i = 0; i < this.jornal['geometry'].length; i++){
          sum += this.jornal['geometry'][i];
          averageRating = sum / this.jornal['geometry'].length;
      };
      return `Средний балл по предмету ${subject} ${averageRating}`;
    } else {
      return "Вы ввели несуществующий предмет!"
    };
  };
  
  getTotalAverage(){
    if (this.jornal['algebra'].length === 0 && this.jornal['geometry'].length === 0){
      return 0
    } else {
      let sumAverage = 0;
      let sumAverage1 = 0;
      let n = 0;
      let g = 0;
      let r;
      for(let i = 0; i < this.jornal['algebra'].length; i++){
        sumAverage += this.jornal['algebra'][i];  
        n = sumAverage / this.jornal['algebra'].length; 
      }
      for(let i = 0; i < this.jornal['geometry'].length; i++){
        sumAverage1 += this.jornal['geometry'][i];  
        g = sumAverage1 / this.jornal['geometry'].length; 
      }
      r = n + g; 
      return r / 2; 
    }
  }
}
