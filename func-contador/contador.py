def contador(frase):
    dici = {}
    palavras = frase.split()

    for palavra in palavras:
        if palavra in dici:
            dici[palavra] += 1
        else:
            dici[palavra] = 1
    return dici


frase = contador("Esse exercício é um exercício fácil ou difícil")
print(frase)