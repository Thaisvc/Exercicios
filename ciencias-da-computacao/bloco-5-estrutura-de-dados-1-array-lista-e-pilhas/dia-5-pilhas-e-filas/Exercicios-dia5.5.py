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
