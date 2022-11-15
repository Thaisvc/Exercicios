// 🚀 Exercício 1: A classe pessoa no nosso sistema hoje é uma classe comum que pode ser instanciada, ou seja, conseguimos criar novas pessoas diretamente. Porém isso não faz sentido, já que nossa classe pessoa é apenas uma abstração para ser herdada por outras classes do sistema como pessoa estudante e pessoa professora. Refatore nossa classe pessoa de forma que não possamos mais criar diretamente instâncias de pessoa, somente das classes que herdam dela.




// Person.ts

export default abstract class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  private validateName(value: string): void {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
  }

  private validateBirthDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }
    if (Person.getAge(value) > 120) {
      throw new Error('A pessoa deve ter no máximo 120 anos.');
    }
  }
}
// /* Para testar */!

// ./index.ts

import Person from './Person';
import Teacher from './Teacher';
import Student from './Student';
import Subject from './Subject';

// tentar fazer isso agora deve gerar um erro
// já que nossa classe se tornou abstrata e não podemos criar instânicas de classes abstratas
const pessoa = new Person('Carolina da Silva', new Date('2005/03/17'));

// isso não deve gerar nenhum erro
const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
console.log(carolina);

const math = new Subject('Matemática');
// isso também não deve gerar nenhum erro
const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
console.log(marta);
/* 🚀 Exercício 2: Notamos também que tanto nossa classe de pessoa estudante quanto a classe de pessoa professora possuem um método parecido, que retorna uma string única gerada para servir de identificador daquele tipo de pessoa (respectivamente, a matrícula e o registro). Para termos mais reuso de código e adequar melhor nosso sistema à POO:

A: Transforme nossa interface de pessoa funcionária em uma classe de pessoa funcionária que herda da nossa classe pessoa.

B: Faça com que nossa classe de pessoa professora herde da classe de pessoa funcionária.

C: Por último crie uma nova interface que será implementada por nossas classes pessoa estudante e pessoa funcionária que dirá que a instância delas deve ser matriculável.

Nossa nova modelagem para esses componentes ficará assim:


`Interface`: Enrollable
`Attributes`:
    - enrollment: identificador único da matrícula
`Methods`:
    - generateEnrollment: retorna uma string única gerada como matrícula

`Class`: Student
`Extends`: Person
`Implements`: Enrollable
`Attributes`:
    - examsGrades: notas de provas
    - worksGrades: notas de trabalhos
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome e data de nascimento e preencher a matrícula automaticamente
    - sumGrades: retorna a soma das notas da pessoa estudante
    - sumAverageGrade: retorna a média das notas da pessoa estudante
`Validations`:
    - A matrícula deve possuir no mínimo 16 caracteres
    - A pessoa estudante deve possuir no máximo 4 notas de provas
    - A pessoa estudante deve possuir no máximo 2 nostas de trabalhos

`Class`: Employee
`Extends`: Person
`Implements`: Enrollable
`Attributes`:
    - salary: valor do salário
    - admissionDate: data de admissão
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome, data de nascimento, salário e preencher a matrícula automaticamente
`Validations`:
    - A matrícula deve possuir no mínimo 16 caracteres
    - O salário não pode ser negativo.
    - A data de admissão não pode ser no futuro

`Class`: Teacher
`Extends`: Employee
`Attributes`:
    - subject: a disciplina lecionada pela pessoa professora
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome, data de nascimento, salário e a disciplina
`Validations`:
    - A matrícula deve possuir no mínimo 16 caracteres
    - O salário não pode ser negativo.
    - A data de admissão não pode ser no futuro
/* Para testar  crie duas pessoas estudantes e duas pessoas professoras.

 
*/

// Enrollable.ts

export default interface Enrollable {
  enrollment: string;
  generateEnrollment(): string;
}

// Student.ts

import Enrollable from './Enrollable';
import Person from './Person';

export default class Student extends Person implements Enrollable {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
    }

    this._enrollment = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }

    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error(
        'A pessoa estudante só pode possuir 2 notas de trabalhos.',
      );
    }

    this._worksGrades = value;
  }

  sumGrades(): number {
    return [...this.examsGrades, ...this.worksGrades]
      .reduce((previousNote, note) => note + previousNote, 0);
  }

  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this.examsGrades.length + this.worksGrades.length;

    return Math.round(sumGrades / divider);
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1))
      .replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}

// Employee.ts

import Enrollable from './Enrollable';
import Person from './Person';

export default class Employee extends Person implements Enrollable {
  private _enrollment = String();
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, private _salary: number) {
    super(name, birthDate);

    this.salary = _salary;
    this._admissionDate = new Date();
    this.enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
    }

    this._enrollment = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) throw new Error('O salário não pode ser negativo.');

    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('A data de admissão não pode ser uma data no futuro.');
    }

    this._admissionDate = value;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FUNC${randomStr}`;
  }
}

// Teacher.ts

import Subject from './Subject';
import Employee from './Employee';

export default class Teacher extends Employee {
  private _subject: Subject;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate, salary);

    this._subject = subject;
    this.enrollment = this.generateEnrollment();
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
  }
}
// /* Para testar */!

// ./index.ts

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
console.log(carolina);
console.log(lucas);

const math = new Subject('Matemática');
const history = new Subject('História');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
console.log(marta);
console.log(joao);
/* Exercício 3: Vamos agora melhorar um pouco nossa classe de pessoa estudante. Para isso vamos criar uma nova classe cujas as instâncias representam as avaliações aplicadas pela escola e a nossa pessoa estudante agora passará a ter como propriedade uma unica lista que carrega os resultados das avaliações que ela realizou. A nossa classe avaliações conterá a pontuação da avaliação, a pessoa professora e o tipo de avaliação. A nossa classe de resultado de avaliação conterá a avaliação e a nota da pessoa estudante.


`Class`: Evaluation
`Attributes`:
    - score: nota da avaliação
    - teacher: pessoa professora
    - type: tipo da avaliação
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro a pontuação, a pessoa professora e o tipo
`Validations`:
    - O tipo da avaliação aceita os seguintes valores: "prova" e "trabalho"
    - A pontuação não pode ser negativa
    - A pontuação caso a avaliação seja do tipo "prova" não pode passar de 25 pontos
    - A pontuação caso seja do tipo "trabalho" não pode passar de 50 pontos

`Class`: EvaluationResult
`Attributes`:
    - evaluation: a avaliação
    - score: a nota da pessoa estudante
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro a avaliação e a nota da pessoa estudante
`Validations`:
    - A pontuação não pode ser negativa
    - A pontuação não pode ser maior que a pontuação da avaliação.

`Class`: Student
`Extends`: Person
`Implements`: Enrollable
`Attributes`:
    - evaluationsResults: lista de resultados de avaliações
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome e data de nascimento e preencher a matrícula automaticamente
    - sumGrades: retorna a soma das notas da pessoa estudante
    - sumAverageGrades: retorna a média das notas da pessoa estudante
    - addEvaluationResult: adiciona um novo resultado de avaliação a lista
`Validations`:
    - A matrícula deve possuir no mínimo 16 caracteres


 */
// Evaluation.ts

import Teacher from './Teacher';

export default class Evaluation {
  private _teacher: Teacher;

  constructor(teacher: Teacher, private _score: number, private _type: string) {
    this._teacher = teacher;
    this.type = _type;
    this.score = _score;
  }

  get teacher(): Teacher {
    return this._teacher;
  }

  set teacher(value: Teacher) {
    this._teacher = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    if (value < 0) throw new Error('A pontução deve ser positiva.');

    if (this.type === 'prova' && value > 25) {
      throw new Error('A pontução deve ser menor que 25 pontos.');
    }

    if (this.type === 'trabalho' && value > 50) {
      throw new Error('A pontução deve ser menor que 50 pontos.');
    }

    this._score = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    if (!['prova', 'trabalho'].includes(value)) {
      throw new Error('O tipo de avaliação não é válido.');
    }

    this._type = value;
  }
}

// EvaluationResult.ts

import Evaluation from './Evaluation';

export default class EvaluationResult {
  private _evaluation: Evaluation;

  constructor(evaluation: Evaluation, private _score: number) {
    this._evaluation = evaluation;
    this.score = _score;
  }

  get evaluation(): Evaluation {
    return this._evaluation;
  }

  set evaluation(value: Evaluation) {
    this._evaluation = value;
  }

  get score(): number {
    return this._score;
  }

  validateValueThreshold(value: number, type: string, threshold: number) {
    if (this.type === type && value > threshold) {
      throw new Error(`A pontução deve ser menor que ${threshold} pontos.`);
    }
  }

  set score(value: number) {
    if (value < 0) throw new Error('A pontução deve ser positiva.');
    this.validateValueThreshold(value, 'prova', 25);
    this.validateValueThreshold(value, 'trabalho', 50);
    this._score = value;
  }
}

// Student.ts

import Enrollable from './Enrollable';
import Person from './Person';
import EvaluationResult from './EvaluationResult';

export default class Student extends Person implements Enrollable {
  private _enrollment = String();
  private _evaluationsResults: EvaluationResult[];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
    this._evaluationsResults = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
    }

    this._enrollment = value;
  }

  get evaluationsResults(): EvaluationResult[] {
    return this._evaluationsResults;
  }

  sumGrades(): number {
    return [...this._evaluationsResults]
      .reduce((previousNote, note) => note.score + previousNote, 0);
  }

  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this._evaluationsResults.length;

    return Math.round(sumGrades / divider);
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

  addEvaluationResult(value: EvaluationResult): void {
    this._evaluationsResults.push(value);
  }
}
/* Exercício 4: Ótimo! Já evoluímos bastante nosso sistema escolar, mas ainda há algumas melhorias a serem feitas. Nossa classe de avaliação está carregando muita responsabilidade tendo que lidar com tipos diferentes de avaliação. Então, vamos refatorar nosso sistema pra que cada tipo de avaliação passe a ser uma especialização da nossa classe de avaliação e, assim como para nossa classe de pessoa, não faz sentido termos instâncias de avaliação no nosso sistema somente de suas especializações.


`Abstract Class`: Evaluation
`Attributes`:
    - score: nota da avaliação
    - teacher: pessoa professora
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro a pontuação, a pessoa professora
`Validations`:
    - A pontuação não pode ser negativa

`Class`: Exam
`Extends`: Evaluation
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro a pontuação, a pessoa professora
`Validations`:
    - A pontuação não pode ser negativa
    - A pontuação não pode passar de 25 pontos

`Class`: Work
`Extends`: Evaluation
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro a pontuação, a pessoa professora
`Validations`:
    - A pontuação não pode ser negativa
    - A pontuação não pode passar de 50 pontos
/* Para testar  crie 2 avaliações para cada pessoa professora criada no exercício 2, uma do tipo prova e outra do tipo trabalho, e adicione um resultado para cada avaliação para as duas pessoas estudantes que também foram criadas no exercício 2.

 */


// Evaluation.ts

import Teacher from './Teacher';

export default class Evaluation {
  private _teacher: Teacher;

  constructor(teacher: Teacher, private _score: number) {
    this._teacher = teacher;
    this.score = _score;
  }

  get teacher(): Teacher {
    return this._teacher;
  }

  set teacher(value: Teacher) {
    this._teacher = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    if (value < 0) throw new Error('A pontução deve ser positiva.');

    this._score = value;
  }
}

// Exam.ts

import Teacher from './Teacher';
import Evaluation from './Evaluation';

export default class Exam extends Evaluation {
  constructor(teacher: Teacher, score: number) {
    super(teacher, score);
  }

  set score(value: number) {
    if (value > 25) {
      throw new Error('A pontução deve ser menor que 25 pontos.');
    }

    super.score = value;
  }
}

// Work.ts

import Teacher from './Teacher';
import Evaluation from './Evaluation';

export default class Work extends Evaluation {
  constructor(teacher: Teacher, score: number) {
    super(teacher, score);
  }

  set score(value: number) {
    if (value > 50) throw new Error('A pontução deve ser menor que 50 pontos.');

    super.score = value;
  }
}
// Para testar 

// ./index.ts

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));

const math = new Subject('Matemática');
const history = new Subject('História');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);

const examMath = new Exam(marta, 25);
const workMath = new Work(marta, 50);
const examHistory = new Exam(joao, 25);
const workHistory = new Work(joao, 50);

carolina.addEvaluationResult(new EvaluationResult(examMath, 23));
carolina.addEvaluationResult(new EvaluationResult(workMath, 42));
carolina.addEvaluationResult(new EvaluationResult(examHistory, 25));
carolina.addEvaluationResult(new EvaluationResult(workHistory, 50));

console.log('Avaliações: ', carolina.evaluationsResults);
console.log('Soma das notas: ', carolina.sumGrades());
console.log('Média das notas: ', carolina.sumAverageGrades());

lucas.addEvaluationResult(new EvaluationResult(examMath, 25));
lucas.addEvaluationResult(new EvaluationResult(workMath, 49));
lucas.addEvaluationResult(new EvaluationResult(examHistory, 20));
lucas.addEvaluationResult(new EvaluationResult(workHistory, 50));

console.log('Avaliações: ', lucas.evaluationsResults);
console.log('Soma das notas: ', lucas.sumGrades());
console.log('Média das notas: ', lucas.sumAverageGrades());
/* Exercício 5: Você se lembra daquele pequeno software de uma lanchonete que nós começamos a construir no primeiro dia? Então, vamos retomá-lo agora. A nossa escola possui uma lanchonete e, pra fazer a gerência da mesma, vamos adicionar ao nosso sistema escolar um módulo de lanchonete. Para isso precisamos transportar nossas classes referentes a lanchonete para dentro dele, fazendo algumas alterações para alinhá-lo melhor com a realidade da nossa escola.

Toda pessoa da nossa escola passa a ser uma pessoa cliente da nossa lanchonete. Sendo assim, não precisamos mais da nossa classe de pessoa cliente, e precisamos mudar o tipo de cliente no pedido para o tipo pessoa. Então, vamos alterar nossas classes do módulo de lanchonete para que contemple isso. Nossa modelagem inicial será essa:


`Class`: OrderItem
`Attributes`:
    - name: nome do produto
    - price: preco do produto
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro o nome do produto e o preço.
`Validations`:
    - O nome do produto deve conter pelo menos 3 caracteres
    - O preço não pode ser negativo

`Class`: Order
`Attributes`:
    - client: pessoa cliente
    - items: os itens consumidos
    - paymentMethod: a forma de pagamento (ex: “cartão”, “dinheiro”)
    - discount: o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro a pessoa cliente, os itens do pedido, a forma de pagamento, e o disconto caso exista
    - calculateTotal: retorna o valor total do pedido
    - calculateTotalWithDiscount: retorna o valor total do pedido aplicando o desconto.
`Validations`:
    - A pessoa cliente deve ser uma instância da nossa classe pessoa
    - O pedido deve ter pelo menos um item
    - A forma de pagamento só pode ser uma dessas três: "dinheiro", "cartão", "vale"
    - O disconto não pode ser negativo
/* Para testar  realize um pedido para cada pessoa criada no nosso exercício 2 em nossa lanchonete.

 */


// OrderItem.ts

export default class OrderItem {
  constructor(private _name: string, private _price: number) {
    this.name = _name;
    this.price = _price;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value < 0) throw new Error('O preço deve ser positivo.');
    this._price = value;
  }
}

// Order.ts

import OrderItem from './OrderItem';
import Person from './Person';

export default class Order {
  private _client: Person;
  private _items: OrderItem[] = [];
  private _discount = 0;

  constructor(client: Person, items: OrderItem[], private _paymentMethod: string, discount?: number) {
    this._client = client;
    this.items = items;
    this.paymentMethod = _paymentMethod;

    if (discount) this.discount = discount;
  }

  get client(): Person {
    return this._client;
  }

  set client(value: Person) {
    this._client = value;
  }

  get items(): OrderItem[] {
    return this._items;
  }

  set items(value: OrderItem[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }
    this._items = value;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    if (!['dinheiro', 'cartão', 'vale'].includes(value)) {
      throw new Error('A forma de pagamento não é válida.');
    }
    this._paymentMethod = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }
    this._discount = value;
  }

  calculateTotal(): number {
    return this.items
      .reduce((previousValue, item) => previousValue + item.price, 0);
  }

  calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - this.discount);
  }
}
/* Para testar */!

// ./index.ts

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));

const math = new Subject('Matemática');
const history = new Subject('História');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);

const sandwiche = new OrderItem('Sandwiche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxí', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const carolinaOrder = new Order(carolina, [sandwiche, juice, dessert], 'dinheiro', 0.10);
const lucasOrder = new Order(lucas, [sandwiche, juice], 'dinheiro', 0.10);
const martaOrder = new Order(marta, [sandwiche, juice], 'cartão');
const joaoOrder = new Order(joao, [sandwiche, juice, dessert], 'cartão');

console.log('Pedido da Carolina: ', carolinaOrder);
console.log('Pedido do Lucas: ', lucasOrder);
console.log('Pedido da Marta: ', martaOrder);
console.log('Pedido do João: ', joaoOrder);
/* Exercício 6: Agora vamos gerar alguns relatórios das vendas da lanchonete da escola em nosso sistema. Para isso, crie uma classe onde trataremos como um repositório para nossos pedidos (você não precisa se atentar para essa nomenclatura nesse momento). Essa classe terá uma lista com os pedidos realizados. Além disso, teremos os seguintes métodos:

Adicionar pedido (que adiciona um pedido a lista);
Remover pedido (que remove um pedido da lista);
Buscar pedido por cliente (que recebe uma pessoa cliente por parâmetro e busca todos os pedidos dela);
Ordenar pedidos por valor (que recebe por parâmetro uma ordem e devolve a lista de pedidos ordenada por valor do maior para o menor ou vice-versa).

`Class`: OrderRepository
`Attributes`:
    - orders: lista de pedidos
`Methods`:
    - addOrder: recebe um pedido por parâmetro e adiciona a lista
    - removeOrder: recebe um pedido por parâmetro e o remove da lista
    - listByClient: recebe uma pessoa cliente por parâmetro e devolve todos os pedidos dela
    - listBySortedValue: recebe por parâmetro uma string, podendo ser "maior" ou "menor" e retorna a lista de pedidos ordenada do maior valor para o menor ou vice-versa
Além disso vamos precisar também alterar nossa classe de pedido para adicionarmos um identificador único a cada pedido e a data em que o pedido foi realizado:


`Class`: Order
`Attributes`:
    - id: identificador único do pedido
    - createdAt: data em que o pedido foi criado
    - client: pessoa cliente
    - items: os itens consumidos
    - paymentMethod: a forma de pagamento (ex: “cartão”, “dinheiro”)
    - dicount: o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro a pessoa cliente, os itens do pedido, a forma de pagamento, e o disconto caso exista, além disso deve setar o valor para o id e a data de criação do pedido
    - calculateTotal: retorna o valor total do pedido
    - calculateTotalWithDiscount: retorna o valor total do pedido aplicando o desconto.
`Validations`:
    - O identificador do pedido deve ser um número único gerado aleatóriamente
    - A data do pedido não pode ser no futuro
    - A pessoa cliente deve ser uma instância da nossa classe pessoa
    - O pedido deve ter pelo menos um item
    - A forma de pagamento só pode ser uma dessas três: "dinheiro", "cartão", "vale"
    - O desconto não pode ser negativo

 */

// Order.ts

import OrderItem from './OrderItem';
import Person from './Person';

export default class Order {
  private _id: number;
  private _createdAt: Date;
  private _client: Person;
  private _items: OrderItem[] = [];
  private _discount = 0;

  constructor(client: Person, items: OrderItem[], private _paymentMethod: string, discount?: number) {
    this._id = Math.trunc(Date.now() * (Math.random() + 1));
    this._createdAt = new Date();
    this._client = client;
    this.items = items;
    this.paymentMethod = _paymentMethod;

    if (discount) this.discount = discount;
  }

  get id(): number {
    return this._id;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get client(): Person {
    return this._client;
  }

  set client(value: Person) {
    this._client = value;
  }

  get items(): OrderItem[] {
    return this._items;
  }

  set items(value: OrderItem[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }
    this._items = value;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    if (!['dinheiro', 'cartão', 'vale'].includes(value)) {
      throw new Error('A forma de pagamento não é válida.');
    }
    this._paymentMethod = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }
    this._discount = value;
  }

  calculateTotal(): number {
    return this.items
      .reduce((previousValue, item) => previousValue + item.price, 0);
  }

  calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - this.discount);
  }
}

// OrderRepository.ts

import Order from './Order';
import Person from './Person';

export default class OrderRepository {
  private _orders: Order[] = [];

  addOrder(value: Order): void {
    this._orders.push(value);
  }

  removeOrder(value: Order): void {
    const index = this._orders.findIndex((order) => order.id === value.id);
    this._orders.splice(index, 1);
  }

  listByClient(value: Person): Order[] {
    return this._orders.filter((order) => order.client === value);
  }

  listBySortedValue(sort: string): Order[] {
    if (!['maior', 'menor'].includes(sort)) throw new Error('Valor de ordenação inválido.');

    if (sort === 'menor') {
      return this._orders.sort(
        (orderA, orderB) => {
          if (orderA.calculateTotalWithDiscount() > orderB.calculateTotalWithDiscount()) return 1;

          if (orderA.calculateTotalWithDiscount() < orderB.calculateTotalWithDiscount()) return -1;

          return 0;
        },
      );
    }

    return this._orders.sort(
      (orderA, orderB) => {
        if (orderA.calculateTotalWithDiscount() > orderB.calculateTotalWithDiscount()) return -1;

        if (orderA.calculateTotalWithDiscount() < orderB.calculateTotalWithDiscount()) return 1;

        return 0;
      },
    );
  }
}
/* Para testar */!

// ./index.ts

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));

const math = new Subject('Matemática');
const history = new Subject('História');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);

const sandwiche = new OrderItem('Sandwiche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxí', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const carolinaOrder = new Order(carolina, [sandwiche, juice, dessert], 'dinheiro', 0.10);
const lucasOrder = new Order(lucas, [sandwiche, juice], 'dinheiro', 0.10);
const martaOrder = new Order(marta, [sandwiche, juice], 'cartão');
const joaoOrder = new Order(joao, [sandwiche, juice, dessert], 'cartão');

const orderRepository = new OrderRepository();
orderRepository.addOrder(carolinaOrder);
orderRepository.addOrder(lucasOrder);
orderRepository.addOrder(martaOrder);
orderRepository.addOrder(joaoOrder);
orderRepository.addOrder(carolinaOrder);

console.log('Pedidos da Carolina: ', orderRepository.listByClient(carolina));
console.log('Maior valor para o menor: ', orderRepository.listBySortedValue('maior'));
console.log('Menor valor para o maior: ', orderRepository.listBySortedValue('menor'));