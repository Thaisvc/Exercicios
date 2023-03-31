""" 
1 - OK
0 - Instabilidades

valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
resultado = 3

valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
resultado = 4 """


def verify_max_time_ok(collected_values):
    max_time = 0
    current_time = 0
    for value in collected_values:
        if value == 1:
            current_time += 1
        else:
            current_time = 0
        if current_time >= max_time:
            max_time = current_time
    return max_time

# O algoritmo realiza um for,portanto possui Complexidade de Tempo O(n).


def shuffle(items):
    answer = []
    div_cards_by_two = len(items) // 2  # divide a lista ao meio exemplo
    # de lista [1, 4, 4, 7, 6, 6]
    print(div_cards_by_two)  # saida 3 meio da lista
    # range vai receber um numero 3 q e o meio da lista e vai
    # gerar para o  offset um numero de 0,1,2 = 3 q são index
    for offset in range(div_cards_by_two):
        # a cada iteraçao offset muda indicando um index na lista items
        # entao primeira  iteraçao index 0 numero 1 da lista q e fatiada pelo :
        # e de novo : fatiada para pegar o 3 numero da lista (div_cards_by_two)
        # q e o 7
        answer.extend(items[offset::div_cards_by_two])
        # resutaldo final [1, 7, 4, 6, 4, 6]

    return answer


""" Ao usar lista[começo:fim:passo] nós temos “slices”, pedaços da lista que
começam em começo (por padrão 0), terminam em fim (por padrão, até o 
fim da lista) 
e pula de passo em passo (por padrão, 1). 
ou seja, [11, 12, 21, 22, 31, 32][::2]
resulta em [11, 21, 31].

Resposta da análise de complexidade

O algoritmo realiza um for, portanto possui Complexidade de Tempo O(n). """
