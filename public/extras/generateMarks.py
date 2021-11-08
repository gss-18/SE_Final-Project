from random import randint
# Generate random marks for a student
def generate(email,sem):
    marks = []
    for i in range(1,sem):
        cpga = randint(6,9)+randint(0,9)*0.1
        marks.append({i:cpga})
    dic = {"email":email,"semester":marks}
    return dic
print(generate('gsstrivikram18@gmail.com',5))