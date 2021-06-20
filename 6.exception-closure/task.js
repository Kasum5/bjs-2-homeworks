function parseCount(value) {
  let parsed = Number.parseInt(value);
  if (isNaN(parsed)) {
    throw new Error ("Невалидное значение");
  };
  return parsed;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (e) {
    return e;
  };
}


class Triangle {
  constructor(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
    if (this.a > this.b + this.c || this.b > this.a + this.c ||  this.c > this.a + this.b) {
     throw new Error("Трегуогольник с такими сторонами не существует!");
  };
};

getPerimeter(){
  let perimeter = this.a + this.b + this.c;
  return perimeter;
};

getArea(){
  let perimeterHalf = this.a + this.b + this.c / 2;
  let square = Math.sqrt(perimeterHalf * (perimeterHalf - this.a) * (perimeterHalf - this.b) * (perimeterHalf - this.c));
  return  +square.toFixed(3);
};
}

function getTriangle(a,b,c) {
  try {
    return new Triangle(a,b,c);
  } catch(err){
    let methods = {
      getPerimeter: function(){
       return "Ошибка! Треугольник не существует!";
     },
     getArea: function(){
       return "Ошибка! Треугольник не существует!";
     },
   };
   return methods;
  };
}