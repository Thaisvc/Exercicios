""" Exercício 1:
Aprimorando a classe Lista: nossa classe Lista atende as principais operações 
que essa TAD nos oferece, mas que tal melhorarmos? Para isso, você deve 
adicionar os seguintes métodos:

a. A operação clear nos permite remover todos os Nodes da lista;

b. A operação __get_node_at nos permite acessar o Node em qualquer
posição da lista.

Após criada as operações anteriores, refatore os seguintes métodos para
que utilizem a __get_node_at ante iterações:

insert_at;

insert_last;

remove_last;

remove_at;

get_element_at.

⚠️ Faça a análise de complexidade da sua solução. """


""" 1 - a. clear(self) - Para este desafio existem 2 possibilidades de 
respostas a serem implementadas. A opção #1 só funciona, sem que ocorra 
vazamento de memória, graças ao garbage collector do python, porém, o mais 
indicado é a opção #2, pois utilizam a própria estrutura para atribuir um 
novo comportamento. """


# 1

def clear(self):
    self.head_value = None
    self.__length = 0
# 2


def clear(self):
    while not self.is_empty():
        self.remove_first()


""" 1 - b. __get_node_at(self, position) - Para este desafio foi realizado
a extração do trecho de código mais repetitivo, que estava sendo utilizado nos demais métodos. Vale salientar que nos casos que precisamos do anterior ao ultimo, precisamos fazer a operação len(self) - 2.

 """


def __get_node_at(self, position):
    value_to_be_returned = self.head_value
    if value_to_be_returned:
        while position > 0 and value_to_be_returned.next:
            value_to_be_returned = value_to_be_returned.next
            position -= 1
    return value_to_be_returned

# A refatoração nas demais funções ficaram da seguinte forma:


def insert_at(self, value, position):
    if position < 1:
        return self.insert_first(value)
    if position >= len(self):
        return self.insert_last(value)
    current_value = self.__get_node_at(position - 1)
    next_value = Node(value)
    next_value.next = current_value.next
    current_value.next = next_value
    self.__length += 1


def insert_last(self, value):
    if self.is_empty():
        return self.insert_first(value)

    new_last_value = Node(value)
    actual_last_value = self.__get_node_at(len(self) - 1)
    actual_last_value.next = new_last_value
    self.__length += 1


def remove_last(self):
    if len(self) <= 1:
        return self.remove_first()

    previous_to_be_removed = self.__get_node_at(len(self) - 2)
    value_to_be_removed = previous_to_be_removed.next

    previous_to_be_removed.next = None
    self.__length -= 1
    return value_to_be_removed


def remove_at(self, position):
    if position < 1:
        return self.remove_first()
    if position >= len(self):
        return self.remove_last()

    previous_to_be_removed = self.__get_node_at(position - 1)

    value_to_be_removed = previous_to_be_removed.next
    previous_to_be_removed.next = value_to_be_removed.next
    value_to_be_removed.next = None
    self.__length -= 1

    return value_to_be_removed


def get_element_at(self, position):
    value_returned = None
    value_to_be_returned = self.__get_node_at(position)
    if value_to_be_returned:
        value_returned = Node(value_to_be_returned.value)
    return value_returned


""" 
Resposta da análise de complexidade:
O método __get_node_at realiza a busca de um item em qualquer local da lista, portanto sua Complexidade de tempo é O(n).

O método insert_at realiza a inserção de um item em qualquer lugar da lista, portanto sua Complexidade de tempo é O(n).

O método insert_last realiza a inserção de um item no final da lista, portanto sua Complexidade de tempo é O(1).

O método remove_last realiza a remoção de um item do final da lista, portanto sua Complexidade de tempo é O(1).

O método remove_at realiza a remoção de um item em qualquer lugar da lista, portanto sua Complexidade de tempo é O(n).

O método get_element_at realiza a busca de um item em qualquer local da lista, portanto sua Complexidade de tempo é O(n).

Exercício 2:
Nova busca: até o momento nossa estrutura consulta elementos através da posição. Nesta atividade será necessário criar uma função chamada def index_of(self, value), onde ela será responsável por consultar na lista a existência do valor informado e retornar a posição da primeira ocorrência. Caso o valor não exista, considere retornar -1. Esta função deve respeitar a complexidade O(n).

⚠️ Faça a análise de complexidade da sua solução.

Solução:
Nesta atividade é necessário percorrer toda a lista. As condições de parada são a existência do valor ou ter percorrido toda a lista sem sucesso. O valor é retornado caso encontrado e -1 caso contrário.

 """


def index_of(self, value):
    position = 1
    current_value = self.head_value
    while current_value:
        if current_value.value == value:
            return position
        current_value = current_value.next
        position += 1
    return -1


""" Resposta da análise de complexidade:
O método index_of percorre a lista toda, e por isso sua Complexidade de tempo é O(n). """
