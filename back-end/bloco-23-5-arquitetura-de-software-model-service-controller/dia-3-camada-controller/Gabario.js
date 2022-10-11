Gabarito: Exercícios - agora, a prática
🚀 Exercício 1
Para Realizar o exercício 1, será necessário criar os seguintes arquivos:
O arquivo tests/unit/controllers/mocks/driver-exercises.controller.mock.js;
O arquivo tests/unit/controllers/driver-exercises.controller.test.js;
O arquivo src/controllers/index.js;
O arquivo src/controllers/driver.controller.js;
O arquivo src/routers/driver.router.js;
O arquivo src/routers/index.js;
Desenvolva os testes da função driverController.getDrivers(), que é responsável por buscar todos os motoristas cadastrados. A função driverController.getDrivers() deve utilizar a camada de controller.
👀 De olho na dica 👀: Os caminhos e arquivos mencionados acima serão reutilizados nos próximos exercícios, porém nesse primeiro exercício será necessários cria-los.

Obs: Não se preocupe ao ver os testes falharem. Criaremos a função de maneira que faça eles passarem.

Desenvolva a função getDrivers de maneira que ela passe em nossos testes.

Crie a rota GET /drivers

Solução

Parte 1
Desenvolva os testes da função driverController.getDrivers(), que é responsável por buscar todos os motoristas cadastrados. A função driverController.getDrivers() deve utilizar a camada de controller.
Primeiro passo: No arquivo test/unit/controllers/mocks/driver-exercises.controller.mock.js, criaremos a variável driverList, que auxiliará na criação dos testes.

tests/unit/controllers/mocks/driver-exercises.controller.mock.js

Copiar
const driverList = [
  { id: 1, name: 'Liana Cisneiros' },
  { id: 2, name: 'Fábio Frazão' },
  { id: 3, name: 'Anastacia Bicalho' },
  { id: 4, name: 'Samara Granjeiro' },
  { id: 5, name: 'Levi Teixeira' },
];

module.exports = {
  driverList,
};
Segundo passo: No arquivo tests/unit/controllers/driver-exercises.controller.test.js, importe as dependências e crie a estrutura inicial com os describes e its.

tests/unit/controllers/driver-exercises.controller.test.js

Copiar
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { driverController } = require('../../../src/controllers');
const { driverService } = require('../../../src/services');
const {
driverList,
} = require('./mocks/driver-exercises.controller.mock');

const { expect } = chai;

chai.use(sinonChai);

describe('Verificando controller Driver - Exercícios', function () {

  describe('Listando motoristas', function () {
    it('é chamado o status com o código 200', async function () {

    });

    it('é chamado o json com a lista de motoristas', async function () {

    });
  });
});
Terceiro passo: Vamos adicionar o mock da função driverService.getDrivers() utilizando o método stub do sinon para que nossos testes funcionem independente da aplicação.

tests/unit/controllers/driver-exercises.controller.test.js

Copiar
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { driverController } = require('../../../src/controllers');
const { driverService } = require('../../../src/services');
const {
driverList,
} = require('./mocks/driver-exercises.controller.mock');

const { expect } = chai;

chai.use(sinonChai);

describe('Verificando controller Driver - Exercícios', function () {
afterEach(sinon.restore);

  describe('Listando motoristas', function () {
    beforeEach(function () {
      sinon.stub(driverService, 'getDrivers')
        .resolves({ type: null, message: driverList });
   });

    it('é chamado o status com o código 200', async function () {

    });

    it('é chamado o json com a lista de motoristas', async function () {

    });
  });
});
Quarto Passo: Vamos implementar a primeira fase do TDD que é um teste falhando. Para isso, vamos utilizar nosso método mockado driverService.getDrivers() para simularmos o retorno de nossa service. Vamos utilizar também o função driverController.getDrivers(), que será implementado em um módulo que vamos criar no arquivo src/controllers/driver.controllers.js. Agora vamos adicionar a asserção verificando se a função driverController.getDrivers() retorna o status http correto e a mensagem correta.

tests/unit/controllers/driver-exercises.controller.test.js

Copiar
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { driverController } = require('../../../src/controllers');
const { driverService } = require('../../../src/services');
const { driverList } = require('./mocks/driver-exercises.controller.mock');

const { expect } = chai;

chai.use(sinonChai);

describe('Verificando controller Driver - Exercícios', function () {
  afterEach(sinon.restore);

  describe('Listando motoristas', function () {
    beforeEach(function () {
      sinon
        .stub(driverService, 'getDrivers')
        .resolves({ type: null, message: driverList });
    });

    it('é chamado o status com o código 200', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await driverController.getDrivers(req, res);

      expect(res.status).to.have.been.calledOnceWith(200);
    });

    it('é chamado o json com a lista de motoristas', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await driverController.getDrivers(req, res);

      expect(res.json).to.have.been.calledWith(driverList);
    });
  });
});
Quinto passo: Rode os testes e estarão falhando. Para passar, você vai precisar da implementação na Parte 2. Por tanto, é lá que vamos continuar nossa solução para nos auxiliar na construção da nossa camada de controller.

Parte 2
Desenvolva a função getDrivers de maneira que ela passe em nossos testes.
Primeiro passo: No arquivo src/controllers/driver.controller.js, importe a função driverService de src/service.

src/controllers/driver.controller.js

Copiar
const { driverService } = require('../services');
Segundo passo Crie e exporte a função getDrivers no arquivo src/controllers/driver.controller.js. Dentro da função getDrivers, chamamos o método status para retornar o código http e o método json para retornar a resposta de nossa service.

src/controllers/driver.controller.js

Copiar
const { driverService } = require('../services');

const getDrivers = async (_req, res) => {
  const { message } = await driverService.getDrivers();

  res.status(200).json(message);
};

module.exports = {
  getDrivers,
};
Terceiro Passo: Importe o controller no arquivo src/controllers/index.js e exporte para que possamos utilizar nosso controller em outros arquivos.

src/controllers/index.js

Copiar
const driverController = require('./driver.controller');

module.exports = {
  driverController,
};
Parte 3
Crie a rota GET /drivers
Primeiro Passo: No arquivo src/routers/driver.router.js, importe o express e o controller.

src/routers/driver.router.js

Copiar
const express = require('express');
const { driverController } = require('../controllers');
Segundo Passo: Crie o Router e atribua à ele uma rota GET para a função driverController.getDrivers().

src/routers/driver.routers.js

Copiar

const express = require('express');
const { driverController } = require('../controllers');

const router = express.Router();

router.get(
  '/',
  driverController.getDrivers,
);
Terceiro Passo: Exporte a variável router.

src/routers/driver.routers.js

Copiar
const express = require('express');
const { driverController } = require('../controllers');

const router = express.Router();

router.get(
  '/',
  driverController.getDrivers,
);

module.exports = router;
Quarto Passo: Importe o arquivo src/routers/driverRouter no arquivo src/routers/index.js e exporte para que possamos utilizar nossa rota em outros arquivos.

src/router/index.js

Copiar
const driverRouter = require('./driver.router');

module.exports = {
  driverRouter,
};
Quinto passo: Importe o driverRouter no arquivo app.js e utilize com o método .use com a rota /drivers.

src/app.js

Copiar

...

const { driverRouter } = require('./routers');

...

app.use('/drivers', driverRouter);

...
🚀 Exercício 2
Finalmente chegou a hora de estruturarmos uma rota POST! E para isso vamos utilizar a função driverController.createDriver(), responsável por cadastrar um novo motorista. Para isso:

Para Realizar o exercício 2, será necessário criar o seguinte arquivo:
src/utils/errorMap.js com o seguinte conteúdo:
Copiar
const errorMap = {
  TRAVEL_NOT_FOUND: 404,
  DRIVER_NOT_FOUND: 404,
  CAR_NOT_FOUND: 404,
  INVALID_VALUE: 422,
  TRAVEL_CONFLICT: 409,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};
Desenvolva os testes da função driverController.createDriver(), que é responsável por cadastrar um novo motorista.

Desenvolva a função createDriver de maneira que ela passe em nossos testes.

Crie a rota POST /drivers

Agora que estamos com nossa rota POST /drivers pronta, podemos criar middlewares para validar suas requisições:

(Opcional) Crie os testes para um middleware que valida se a chave name é obrigatória.

(Opcional) Crie o middleware e utilize na rota POST /drivers.

Para Realizar os exercícios opcionais, sugerimos que crie os seguintes arquivos:
O arquivo tests/unit/middlewares/validateDriverNameField.middleware.js;
O arquivo src/middlewares/validateDriverNameField.js;
Solução

Parte 1
Desenvolva os testes da função driverController.createDriver(), que é responsável por cadastrar um novo motorista.
Primeiro passo: Dentro do arquivo tests/unit/controllers/mocks/driver-exercises.controller.mock.js criaremos mais algumas variáveis que auxiliarão na criação dos testes.

tests/unit/controllers/mocks/driver-exercises.controller.mock.js

Copiar
const driverList = [
  { id: 1, name: 'Liana Cisneiros' },
  { id: 2, name: 'Fábio Frazão' },
  { id: 3, name: 'Anastacia Bicalho' },
  { id: 4, name: 'Samara Granjeiro' },
  { id: 5, name: 'Levi Teixeira' },
];

const createdDriver = { id: 1, name: 'Gus' };

const createdDriverWithoutCars = {
  ...createdDriver,
  cars: [],
};

const createdDriverWithCars = {
  ...createdDriver,
  cars: [
    {
      color: 'Branco',
      id: 1,
      licensePlate: 'NCA-0956',
      model: 'Renault Sandero',
    },
    {
      color: 'Vermelho',
      id: 2,
      licensePlate: 'DZG-4376',
      model: 'Volkswagen Gol',
    },
  ],
};

module.exports = {
  driverList,
  createdDriverWithCars,
  createdDriverWithoutCars,
};
Segundo passo: Dentro do arquivo tests/unit/controllers/driver-exercises.controller.test.js. Importe as dependências e crie a estrutura inicial com os describes e its.

tests/unit/controller/driver-exercise.controller.test.js

Copiar
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { driverController } = require('../../../src/controllers');
const { driverService } = require('../../../src/services');
const {
  driverList,
  createdDriverWithCars,
  createdDriverWithoutCars,
} = require('./mocks/driver-exercises.controller.mock');

const { expect } = chai;

chai.use(sinonChai);

describe('Verificando controller Driver - Exercícios', function () {
  afterEach(sinon.restore);

  describe('Cadastra uma nova pessoa motorista com carros', function () {
    it('é chamado o status com o código 201', async function () {

    });

    it('é chamado o json com o motorista cadastrado', async function () {

    });
  });

  describe('Adicionando uma nova pessoa motorista sem carros', function () {
    it('é chamado o status com o código 201', async function () {

    });

    it('é chamado o json com o motorista cadastrado', async function () {

    });
  });

  describe('Tentando cadastrar uma nova pessoa motorista com erros semânticos', function () {
    it('é chamado o status com o código 422', async function () {

    });

    it('é chamado o json com a mensagem de erro', async function () {

    });
  });

  describe('Tentando cadastrar uma nova pessoa motorista com erros de id', function () {
    it('é chamado o status com o código 404', async function () {

    });

    it('é chamado o json com a mensagem de erro', async function () {

    });
  });
});
Terceiro Passo: Vamos adicionar o mock da função driverService.createCar() utilizando o método stub do sinon para que nossos testes funcionem independente da aplicação.

tests/unit/controller/driver-exercise.controller.test.js

Copiar
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { driverController } = require('../../../src/controllers');
const { driverService } = require('../../../src/services');
const {
  driverList,
  createdDriverWithCars,
  createdDriverWithoutCars,
} = require('./mocks/driver-exercises.controller.mock');

const { expect } = chai;

chai.use(sinonChai);

describe('Verificando controller Driver - Exercícios', function () {
  afterEach(sinon.restore);

  describe('Cadastra uma nova pessoa motorista com carros', function () {
    beforeEach(function () {
      sinon
        .stub(driverService, 'createDriver')
        .resolves({ type: null, message: createdDriverWithCars });
    });

    it('é chamado o status com o código 201', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Flavio',
          carIds: [1, 2],
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    it('é chamado o json com o motorista cadastrado', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Flavio',
          carIds: [1, 2],
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });
  });

  describe('Adicionando uma nova pessoa motorista sem carros', function () {
    beforeEach(function () {
      sinon
        .stub(driverService, 'createDriver')
        .resolves({ type: null, message: createdDriverWithoutCars });
    });

    it('é chamado o status com o código 201', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Flavio',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    it('é chamado o json com o motorista cadastrado', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Flavio',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });
  });

  describe('Tentando cadastrar uma nova pessoa motorista com erros semânticos', function () {
    const invalidValueResponse = {
      type: 'INVALID_VALUE',
      message: '"name" length must be at least 3 characters long',
    };

    beforeEach(function () {
      sinon.stub(driverService, 'createDriver').resolves(invalidValueResponse);
    });

    it('é chamado o status com o código 422', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Fl',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    it('é chamado o json com a mensagem de erro', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Fl',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });
  });

  describe('Tentando cadastrar uma nova pessoa motorista com erros de id', function () {
    const invalidValueResponse = {
      type: 'CAR_NOT_FOUND',
      message: 'Some car is not found',
    };
    
    beforeEach(function () {
      sinon.stub(driverService, 'createDriver').resolves(invalidValueResponse);
    });

    it('é chamado o status com o código 404', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Fl',
          carIds: [999],
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    it('é chamado o json com a mensagem de erro', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Fl',
          carIds: [999],
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });
  });
});
Quarto Passo: Vamos chamar a função driverController.createDriver() do nosso teste e criar as asserções verificando se a função driverController.getDrivers() retorna o status http e a mensagem adequada de acordo com cada requisição.

tests/unit/controller/driver-exercise.controller.test.js

Copiar
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { driverController } = require('../../../src/controllers');
const { driverService } = require('../../../src/services');
const {
  driverList,
  createdDriverWithCars,
  createdDriverWithoutCars,
} = require('./mocks/driver-exercises.controller.mock');

const { expect } = chai;

chai.use(sinonChai);

describe('Verificando controller Driver - Exercícios', function () {
  afterEach(sinon.restore);

  describe('Cadastra uma nova pessoa motorista com carros', function () {
    beforeEach(function () {
      sinon
        .stub(driverService, 'createDriver')
        .resolves({ type: null, message: createdDriverWithCars });
    });

    it('é chamado o status com o código 201', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Flavio',
          carIds: [1, 2],
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await driverController.createDriver(req, res);

      expect(res.status).to.have.been.calledOnceWith(201);
    });

    it('é chamado o json com o motorista cadastrado', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Flavio',
          carIds: [1, 2],
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await driverController.createDriver(req, res);

      expect(res.json).to.have.been.calledWith(createdDriverWithCars);
    });
  });

  describe('Adicionando uma nova pessoa motorista sem carros', function () {
    beforeEach(function () {
      sinon
        .stub(driverService, 'createDriver')
        .resolves({ type: null, message: createdDriverWithoutCars });
    });

    it('é chamado o status com o código 201', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Flavio',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await driverController.createDriver(req, res);

      expect(res.status).to.have.been.calledOnceWith(201);
    });

    it('é chamado o json com o motorista cadastrado', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Flavio',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await driverController.createDriver(req, res);

      expect(res.json).to.have.been.calledWith(createdDriverWithoutCars);
    });
  });

  describe('Tentando cadastrar uma nova pessoa motorista com erros semânticos', function () {
    const invalidValueResponse = {
      type: 'INVALID_VALUE',
      message: '"name" length must be at least 3 characters long',
    };

    beforeEach(function () {
      sinon.stub(driverService, 'createDriver').resolves(invalidValueResponse);
    });

    it('é chamado o status com o código 422', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Fl',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await driverController.createDriver(req, res);
      expect(res.status).to.have.been.calledWith(422);
    });

    it('é chamado o json com a mensagem de erro', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Fl',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await driverController.createDriver(req, res);
      expect(res.json).to.have.been.calledWith({
        message: invalidValueResponse.message,
      });
    });
  });

  describe('Tentando cadastrar uma nova pessoa motorista com erros de id', function () {
    const invalidValueResponse = {
      type: 'CAR_NOT_FOUND',
      message: 'Some car is not found',
    };
    
    beforeEach(function () {
      sinon.stub(driverService, 'createDriver').resolves(invalidValueResponse);
    });

    it('é chamado o status com o código 404', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Fl',
          carIds: [999],
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await driverController.createDriver(req, res);
      expect(res.status).to.have.been.calledWith(404);
    });
    it('é chamado o json com a mensagem de erro', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Fl',
          carIds: [999],
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await driverController.createDriver(req, res);
      expect(res.json).to.have.been.calledWith({
        message: invalidValueResponse.message,
      });
    });
  });
});
Quinto passo: Rode os testes e estarão falhando. Para passar, você vai precisar da implementação na Parte 2. Por tanto, é lá que vamos continuar nossa solução para nos auxiliar na construção da nossa camada de controller.

Parte 2
Desenvolva a função createDriver de maneira que ela passe em nossos testes.
Primeiro Passo:: Importe o arquivo mapError para tratar os erros vindos da service. Agora, crie e exporte a função createDriver()no arquivo src/controllers/driver.controller.js.

src/controllers/driver.controller.js

Copiar
const { driverService } = require('../services');
const { mapError } = require('../utils/errorMap');

const getDrivers = async (_req, res) => {
  const { message } = await driverService.getDrivers();

  res.status(200).json(message);
};

const createDriver = async (req, res) => {

};

module.exports = {
  getDrivers,
  createDriver,
};
Segundo Passo:: Dentro da função createDriver, vamos desestruturar name e carIds do req.body para passarmos como parâmetro do nosso service driverService.createDriver(). Agora, com o resultado da chamada, vamos desestruturar o type e message. Utilizando uma condicional, verificamos se nosso resultado apresenta algum erro, caso possua, retornamos o status e a mensagem de erro, caso não possua, retornamos o status 201 e a mensagem recebida do service.

Copiar
const { driverService } = require('../services');
const { mapError } = require('../utils/errorMap');

const getDrivers = async (_req, res) => {
  const { message } = await driverService.getDrivers();

  res.status(200).json(message);
};

const createDriver = async (req, res) => {
  const { name, carIds } = req.body;
  const { type, message } = await driverService.createDriver(name, carIds);
  if (type) return res.status(mapError(type)).json({ message });

  res.status(201).json(message);
};

module.exports = {
  getDrivers,
  createDriver,
};
Parte 3
Crie a rota POST /drivers
Primeiro Passo: Crie a rota POST para a função driverController.createDriver().

src/routers/driver.routers.js

Copiar

const express = require('express');
const { driverController } = require('../controllers');

const router = express.Router();

router.get(
  '/',
  driverController.getDrivers,
);

router.post(
  '/',
  driverController.createDriver,
);

module.exports = router;
Parte 4 (Opcional)
(Opcional) Crie os testes para um middleware que valida se a chave name é obrigatória.
Primeiro passo: No arquivo tests/unit/middlewares/validateDriverNameField.js, importe as dependências e crie a estrutura inicial com os describes e its.

tests/unit/middlewares/validateDriverNameField.middleware.test.js

Copiar
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const validateDriverNameField = require('../../../src/middlewares/validateDriverNameField');

const { expect } = chai;
chai.use(sinonChai);

describe('Verificando middleware validateDriverNameField', function () {

  describe('Tentando adicionar uma pessoa motorista sem nome', function () {
    it('é chamado o status com o código 400', async function () {

    });

    it('é chamado o json com o motorista cadastrado', async function () {

    });

    it('não deve chamar o próximo middleware', async function () {

    });
  });
});
Segundo Passo Vamos adicionar o mock dos nossos middleware utilizando o método stub do sinon para que nossos testes funcionem independente da aplicação.

tests/unit/middlewares/validateDriverNameField.middleware.test.js

Copiar
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const validateDriverNameField = require('../../../src/middlewares/validateDriverNameField');

const { expect } = chai;
chai.use(sinonChai);

describe('Verificando middleware validateDriverNameField', function () {
  beforeEach(sinon.restore);

  describe('Tentando adicionar uma pessoa motorista sem nome', function () {
    it('é chamado o status com o código 400', async function () {
      const res = {};
      const req = {
        body: {},
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

    });

    it('é chamado o json com o motorista cadastrado', async function () {
      const res = {};
      const req = {
        body: {},
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    it('não deve chamar o próximo middleware', async function () {
      const res = {};
      const req = {
        body: {},
      };
      const next = sinon.stub().returns();

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });
  });
});
Terceiro Passo: Vamos chamar o middleware validateDriverNameField do nosso teste e criar as asserções verificando se o middleware validateDriverNameField retorna o status http e a mensagem de erro esperada.

tests/unit/middlewares/validateDriverNameField.middleware.test.js

Copiar
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const validateDriverNameField = require('../../../src/middlewares/validateDriverNameField');

const { expect } = chai;
chai.use(sinonChai);

describe('Verificando middleware validateDriverNameField', function () {
  beforeEach(sinon.restore);

  describe('Tentando adicionar uma pessoa motorista sem nome', function () {
    it('é chamado o status com o código 400', async function () {
      const res = {};
      const req = {
        body: {},
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await validateDriverNameField(req, res);

      expect(res.status).to.have.been.calledOnceWith(400);
    });

    it('é chamado o json com o motorista cadastrado', async function () {
      const res = {};
      const req = {
        body: {},
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await validateDriverNameField(req, res);

      expect(res.json).to.have.been.calledWith({ message: '"name" is required' });
    });

    it('não deve chamar o próximo middleware', async function () {
      const res = {};
      const req = {
        body: {},
      };
      const next = sinon.stub().returns();

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await validateDriverNameField(req, res, next);

      // eslint-disable-next-line no-unused-expressions
      expect(next).to.have.not.been.called;
    });
  });
});
Parte 5 (Opcional)
(Opcional) Crie o middleware e utilize na rota POST /drivers.
Primeiro Passo Vamos criar nosso middleware verificando se a chave name é obrigatória.

src/middlewares/validateDriverNameField.js

Copiar
module.exports = (req, res, next) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });
  
  return next();
};
Segundo Passo: No arquivo src/routers/driver.routers.js, importe nosso middleware validateDriverNameField e utilize-o na rota POST.

src/routers/driver.routers.js

Copiar

const express = require('express');
const { driverController } = require('../controllers');
const validateDriverNameField = require('../middlewares/validateDriverNameField');

const router = express.Router();

router.get(
  '/',
  driverController.getDrivers,
);

router.post(
  '/',
  validateDriverNameField,
  driverController.createDriver,
);
🚀 Exercício 3
Para Realizar o exercício 3, será necessário criar os seguintes arquivos:
O arquivo tests/unit/controllers/mocks/car-exercises.controller.mock.js;
O arquivotests/unit/controllers/car-exercises.controller.test.js;
O arquivosrc/controllers/car.controllers.js;
O arquivosrc/routers/car.router.js;
Agora que você fez a controller para a função createDrivercom seus devidos testes e rotas, faça o mesmo para a função createCar, que é nossa função responsável por cadastrar um novo carro.

Desenvolva os testes da função carController.createCar(), que é responsável por cadastrar um novo carro.

Desenvolva a função createCar de maneira que ela passe em nossos testes.

Crie a rota POST /cars

Agora que estamos com nossa rota POST /cars pronta, podemos criar middlewares para validar suas requisições:

(Opcional) Crie os testes para um middleware que valida se as chaves model, color e licensePlate são obrigatórias.

(Opcional) Crie o middleware e utilize na rota POST /cars.

Para Realizar os exercícios opcionais, sugerimos que crie os seguintes arquivos:
O arquivo tests/unit/middlewares/validateCarFields.middleware.js;
O arquivo src/middlewares/validateCarFields.middleware.js;
👀 De olho na dica 👀: Toda a aplicação já está praticamente “pronta”. O que fará com que os testes falhem vai ser a ausência da rota POST /cars.

Solução

Parte 1
Desenvolva os testes da função carController.createCar(), que é responsável por cadastrar um novo carro.
Primeiro passo: Dentro do arquivo tests/unit/controllers/mocks/car-exercises.controller.mock.js criaremos algumas variáveis que auxiliarão na criação dos testes.

tests/unit/controllers/mocks/car-exercises.controller.mock.js

Copiar
const validModel = 'Chevrolet Monza';
const validColor = 'Branco';
const validPlate = 'ABC1A2B';

const typeError = 'INVALID_VALUE';

const emptyModelMessage = '"model" is not allowed to be empty';
const emptyColorMessage = '"color" is not allowed to be empty';
const emptyPlateMessage = '"licensePlate" is not allowed to be empty';

const invalidModelMessage = '"model" length must be at least 3 characters long';
const invalidColorMessage = '"model" length must be at least 3 characters long';
const invalidPlateMessage = '"model" length must be at least 3 characters long';

const createdCar = {
  id: 1,
  model: 'Chevrolet Monza',
  color: 'Branco',
  licensePlate: 'ABC1A2B',
};

module.exports = {
  createdCar,
  emptyModelMessage,
  emptyColorMessage,
  emptyPlateMessage,
  invalidModelMessage,
  invalidColorMessage,
  invalidPlateMessage,
  validModel,
  validColor,
  validPlate,
  typeError,
};
Segundo passo: Dentro do arquivo tests/unit/controllers/car-exercises.controller.test.js. Importe as dependências e crie a estrutura inicial com os describes e its.

tests/unit/controllers/car-exercises.controller.test.js

Copiar
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { carController } = require('../../../src/controllers');
const { carService } = require('../../../src/services');
const {
  createdCar,
  emptyModelMessage,
  emptyColorMessage,
  emptyPlateMessage,
  invalidModelMessage,
  invalidColorMessage,
  invalidPlateMessage,
  validModel,
  validColor,
  validPlate,
  typeError,
} = require('./mocks/car-exercises.controller.mock');

const { expect } = chai;

chai.use(sinonChai);

describe('Verificando controller Car - Exercícios', function () {
  afterEach(sinon.restore);

  describe('Cadastrando um novo carro com sucesso', function () {
    it('é chamado o status 201 e o json correto', async function () {});
  });

  describe('Tentando cadastrar um novo carro com campos vazios', function () {
    it('Model vazio é chamado o status 422 e a mensagem de erro correta', async function () {});

    it('Color vazio é chamado o status 422 e a mensagem de erro correta', async function () {});

    it('Licença vazia é chamado o status 422 e a mensagem de erro correta', async function () {});
  });

  describe('Tentando cadastrar um novo carro com erros semânticos', function () {
    it('Model inválido é chamado com o status 422 e a mensagem de erro correta', async function () {});

    it('Color inválido é chamado o status 422 e a mensagem de erro correta', async function () {});

    it('Licença inválido é chamado o status 422 e a mensagem de erro correta', async function () {});
  });
});
Terceiro Passo: Vamos adicionar o mock da função carService.createCar utilizando o método stub do sinon para que nossos testes funcionem independente da aplicação.

tests/unit/controllers/car-exercises.controller.test.js

Copiar
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { carController } = require('../../../src/controllers');
const { carService } = require('../../../src/services');
const {
  createdCar,
  emptyModelMessage,
  emptyColorMessage,
  emptyPlateMessage,
  invalidModelMessage,
  invalidColorMessage,
  invalidPlateMessage,
  validModel,
  validColor,
  validPlate,
  typeError,
} = require('./mocks/car-exercises.controller.mock');

const { expect } = chai;

chai.use(sinonChai);

describe('Verificando controller Car - Exercícios', function () {
  afterEach(sinon.restore);

  describe('Cadastrando um novo carro com sucesso', function () {
    it('é chamado o status 201 e o json correto', async function () {
      sinon
        .stub(carService, 'createCar')
        .resolves({ type: null, message: createdCar });

      const res = {};
      const req = {
        body: {
          model: 'Ford',
          color: 'Preto',
          licensePlate: 'ABC1234',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });
  });

  describe('Tentando cadastrar um novo carro com campos vazios', function () {
    it('Model vazio é chamado o status 422 e a mensagem de erro correta', async function () {
      const res = {};
      const req = {
        body: {
          model: '',
          color: validColor,
          licensePlate: validPlate,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(carService, 'createCar').resolves({
        type: typeError,
        message: emptyModelMessage,
      });
    });

    it('Color vazio é chamado o status 422 e a mensagem de erro correta', async function () {
      const res = {};
      const req = {
        body: {
          model: validModel,
          color: '',
          licensePlate: validPlate,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(carService, 'createCar').resolves({
        type: typeError,
        message: emptyColorMessage,
      });
    });

    it('Licença vazia é chamado o status 422 e a mensagem de erro correta', async function () {
      const res = {};
      const req = {
        body: {
          model: validModel,
          color: validColor,
          licensePlate: '',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(carService, 'createCar').resolves({
        type: typeError,
        message: emptyPlateMessage,
      });
    });
  });

  describe('Tentando cadastrar um novo carro com erros semânticos', function () {
    it('Model inválido é chamado com o status 422 e a mensagem de erro correta', async function () {
      const res = {};
      const req = {
        body: {
          model: 'Fa',
          color: validColor,
          licensePlate: validPlate,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(carService, 'createCar').resolves({
        type: typeError,
        message: invalidModelMessage,
      });
    });

    it('Color inválido é chamado o status 422 e a mensagem de erro correta', async function () {
      const res = {};
      const req = {
        body: {
          model: validModel,
          color: 'a',
          licensePlate: validPlate,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(carService, 'createCar').resolves({
        type: typeError,
        message: invalidColorMessage,
      });
    });

    it('Licença inválido é chamado o status 422 e a mensagem de erro correta', async function () {
      const res = {};
      const req = {
        body: {
          model: validModel,
          color: validColor,
          licensePlate: 'ya',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(carService, 'createCar').resolves({
        type: typeError,
        message: invalidPlateMessage,
      });
    });
  });
});
Quarto Passo: Agora vamos adicionar a asserção verificando se a função carController.createCar() retorna o status http e a mensagem correta.

tests/unit/controllers/car-exercises.controller.test.js

Copiar
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { carController } = require('../../../src/controllers');
const { carService } = require('../../../src/services');
const {
  createdCar,
  emptyModelMessage,
  emptyColorMessage,
  emptyPlateMessage,
  invalidModelMessage,
  invalidColorMessage,
  invalidPlateMessage,
  validModel,
  validColor,
  validPlate,
  typeError,
} = require('./mocks/car-exercises.controller.mock');

const { expect } = chai;

chai.use(sinonChai);

describe('Verificando controller Car - Exercícios', function () {
  afterEach(sinon.restore);

  describe('Cadastrando um novo carro com sucesso', function () {
    it('é chamado o status 201 e o json correto', async function () {
      sinon
        .stub(carService, 'createCar')
        .resolves({ type: null, message: createdCar });

      const res = {};
      const req = {
        body: {
          model: 'Ford',
          color: 'Preto',
          licensePlate: 'ABC1234',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await carController.createCar(req, res);

      expect(res.status).to.have.been.calledOnceWith(201);
      expect(res.json).to.have.been.calledWith(createdCar);
    });
  });

  describe('Tentando cadastrar um novo carro com campos vazios', function () {
    it('Model vazio é chamado o status 422 e a mensagem de erro correta', async function () {
      const res = {};
      const req = {
        body: {
          model: '',
          color: validColor,
          licensePlate: validPlate,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(carService, 'createCar').resolves({
        type: typeError,
        message: emptyModelMessage,
      });

      await carController.createCar(req, res);

      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWith({ message: emptyModelMessage });
    });

    it('Color vazio é chamado o status 422 e a mensagem de erro correta', async function () {
      const res = {};
      const req = {
        body: {
          model: validModel,
          color: '',
          licensePlate: validPlate,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(carService, 'createCar').resolves({
        type: typeError,
        message: emptyColorMessage,
      });

      await carController.createCar(req, res);

      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWith({ message: emptyColorMessage });
    });

    it('Licença vazia é chamado o status 422 e a mensagem de erro correta', async function () {
      const res = {};
      const req = {
        body: {
          model: validModel,
          color: validColor,
          licensePlate: '',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(carService, 'createCar').resolves({
        type: typeError,
        message: emptyPlateMessage,
      });

      await carController.createCar(req, res);

      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWith({ message: emptyPlateMessage });
    });
  });

  describe('Tentando cadastrar um novo carro com erros semânticos', function () {
    it('Model inválido é chamado com o status 422 e a mensagem de erro correta', async function () {
      const res = {};
      const req = {
        body: {
          model: 'Fa',
          color: validColor,
          licensePlate: validPlate,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(carService, 'createCar').resolves({
        type: typeError,
        message: invalidModelMessage,
      });

      await carController.createCar(req, res);

      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWith({
        message: invalidModelMessage,
      });
    });

    it('Color inválido é chamado o status 422 e a mensagem de erro correta', async function () {
      const res = {};
      const req = {
        body: {
          model: validModel,
          color: 'a',
          licensePlate: validPlate,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(carService, 'createCar').resolves({
        type: typeError,
        message: invalidColorMessage,
      });

      await carController.createCar(req, res);

      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWith({
        message: invalidColorMessage,
      });
    });

    it('Licença inválido é chamado o status 422 e a mensagem de erro correta', async function () {
      const res = {};
      const req = {
        body: {
          model: validModel,
          color: validColor,
          licensePlate: 'ya',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(carService, 'createCar').resolves({
        type: typeError,
        message: invalidPlateMessage,
      });

      await carController.createCar(req, res);

      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWith({
        message: invalidPlateMessage,
      });
    });
  });
});
Quinto passo: Rode os testes e estarão falhando. Para passar, você vai precisar da implementação na Parte 2. Por tanto, é lá que vamos continuar nossa solução para nos auxiliar na construção da nossa camada de controller.

Parte 2
Primeiro Passo:: Importe o arquivo mapError para tratar os erros vindos da service. Agora, crie e exporte a função createCar()no arquivo src/controllers/car.controller.js.

src/controllers/car.controller.js

Copiar
const { carService } = require('../services');
const { mapError } = require('../utils/errorMap');

const createCar = async (req, res) => {

};

module.exports = {
  createCar,
};
Segundo Passo:: Dentro da função createCar, vamos desestruturar model, color e licensePlate do req.body para passarmos como parâmetro do nosso service carService.createCar(). Agora, com o resultado da chamada, vamos desestruturar o type e message. Utilizando uma condicional, verificamos se nosso resultado apresenta algum erro, caso possua, retornamos o status e a mensagem de erro, caso não possua, retornamos o status 201 e a mensagem recebida do service.

Copiar
const { carService } = require('../services');
const { mapError } = require('../utils/errorMap');

const createCar = async (req, res) => {
  const { model, color, licensePlate } = req.body;
  const { type, message } = await carService.createCar(
    model,
    color,
    licensePlate,
  );
  if (type) return res.status(mapError(type)).json({ message });

  res.status(201).json(message);
};

module.exports = {
  createCar,
};
Terceiro Passo: Importe o controller no arquivo src/controllers/index.js e exporte para que possamos utilizar nosso controller em outros arquivos.

src/controllers/index.js

Copiar
const driverController = require('./driver.controller');
const carController = require('./car.controller');

module.exports = {
  driverController,
  carController,
};
Parte 3
Primeiro Passo: No arquivo src/routers/car.router.js, importe o express e o controller.

src/routers/car.router.js

Copiar
const express = require('express');
const { carController } = require('../controllers');
Segundo Passo: Crie o Router e atribua à ele uma rota POST para a função carController.createCar().

src/routers/car.router.js

Copiar
const express = require('express');
const { carController } = require('../controllers');

const router = express.Router();

router.post(
  '/',
  carController.createCar,
);
Terceiro Passo: Exporte a variável router.

src/routers/car.router.js

Copiar
const express = require('express');
const { carController } = require('../controllers');

const router = express.Router();

router.post(
  '/',
  carController.createCar
);

module.exports = router;
Quarto Passo: Importe o arquivo src/routers/carRouter no arquivo src/routers/index.js e exporte para que possamos utilizar nossa rota em outros arquivos.

src/router/index.js

Copiar
const carRouter = require('./car.router');
const driverRouter = require('./driver.router');

module.exports = {
  carRouter,
  driverRouter,
};
Quinto passo: Importe o carRouter no arquivo app.js e utilize com o método .use com a rota /cars.

src/app.js

Copiar

...

const { driverRouter, carRouter } = require('./routers');

...

app.use('/cars', carRouter);

...
Parte 4 (Opcional)
Primeiro passo: No arquivo tests/unit/middlewares/validateCarFields.middleware.test.js, importe as dependências e crie a estrutura inicial com os describes e its.

tests/unit/middlewares/validateCarFields.middleware.test.js

Copiar
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const validateCarFields = require('../../../src/middlewares/validateCarFields.js');

const { expect } = chai;
chai.use(sinonChai);

describe('Verificando middleware validateCarFields', function () {
  const validModel = 'Chevrolet Monza';
  const validColor = 'Branco';
  const validPlate = 'ABC1A2B';

  beforeEach(sinon.restore);

  describe('Tentando adicionar um carro sem o campo model', function () {
    it('é chamado o status 400 e o json correto', async function () {});
  });

  describe('Tentando adicionar um carro sem o campo color', function () {
    it('é chamado o status 400 e o json correto', async function () {});
  });

  describe('Tentando adicionar um carro sem o campo licensePlate', function () {
    it('é chamado o status 400 e o json correto', async function () {});
  });
});
Segundo Passo Vamos adicionar o mock do nosso middleware utilizando o método stub do sinon para que nossos testes funcionem independente da aplicação.

tests/unit/middlewares/validateCarFields.middleware.test.js

Copiar
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const validateCarFields = require('../../../src/middlewares/validateCarFields.js');

const { expect } = chai;
chai.use(sinonChai);

describe('Verificando middleware validateCarFields', function () {
  const validModel = 'Chevrolet Monza';
  const validColor = 'Branco';
  const validPlate = 'ABC1A2B';

  beforeEach(sinon.restore);

  describe('Tentando adicionar um carro sem o campo model', function () {
    it('é chamado o status 400 e o json correto', async function () {
      const res = {};
      const req = {
        body: {
          color: validColor,
          licensePlate: validPlate,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      const next = sinon.stub().returns();
    });
  });

  describe('Tentando adicionar um carro sem o campo color', function () {
    it('é chamado o status 400 e o json correto', async function () {
      const res = {};
      const req = {
        body: {
          model: validModel,
          licensePlate: validPlate,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      const next = sinon.stub().returns();
    });
  });

  describe('Tentando adicionar um carro sem o campo licensePlate', function () {
    it('é chamado o status 400 e o json correto', async function () {
      const res = {};
      const req = {
        body: {
          model: validModel,
          color: validColor,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      const next = sinon.stub().returns();
    });
  });
});
Terceiro Passo: Vamos chamar o middleware validateCarFields do nosso teste e criar as asserções verificando se o middleware validateCarFields retorna o status http e a mensagem de erro esperada.

tests/unit/middlewares/validateCarFields.middleware.test.js

Copiar
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const validateCarFields = require('../../../src/middlewares/validateCarFields.js');

const { expect } = chai;
chai.use(sinonChai);

describe('Verificando middleware validateCarFields', function () {
  const validModel = 'Chevrolet Monza';
  const validColor = 'Branco';
  const validPlate = 'ABC1A2B';

  beforeEach(sinon.restore);

  describe('Tentando adicionar um carro sem o campo model', function () {
    it('é chamado o status 400 e o json correto', async function () {
      const res = {};
      const req = {
        body: {
          color: validColor,
          licensePlate: validPlate,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      const next = sinon.stub().returns();

      await validateCarFields(req, res, next);

      expect(res.status).to.have.been.calledOnceWith(400);
      expect(res.json).to.have.been.calledWith({
        message: '"model" is required',
      });
    });
  });

  describe('Tentando adicionar um carro sem o campo color', function () {
    it('é chamado o status 400 e o json correto', async function () {
      const res = {};
      const req = {
        body: {
          model: validModel,
          licensePlate: validPlate,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      const next = sinon.stub().returns();

      await validateCarFields(req, res, next);

      expect(res.status).to.have.been.calledOnceWith(400);
      expect(res.json).to.have.been.calledWith({
        message: '"color" is required',
      });
    });
  });

  describe('Tentando adicionar um carro sem o campo licensePlate', function () {
    it('é chamado o status 400 e o json correto', async function () {
      const res = {};
      const req = {
        body: {
          model: validModel,
          color: validColor,
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      const next = sinon.stub().returns();

      await validateCarFields(req, res, next);

      expect(res.status).to.have.been.calledOnceWith(400);
      expect(res.json).to.have.been.calledWith({
        message: '"licensePlate" is required',
      });
    });
  });
});
Parte 5 (Opcional)
Primeiro Passo Vamos criar nosso middleware verificando se as chaves model, color e licensePlate são obrigatórias.

src/middlewares/validateCarFields.js

Copiar
module.exports = (req, res, next) => {
  const { model, color, licensePlate } = req.body;

  if (!model) return res.status(400).json({ message: '"model" is required' });
  if (!color) return res.status(400).json({ message: '"color" is required' });
  if (!licensePlate) {
    return res.status(400).json({ message: '"licensePlate" is required' });
  }

  return next();
};
Segundo Passo: No arquivo src/routers/car.routers.js, importe nosso middleware validateCarFields e utilize-o na rota POST.

src/routers/car.routers.js

Copiar
const express = require('express');
const { carController } = require('../controllers');
const validateCarFields = require('../middlewares/validateCarFields');

const router = express.Router();

router.post(
  '/',
  validateCarFields,
  carController.createCar,
);
