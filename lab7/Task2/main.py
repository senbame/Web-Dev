from models import Animal, Dog, Cat


def main():
    dog = Dog("Бакс", 3, "Овчарка")
    cat = Cat("Мурсик", 2, "Рыжий")
    animal = Animal("Общий", 5, "Неизвестный")

    animals = [dog, cat, animal]

    for a in animals:
        print(a)
        print(a.speak())
        print(a.move())
        print()


if __name__ == "__main__":
    main()