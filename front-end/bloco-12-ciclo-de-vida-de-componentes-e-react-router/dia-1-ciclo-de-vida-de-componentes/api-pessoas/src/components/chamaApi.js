 /* eslint-disable */
import React, { Component } from 'react';
import Loading from './Loading';
import ShowPeople from './showPeople'; 

class ChamaApi extends Component {
    constructor() {
        super();
        // No construtor, criamos os nossos estados de `loading` e `api`,
        // que vai receber o retorno da API.
        // Começamos com o `loading` como `true`, pois queremos que ele exiba a nossa 
        // mensagem de "carregando" enquanto não renderizamos a primeira tela.
        // E o `api` setamos como um array vazio,
        // pois ele irá receber o retorno da nossa API.
        this.state = {
            api: [],
            loading: true,
        }
    }
    // Como estudamos, o `componentDidMount` vai disparar ações após o componente
    // ser inserido no DOM, por isso dizemos que é
    // ideal para realizar requisições. Atribuímos ao nosso estado `api`
    // o `data.results`, que traz os nossos dados da API.
    // Além disso, atribuímos  o `loading` como `false`, uma vez que, quando a
    // página é renderizada, não teremos mais a mensagem de "carregando".

    componentDidMount() {
        const urlApi = 'https://api.randomuser.me/';
        fetch(urlApi)
            .then((response) => response.json())
            .then((data) => {
                // Note que, nesse ponto, o nosso data retorna um objeto, e, se acessarmos
                // o `data.results`, teremos nosso array de objetos com as informações
                // das pessoas que são geradas aleatoriamente pela requisição.
                // console.log(data);
                // console.log(data.results);
                this.setState({
                    api: data.results,
                    loading: false,
                });
            });
    }
    // O `shouldComponentUpdate` irá verificar se a pessoa retornada pela API tem
    // mais de 50 anos e, com isso, irá autorizar, ou não, a atualização do componente.
    // Caso não atualize, uma mensagem de "carregando..." será exibida na tela.
    // Caso ocorra essa situação, dê um `console.log` no `nextState` e verifique a
    // idade da pessoa que é trazida pela API.
    shouldComponentUpdate(_nextProps, nextState) {
        // console.log(nextState);
        const AGE = 50;
        if (nextState.api[0].dob.age > AGE) {
            return false;
        }
        return true;
    }

    // Considerando que a API retorna um array de objetos,
    // a função abaixo foi criada para extrair os dados que precisamos e
    // atribuir esses dados a suas respectivas keys.
    getUserElements(user) {
        return {
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            age: user.dob.age,
            image: user.picture.thumbnail,
        };
    }

    render() {
        const { api, loading } = this.state;
        // Condição criada para verificar o estado de `loading`. Se for `true`, irá
        // trazer o componente de `Loading` com a mensagem de "carregando..."
        if (loading) return <Loading />;
        return (
            // Para renderizar as informações que precisamos, foi feito um `map` que 
            // traz o componente de `apiCard`, que contém as informações com nome,
            // e-mail, idade e a foto. Passamos como props a função de `getUserElements`
            // que retorna um objeto com as informações da pessoa e, como parâmetro da
            // função, passamos o `currentapi`.
            <div>
                {api.map((currentapi) => (
                    <ShowPeople
                        key={currentapi.login.uuid}
                        api={this.getUserElements(currentapi)}
                    />))}
            </div>
        );
    }
}

export default ChamaApi;
