import math

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



def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price


# Uma alternativa mais direta, utilizando o módulo math

def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = math.ceil(required_liters / 18)
    return required_cans, required_cans * can_price




def type_of_triangle(side1, side2, side3):
    is_triangle = (
            side1 + side2 > side3 and
            side2 + side3 > side1 and
            side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"