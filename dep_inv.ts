
//Интерфейс бекенда, от которого будет зависеть класс веб сервиса и который будет реализовываться в конкретных реализациях бекенда
interface Backend {

  DB: String;

  create(data: any): void;
  read(): String[];
  update(data: any): void;
  delete(data: any): void;
}


// Реализация бекенда на mySQL
class DBmySQL implements Backend {

  DB: String = "mySQL";  
  create(data: any): void {
    console.log("create");
  }
  read(): String[] {
    console.log(`read from ${this.DB}`);
    return [];
  }
  update(data: any): void {
    console.log("update");

  }
  delete(data: any): void {
    console.log("delete");
  }
}

// Реализация бекенда на MongoDB
class DBMongoDB implements Backend {  
  DB: String = "MongoDB";  
  create(data: String): void {
    console.log("create");
  }
  read(): String[] {
    console.log("read from MongoDB");
    return [];
  }
  update(data: any): void {
    console.log("update");

  }
  delete(): void {
    console.log("delete");
  }
}

// Веб сервис с зависимостью от интерфейса бекенда (абстракции), но не зависящий от конкретной реализации бекенда
class WebService {
  // зависимость от интерфейса бекенда (высшей абстракции)
  backend: Backend;
  constructor(backend: Backend) {
    this.backend = backend;
  }

   products: String[] = [];

  create(): void {
    this.backend.create(this.products);
  }
  getData(): void {
    this.products = this.backend.read();
  }
  updateProduct(): void {
    this.backend.update(this.products);
  }
  delete(): void {
    this.backend.delete(this.products);
  }
}

// экземпляры класса веб сервиса с разными реализациями бэкенда
const mySQLSite = new WebService(new DBmySQL());

const mongoSite = new WebService(new DBMongoDB());

mySQLSite.getData();
mongoSite.getData();