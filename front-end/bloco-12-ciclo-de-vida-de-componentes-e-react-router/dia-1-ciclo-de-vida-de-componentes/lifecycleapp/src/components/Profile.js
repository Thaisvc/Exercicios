// src/components/Profile.js
import React from 'react';

class Profile extends React.Component {
    constructor() {
        super();

        this.state = {
            api: '',
        };

        this.changeDataJson = this.changeDataJson.bind(this);
    }
    // O método que você busca é executado assim que o componente for montado e estiver pronto na tela. Caso precise fazer uma requisição a alguma API, esse método é um bom lugar para guardar tal requisição. O React permite o uso do setState nesse método.

    async componentDidMount() {
        const myUser = 'Thaisvc'; //Preencha myUser com o seu user do GitHub.
        try {
            const url = `https://api.github.com/users/${myUser}`;
            const response = await fetch(url)
            const dataJson = await response.json()
            this.setState({ api: dataJson })
        } catch (error) {
            console.log(error)
        }
    }
    //Aqui você busca o método executado no momento anterior a completa desmontagem, destruição, do componente. Qualquer limpeza pode ser realizada neste método, seja cancelar a chamada de uma API, limpar localStorage ou parar a atualização de algum timer. Não se deve utilizar o setState nesse método, uma vez que o componente será destruído e, portanto, não ocorrerá uma nova atualização de estado nesse componente.
    componentWillUnmount() {
        alert('Você ocultou seu perfil');
    }

    changeDataJson(dataJson) {
        this.setState({ api: dataJson });
    }

    render() {
        const { api: { name, email, bio } = '', api } = this.state;

        if (!api) return <p>Loading...</p>;

        const card = (
            <div className="d-flex h-100 flex-column justify-content-center align-items-center">
                <h1>{name}</h1>
                <span>{email}</span>
                <img className="myPicture" src={api.avatar_url} alt="Avatar" />
                <p>{bio}</p>
            </div>
        );

        return (
            <div className="git d-flex flex-column justify-content-center align-items-center">
                {card}
            </div>
        );
    }
}

export default Profile;