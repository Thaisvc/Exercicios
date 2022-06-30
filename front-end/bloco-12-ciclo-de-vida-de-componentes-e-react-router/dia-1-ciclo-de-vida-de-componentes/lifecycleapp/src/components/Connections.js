// src/components/Connections.js
import React from 'react';

class Connections extends React.Component {
    constructor() {
        super();

        this.state = {
            user: '',
            list: [],
            counter: 0,
            background: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.removeContact = this.removeContact.bind(this);
        this.contactAdder = this.contactAdder.bind(this);
        this.changeToBlue = this.changeToBlue.bind(this);
        this.changeToCoral = this.changeToCoral.bind(this);
    }
    // O método aqui é muito útil quando você não quer que a sua atualização de estado ou props gere uma nova renderização. Ele, portanto, é executado antes do método componentDidUpdate. O componentDidUpdate não será chamado se esse método retornar false. Recebe como parâmetros nextProps e nextState.
    shouldComponentUpdate(_nextProps, { list }) {
        const maxContactsNumber = 3;

        return list.length <= maxContactsNumber;
        // A quantidade de contatos não pode ser maior que 3, portanto se a lista é maior que 3, ele deverá retornar false e impedir a atualização.
    }
    // 💡 Método executado sempre que ocorrer alguma atualização. Comumente utilizado para atualizar o DOM de acordo com as alterações de estado ou props, e é um método que também pode ser utilizado para requisições à API. Recebe como parâmetros prevProps, prevState e snapshot, sendo os mais utilizados os dois primeiros.
    componentDidUpdate(_prevProps, prevState) {
        const { list } = this.state;

        if (prevState.list.length < list.length) {
            this.changeToBlue();
            // Ao adicionar um contato, a div ficará azul.
        } else if (prevState.list.length > list.length) {
            this.changeToCoral();
            // Ao deletar um contato, a div ficará coral.
        }
    }

    handleChange({ target: { value } }) {
        this.setState({
            user: value,
        });
    }

    async handleClick() {
        const { user, list, counter } = this.state;
        const url = `https://api.github.com/users/${user}`;
        const isUserAbsent = !list.some((contact) => contact.login === user);

        try {
            const apiResponse = await fetch(url);
            const profileObject = await apiResponse.json();

            if (profileObject.login && isUserAbsent) {
                this.setState({
                    list: [...list, profileObject],
                    counter: counter + 1,
                });
            } else {
                throw new Error('Usuário não encontrado');
            }
        } catch (error) {
            console.log(error);
        }
    }

    changeToBlue() {
        this.setState({ background: 'connections-blue' });
    }

    changeToCoral() {
        this.setState({ background: 'connections-coral' });
    }

    removeContact(loginToRemove) {
        const { list, counter } = this.state;
        const updatedList = list.filter(({ login }) => login !== loginToRemove);

        this.setState({
            list: updatedList,
            counter: counter - 1,
        });
    }

    contactAdder(counter) {
        return (
            <div className="counter">
                <div>
                    <h5>Quantidade de contatos:</h5>
                    <span>{counter}</span>
                </div>
                <div className="form">
                    <form className="input-group justify-content-center">
                        <input
                            className="form-control"
                            type="text"
                            onChange={this.handleChange}
                            placeholder="Adicione seu contato famoso"
                        />
                        <button
                            className="btn btn-outline-dark"
                            type="button"
                            onClick={this.handleClick}
                        >
                            Adicionar
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    contactList(list) {
        return (
            <div className="card-list d-flex flex-row justify-content-around">
                {list.map((api) => (
                    <div className="card d-flex align-items-center" key={api.name}>
                        <h5>{api.name}</h5>
                        <img className="c-img" src={api.avatar_url} alt="Avatar" width="50%" />
                        <button
                            className="c-button btn btn-danger w-25 align-self-center"
                            data-login={api.login}
                            type="button"
                            onClick={() => this.removeContact(api.login)}
                        >
                            X
                        </button>
                    </div>))}
            </div>
        );
    }

    render() {
        const { list, counter, background } = this.state;

        return (
            <div className={`git-connections ${background}`}>
                {this.contactAdder(counter)}
                {this.contactList(list)}
            </div>
        );
    }
}

export default Connections;