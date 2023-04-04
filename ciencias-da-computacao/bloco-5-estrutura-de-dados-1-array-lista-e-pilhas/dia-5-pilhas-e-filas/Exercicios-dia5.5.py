import LinkedList


""" Exercício 1:
Filas: crie uma classe Queue, onde deve conter as operações: enqueue, dequeue,
peek e is_empty.

Para este desafio, é necessário efetuar o import das classes LinkedList e Node
e utilizar seus métodos de acesso para simular uma fila, respeitando
o padrão FIFO. """


class Queue:

    def __init__(self):
        self.__data = LinkedList()

    def is_empty(self):
        return not len(self.__data)

    def enqueue(self, value):
        self.__data.insert_last(value)

    def dequeue(self):
        return self.__data.remove_first()

    def peek(self):
        return self.__data.get_element_at(0)


""" Exercício 2:
Pilhas: crie uma classe Stack, onde deve conter as
operações: push, pop, peek e is_empty. """


class Stack:

    def __init__(self):
        self.__data = LinkedList()

    def is_empty(self):
        return not len(self.__data)

    def push(self, value):
        self.__data.insert_last(value)

    def pop(self):
        return self.__data.remove_last()

    def peek(self):
        return self.__data.get_element_at(len(self.__data))


""" Exercício 3:
Estenda a classe Stack, que escrevemos durante as explicações do 
conteúdo, adicionando uma nova função chamada min_value() que irá 
retornar o menor valor inteiro presente na pilha. """


def min_value(self):
    if self.is_empty():
        return None

    min_value = self._data[0]
    for elem in self._data:
        if elem < min_value:
            min_value = elem
        return min_value

    # def clear(self):
    #     self._data.clear()


if __name__ == "__main__":
    elements = [2, 1, 5, 4, 10, 6, 8, 22, 11, 10]
    content_stack = Stack()

    for elem in elements:
        content_stack.push(elem)

    # saída: 1
    print(content_stack.min_value())
    content_stack.push(-5)
    # saída: -5
    print(content_stack.min_value())

""" Resposta da análise de complexidade:
O método min_value realiza uma iteração com for, e por isso sua
Complexidade de tempo é O(n). """
