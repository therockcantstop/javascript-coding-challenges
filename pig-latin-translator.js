// Translates string into pig latin

def main():
    words = str(input("Type a sentence that you want translated into pig latin dood:")).split()
    for word in words:
        print(word[1:] + word[0] + "ay", end = " ")
    print ()

main()
