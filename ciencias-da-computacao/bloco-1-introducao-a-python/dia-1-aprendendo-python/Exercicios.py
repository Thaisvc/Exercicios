def maior (a,b):
    if a >= b :
        return a 
    else:
        return b
  
def mean(numbers):
    total = 0
    for number in numbers:
        total += number # = number + total
    return total / len(numbers)  # a soma de todos os numeros divido pelo tamanho da lista """

def prints (n):
    if n > 1 :
        return print('*' * n)
    else:
        return  print('deu ruim')
    
  #GABARITO 👇

def draw_square(n):
    for row in range(n):
        print(n * '*')

def find_biggest_name(names):
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name