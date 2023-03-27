"""  POO em Python
Nesse exercício você implementará uma função em Python para resolver um teste 
técnico similar ao que já foi aplicado pelo Facebook e outras big techs! Tente 
desenvolver uma solução otimizada e escolha bem qual estrutura de dados será 
utilizada em termos de complexidade de tempo e espaço! Essa escolha tende a 
ser um diferencial em um processo seletivo desse tipo.
Exercício
Implemente um sistemas de logs por nível de severidade, seguindo o diagrama 
abaixo 
(link) 
https://content-assets.betrybe.com/prod/7175f0c7-9311-43f0-ae7b-7434bf58ba68-Diagrama%20de%20classes%20do%20sistema%20de%20logs.png

Classe Log

Atributos:

manipuladores - Será inicializado com um conjunto de subclasses de 
ManipuladorDeLog;
Métodos:

adicionar_manipulador - adiciona um manipulador ao conjunto de manipuladores 
do gerenciamento de logs (Log);

info - dispara logs com nível de severidade "INFO";

alerta - dispara logs com nível de severidade "ALERTA";

erro - dispara logs com nível de severidade "ERRO";

debug - dispara logs com nível de severidade "DEBUG";

__log - dispara os logs formatados para todos os manipuladores (invocado para 
cada nível de severidade, para evitar duplicação de código);

__formatar - formata os logs de acordo com o padrão
“[ERRO - 01/01/2020 13:00:00]: ZeroDivisionError: division by zero”;

Classe ManipuladorDeLog:

A classe ManipuladorDeLog é uma interface 
(e, por consequência, uma classe abstrata) e deve declarar um método 
de classe (classmethod) e abstrato (abstractmethod) log que recebe um
parâmetro mensagem ou msg.

Classes LogEmArquivo e LogEmTela:

As classes LogEmArquivo e LogEmTela devem herdar de ManipuladorDeLog e 
sobrescrever o método de classe log, salvando a mensagem em um arquivo
ou a exibindo na tela, respectivamente.

🐦 Dica: Você pode utilizar a função print em tela ou em arquivo 
(que pode ter um nome padrão).
"""
from abc import ABC, abstractmethod
from datetime import datetime


class ManipuladorDeLog(ABC):
    @classmethod
    @abstractmethod
    def log(cls, msg):
        raise NotImplementedError


class LogEmArquivo(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        with open('log.txt', 'a') as arquivo:
            print(msg, file=arquivo)


class LogEmTela(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        print(msg)


class Log:
    def __init__(self, manipuladores):
        self.__manipuladores = set(manipuladores)

    def adicionar_manipulador(self, manipulador):
        self.__manipuladores.add(manipulador)

    def info(self, msg):
        self.__log('INFO', msg)

    def alerta(self, msg):
        self.__log('ALERTA', msg)

    def erro(self, msg):
        self.__log('ERRO', msg)

    def debug(self, msg):
        self.__log('DEBUG', msg)

    def __log(self, nivel, msg):
        for manipulador in self.__manipuladores:
            manipulador.log(self.__formatar(nivel, msg))

    def __formatar(self, nivel, msg):
        data = datetime.now().strftime('%d/%m/%Y %H:%M:%S')
        return f"[{nivel} - {data}]: {msg}"
