Gabarito: Exercícios - agora a prática
Exercício 1
O primeiro server que vamos utilizar é o nosso velho amigo HTTP, na camada de aplicação. Você pode tanto criar um, quanto utilizar um dos projetos ou exercícios dos módulos anteriores. A ideia é utilizarmos os conhecimentos do conteúdo e a ferramenta cURL para realizarmos uma chamada HTTP para ele. O projeto deve ter rotas GET e POST para que seja possível enviar requisições para os endpoints e receber respostas, assim como já nos acostumamos a receber via browser ou utilizando programas como o Postman.

Caso tenha dificuldades maiores, você pode utilizar o Postman para converter uma requisição em cURL, é só fazer a requisição nele como você já sabe e depois clicar no botão code (que fica embaixo do save) e escolher cURL.

Faça uma chamada GET, utilizando o cURL.

Faça uma chamada POST, utilizando o cURL, passando um JSON no body da requisição.

Faça uma chamada qualquer, utilizando o cURL, passando um header na requisição.

Solução proposta
Faça uma chamada GET, utilizando o cURL.


 curl localhost:3000
Ou use:


 curl -X GET localhost:3000
 
Faça uma chamada POST, utilizando o cURL, passando um JSON no body da requisição.


 curl -X POST \
     -H 'Content-Type: application/json' \
     -d '{ "foo": "bar" }' \
     localhost:3000
Faça uma chamada qualquer, utilizando o cURL, passando um header na requisição.


curl --request POST \
    --header 'Content-Type: application/json' \
    --header 'Authorization: ApiKey EXAMPLE-TOKEN' \
    --data '{ "foo": "bar" }' \
    localhost:3000
Exercício 2
Ainda utilizando o cURL, vamos explorar mais alguns conceitos do HTTP. Relembre que falamos que o HTTP organiza e dá significado aos dados encapsulados nessa camada. Por exemplo: ao vermos um 200 tanto nós quanto um client HTTP sabemos que aquela request foi realizada com sucesso. Vamos explorar isso com o cURL.

Faça uma chamada GET, utilizando o cURL, para “google.com”.

Perceba que foi retornado um 301. Isso quer dizer que existem diversos redirecionamentos que nos encaminham para o lugar certo. No caso, o caminho certo para a página do google é www.google.com. Ao acessarmos pelo navegador, não percebemos isso porque ele faz o redirecionamento para a página certa ao encontrar o 301, porém se você inspecionar a network vai identificar esse redirecionamento.

Faça uma nova chamada a “google.com”, porém agora utilizando o parâmetro -L ou --location, que serve para “seguir redirecionamentos”.

Solução proposta
Faça uma chamada GET, utilizando o cURL, para “google.com”.


 curl google.com
Perceba que foi retornado um 301. Isso quer dizer que existem diversos redirecionamentos que nos encaminham para o lugar certo. No caso, o caminho certo para a página do google é www.google.com. Ao acessarmos pelo navegador, não percebemos isso porque ele faz o redirecionamento para a página certa ao encontrar o 301, porém se você inspecionar a network vai identificar esse redirecionamento.

Faça uma nova chamada a “google.com”, porém agora utilizando o parâmetro -L ou --location, que serve para “seguir redirecionamentos”.


curl -L google.com
Exercício 3
Agora utilizando o wget, pegue o conteúdo da página do site da Trybe, depois abra o arquivo HTML baixado em seu navegador. Faça o mesmo processo com outras páginas web.

Solução proposta

wget betrybe.com
Exercício 4
Agora vamos para a camada de transporte. Crie um servidor TCP usando o módulo socketserver que já vem embutido com o Python. Nosso servidor TCP deverá:

Responder com um “Olá, client”, logo quando estabelecer uma conexão.

Imprimir no console todo dado recebido.

Responder com os dados recebidos (como um eco).

Utilizar a porta 8085.

Perceba que o servidor sozinho não faz nada. Ele precisa que alguém se conecte a ele. Então para testá-lo você pode utilizar o comando telnet localhost 8085, onde telnet é a aplicação que vamos utilizar, localhost é o local onde o servidor está (no caso, o seu próprio PC) e 8085 é a porta em que o servidor está escutando conexões.

👀 De olho nas dicas:

A documentação do módulo traz exemplos de como instanciar seu servidor TCP;
Na mesma documentação temos exemplos de classes para responder as requisições;
Os dados na requisição vem em bytes, não strings! bytes podem ser decodificados em string com a codificação correta;
Do mesmo jeito, para responder você pode precisar codificar strings em bytes;
telnet sempre envia ASCII, já o netcat envia no encoding do sistema (em Linux, geralmente utf-8, mas confirme com o comando locale).
Solução proposta

from socketserver import TCPServer, StreamRequestHandler

ADDRESS = "", 8085

class EchoHandler(StreamRequestHandler):
    """Responde requisições repetindo o que foi recebido."""

    def handle(self):
        # Usar b'' é um jeito literal de escrever bytes em ascii
        self.wfile.write(b"Hello, World!\n")
        # self.wfile e self.rfile são canais de entrada e saída
        # programados para ter a mesma interface de arquivos!
        for line in self.rfile:
            # esta linha responde o cliente
            self.wfile.write(line)
            # esta linha imprime no console
            print(line.decode('ascii').strip())

if __name__ == "__main__":
    # usando with nosso TCPServer vai arrumar a casa direitinho quando encerrado
    with TCPServer(ADDRESS, EchoHandler) as server:
        server.serve_forever()
Exercício 5
Utilizando o comando telnet ou o Netcat (nc):

Conecte no server do exercício anterior e envie informações. O server deverá imprimir as mensagens enviadas no console.

Pare o servidor e verifique o que aconteceu com a conexão que estava aberta com o comando telnet ou nc.

Solução proposta

nc -t 127.0.0.1 8085
ou


telnet 127.0.0.1 8085
Após estabelecer a conexão, digite a mensagem e tecle enter para enviá-las.

Exercício 6
Reinicie o servidor TCP e agora faça uma requisição utilizando o cURL (HTTP).

Perceba o que é exibido no console do server, já que não estamos utilizando o HTTP nele. Perceba também que o comando cURL não recebe uma resposta HTTP com sentido (um status code 200, por exemplo), de modo que ele não sabe que aquela requisição chegou ao fim.

Solução proposta

curl localhost:8085
Uma request mais legal:


curl --request POST \
    --data "{ \"foo\": \"bar\" }" \
    --header 'Content-Type: application/json' \
    --header 'Foo-Bar-Header: foo-bar' \
    localhost:8085/foo-bar
Exercício 7
Agora vamos explorar o outro protocolo de transporte que aprendemos. Crie um servidor UDP usando o mesmo módulo socketserver. Nosso servidor UDP deverá:

Imprimir no console toda mensagem recebida (não esqueça de converter também para string).

Responder com os dados recebidos (como um eco).

Utilizar a porta 8084.

👀 De olho nas dicas:

Todas as dicas do exercício 4 se aplicam;
telnet não funciona com udp – use netcat.
Solução proposta

from socketserver import UDPServer, DatagramRequestHandler

ADDRESS = "", 8084

class EchoHandler(DatagramRequestHandler):
    """Responde requisições repetindo o que foi recebido."""

    def handle(self):
        for line in self.rfile:
            self.wfile.write(line)
            print(line.decode("utf-8").strip())

if __name__ == "__main__":
    with UDPServer(ADDRESS, EchoHandler) as server:
        server.serve_forever()
Exercício 8
Envie pacotes para o servidor UDP utilizando o Netcat (nc). Em seguida pare o servidor e perceba que, como não há conexão, nada é sentido pelo client.

Solução proposta

nc -u 127.0.0.1 8084
Após executar o comando, digite a mensagem e tecle enter para enviá-las.

Exercício 9
Faça uma chamada ao server utilizando o cURL. Lembre que, além do HTTP, o comando utiliza o protocolo TCP e não o UDP. Repare o que acontece.

Solução proposta

curl localhost:8084
Exercício 10
Agora, vamos utilizar um tipo de proxy que pode ser bastante útil no nosso cotidiano como pessoas desenvolvedoras: o NGROK. Com ele conseguimos criar um túnel para o nosso localhost.

Crie um servidor HTTP em sua máquina executando na porta 80 (pode ser um front-end ou um back-end criado em aulas anteriores).

Baixe o ngrok e extraia o arquivo baixado em uma pasta de sua preferência, conforme instruções do site oficial.

Conforme instruções do site, crie um túnel para a porta 80 de sua máquina.

Acesse o link disponibilizado em seu navegador. Utilize-o para acessar de outros dispositivos, como seu smartphone ou outro computador 😎.

hackerman
Crie um servidor HTTP em sua máquina executando na porta 80 (pode ser um front-end ou um back-end criado em aulas anteriores).

Solução proposta
Python é um brinquedo que vem com todos os acessórios, lembra? Claro que ele vem com um servidor http pronto pra usar! Vamos criar um diretório novo e rodar o servidor lá dentro:


 mkdir diretorio && cd diretorio
 python3 -m http.server 80
Baixe o ngrok e extraia o arquivo baixado em uma pasta de sua preferência, conforme instruções do site oficial.


 unzip /path/to/ngrok.zip
Conforme instruções do site, crie um túnel para a porta 80 de sua máquina.


 ./ngrok http 80
Acesse o link disponibilizado em seu navegador. Utilize-o para acessar de outros dispositivos, como seu smartphone ou outro computador 😎.


./ngrok http 80