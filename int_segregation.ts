
// интерфейс с методами получения общей информации о человеке
interface PersonInterface {
  getInfo(): string;
  getFIO(): string;
}
// интерфейс с методами для получения информации о сотрудниках
interface EmployeeInterface {
  getStatus(): string;
}

// Абстрактный класс c методами и свойствами, общими для всех людей
abstract class Persons {
  protected _firstName: string;
  protected _lastName: string;
  protected _middleName: string;
  protected readonly _birthYear: number;
  protected _phone: string;
  protected _address: string;
  static count: number = 0;
  constructor(
    firstName: string,
    middleName: string,
    lastName: string,
    birthYear: number,
    phone: string,
    address: string
  ) {
    this._firstName = firstName;
    this._middleName = middleName;
    this._lastName = lastName;
    this._birthYear = birthYear;
    this._phone = phone;
    this._address = address;
    Persons.count++;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get middleName() {
    return this._middleName;
  }
  get birthYear() {
    return this._birthYear;
  }
  get phone() {
    return this._phone;
  }
  get address() {
    return this._address;
  }
  set firstName(firstName: string) {
    this._firstName = firstName;
  }
  set lastName(lastName: string) {
    this._lastName = lastName;
  }
  set middleName(middleName: string) {
    this._middleName = middleName;
  }
  set phone(phone: string) {
    this._phone = phone;
  }
  set address(address: string) {
    this._address = address;
  }
}

// Класс руководителей, реализующий оба интерфейса
class Supervisors
  extends Persons
  implements PersonInterface, EmployeeInterface
{
  protected _status: string;
  protected _department: string;
  static count: number = 0;
  constructor(
    firstName: string,
    middleName: string,
    lastName: string,
    birthYear: number,
    phone: string,
    address: string,
    status: string,
    department?: string
  ) {
    super(firstName, middleName, lastName, birthYear, phone, address);
    this._status = status;
    this._department = department || "отсутствует";
    Supervisors.count++;
  }
  get status() {
    return this._status;
  }
  set status(status: string) {
    this._status = status;
  }
  get deparment() {
    return this._department;
  }
  set deparment(department: string) {
    this._department = department;
  }
  getInfo(): string {
    return `${this.lastName} ${this.firstName.slice(
      0,
      1
    )}.${this.middleName.slice(0, 1)}., ${this.birthYear} г.р., должность: ${
      this.status
    }, департамент: ${this.deparment}, тел: ${this.phone}, адрес: ${
      this.address
    }`;
  }
  getFIO(): string {
    return `${this.lastName} ${this.firstName} ${this.middleName}`;
  }
  getStatus(): string {
    return `${this.status}, ${this.deparment}`;
  }
}

// Класс сотрудников, реализующий оба интерфейса
class Jobs extends Persons implements PersonInterface, EmployeeInterface {
  protected _status: string;
  protected _department: string;
  static count: number = 0;
  constructor(
    firstName: string,
    middleName: string,
    lastName: string,
    birthYear: number,
    phone: string,
    address: string,
    status: string,
    department?: string
  ) {
    super(firstName, middleName, lastName, birthYear, phone, address);
    this._status = status;
    this._department = department || "отсутствует";
    Jobs.count++;
  }
  get status() {
    return this._status;
  }
  set status(status: string) {
    this._status = status;
  }
  get deparment() {
    return this._department;
  }
  set deparment(department: string) {
    this._department = department;
  }
  getInfo(): string {
    return `${this.lastName} ${this.firstName.slice(
      0,
      1
    )}.${this.middleName.slice(0, 1)}., ${this.birthYear} г.р., должность: ${
      this.status
    }, департамент: ${this.deparment}, тел: ${this.phone}, адрес: ${
      this.address
    }`;
  }
  getFIO(): string {
    return `${this.lastName} ${this.firstName} ${this.middleName}`;
  }
  getStatus(): string {
    return `${this.status}, ${this.deparment}`;
  }
}

// Класс клиентов, реализующий только интерфейс PersonInterface
class Clients extends Persons implements PersonInterface {
  static count: number = 0;
  constructor(
    firstName: string,
    middleName: string,
    lastName: string,
    birthYear: number,
    phone: string,
    address: string
  ) {
    super(firstName, middleName, lastName, birthYear, phone, address);
    Clients.count++;
  }
  getInfo(): string {
    return `Клиент: ${this.lastName} ${this.firstName.slice(
      0,
      1
    )}.${this.middleName.slice(0, 1)}., ${this.birthYear} г.р., тел: ${
      this.phone
    }, адрес: ${this.address}`;
  }
  getFIO(): string {
    return `${this.lastName} ${this.firstName} ${this.middleName}`;
  }
}

const persons: PersonInterface[] = [];
persons[0] = new Supervisors(
  "Петр",
  "Сергеевич",
  "Иванов",
  1977,
  "+7(499)123-45-67",
  "105600, Москва, Короленко ул., 13-20",
  "Генеральный директор"
);
persons[1] = new Supervisors(
  "Иван",
  "Александрович",
  "Сидоров",
  1985,
  "+7(497)567-12-19",
  "101000, Москва, Ак. Королева ул., 19-13",
  "Директор отдела",
  "Маркетинг"
);
persons[2] = new Jobs(
  "Вера",
  "Павловна",
  "Петрова",
  1992,
  "+7(916)490-09-09",
  "125600, Москва, Проспект Мира, 18-205",
  "Менеджер",
  "Отдел продаж"
);
persons[3] = new Clients(
  "Иван",
  "Всеволодович",
  "Порфирьев",
  1971,
  "+7(909)999-55-22",
  "301600, Тула, Вербная ул., 27-19"
);
persons[4] = new Clients(
  "Инна",
  "Петровна",
  "Рогова",
  1995,
  "+7(919)888-12-91",
  "302900, Калуга, Гагарина ул., 1-198"
);

persons.forEach((e) => console.log(e.getInfo()));
console.log(
  `Всего людей: ${Persons.count}, сотрудников: ${
    Supervisors.count + Jobs.count
  }, из них руководителей: ${Supervisors.count}, клиентов: ${Clients.count}`
);
