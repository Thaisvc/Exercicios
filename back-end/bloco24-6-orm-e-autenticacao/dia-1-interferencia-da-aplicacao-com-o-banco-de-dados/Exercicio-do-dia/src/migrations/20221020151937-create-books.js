'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    // Para começar, chamamos a função createTable passando o nome da tabela dentro do bloco de execução (up):
    await queryInterface.createTable('Books', {
      // Agora vamos adicionar todos os campos da nossa tabela e suas determinadas condições:
      /**
      id: dever ser do tipo integer, não pode ser nula e ser a chave primária da tabela com auto incremento;
      title: deve ser do tipo string e não pode ser nulo;
      author: deve ser do tipo string e não pode ser nulo;
      pageQuantity: deve ser do tipo integer e pode ser nulo;
      createdAt: deve ser do tipo date e não pode ser nulo;
      updatedAt: deve ser do tipo date e não pode ser nulo;
     */
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      title: {
        allowNull: false,
        type: Sequelize.STRING
      },

      author: {
        allowNull: false,
        type: Sequelize.STRING
      },

      pageQuantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

  },

  async down(queryInterface, Sequelize) {
    /**
     *  Agora vamos implementar o bloco de reversão (down) com um código que vai apenas apagar a 
     * tabela caso seja necessário desfazer a operação de execução (up). Assim escreveremos uma 
     * migration perfeitamente reversível!
     */
    await queryInterface.dropTable('Books')
  }
};
