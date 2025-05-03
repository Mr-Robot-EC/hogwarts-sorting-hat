from flask import Flask, render_template, request, redirect, url_for, jsonify
import json
import os
import uuid
from datetime import datetime

#print(f"Current working directory: {os.getcwd()}")
#print(f"Template folder should be: {os.path.abspath('../../../frontend/templates')}")

# Simpler, more direct approach
BASE_DIR = "C:\\Users\\Dell\\Desktop\\projects\\hogwarts_houses"
TEMPLATE_DIR = os.path.join(BASE_DIR, 'frontend', 'templates')
STATIC_DIR = os.path.join(BASE_DIR, 'frontend', 'static')

# Verify template directory exists
if not os.path.exists(TEMPLATE_DIR):
    raise Exception(f"Template directory not found: {TEMPLATE_DIR}")


if not os.path.exists(TEMPLATE_DIR):
    raise Exception(f"Template directory not found: {TEMPLATE_DIR}")

app = Flask(__name__,
           static_folder=STATIC_DIR,
           template_folder=TEMPLATE_DIR)

app.jinja_env.globals.update(enumerate=enumerate)


# Initialize data storage
DATA_FILE = 'students.json'


def load_students():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'r') as f:
            return json.load(f)
    return []


def save_students(students):
    with open(DATA_FILE, 'w') as f:
        json.dump(students, f, indent=2)


# House data
HOUSES = {
    "Gryffindor": {
        "founder": "Godric Gryffindor",
        "house_values": ["Courage", "Determination", "Nobility"],
        "symbol": "Lion",
        "colors": ["#740001", "#D3A625"],  # Scarlet & Gold
        "description": "Founded by Godric Gryffindor, this house values courage, determination, and nobility. Its symbol is a lion, representing bravery and strength, and its colors are scarlet and gold. Gryffindors are known for their daring spirit and willingness to stand up for what's right, even in the face of danger."
    },
    "Hufflepuff": {
        "founder": "Helga Hufflepuff",
        "house_values": ["Loyalty", "Kindness", "Hard Work"],
        "symbol": "Badger",
        "colors": ["#FFD800", "#000000"],  # Yellow & Black
        "description": "Created by Helga Hufflepuff, this house rewards loyalty, kindness, and hard work. Its emblem is a badger, symbolizing persistence and dedication, and its colors are yellow and black. Hufflepuffs are known for their fairness, strong sense of community, and ability to see the good in others."
    },
    "Ravenclaw": {
        "founder": "Rowena Ravenclaw",
        "house_values": ["Intelligence", "Creativity", "Wisdom"],
        "symbol": "Eagle",
        "colors": ["#0E1A40", "#946B2D"],  # Blue & Bronze
        "description": "Founded by Rowena Ravenclaw, this house is home to those who excel in intelligence, creativity, and wisdom. Its symbol is an eagle, representing soaring intellect, and its colors are blue and bronze. Ravenclaws are celebrated for their wit, curiosity, and pursuit of knowledge."
    },
    "Slytherin": {
        "founder": "Salazar Slytherin",
        "house_values": ["Ambition", "Cunning", "Determination"],
        "symbol": "Snake",
        "colors": ["#1A472A", "#AAAAAA"],  # Green & Silver
        "description": "Established by Salazar Slytherin, this house values ambition, cunning, and determination. Its emblem is a serpent, symbolizing cleverness and adaptability, and its colors are green and silver. Slytherins are known for their resourcefulness, strategic thinking, and strong leadership qualities."
    }
}

# Expanded screening questions
SCREENING_QUESTIONS = [
    {
        "id": "kind_smart",
        "question": "Is it better to be kind or smart?",
        "options": ["Kind", "Smart"]
    },
    {
        "id": "wise_brave",
        "question": "Is it better to be wise or brave?",
        "options": ["Wise", "Brave"]
    },
    {
        "id": "generous_ambitious",
        "question": "Is it better to be generous or ambitious?",
        "options": ["Generous", "Ambitious"]
    },
    {
        "id": "knowledge_power",
        "question": "What is better?",
        "options": ["Knowledge", "Power"]
    },
    {
        "id": "rules_intuition",
        "question": "Do you prefer to follow rules or your intuition?",
        "options": ["Rules", "Intuition"]
    },
    {
        "id": "books_adventure",
        "question": "Would you rather spend an afternoon with books or on an adventure?",
        "options": ["Books", "Adventure"]
    },
    {
        "id": "fame_respect",
        "question": "Which matters more to you?",
        "options": ["Earning respect", "Gaining fame"]
    }
]


# Extended house sorting algorithm
def determine_house(answers):
    # Handle test cases with only 4 answers
    if len(answers) < 7:
        # Pad with default values if needed
        while len(answers) < 7:
            answers.append(0)

    # Rest of your function remains the same
    points = {
        "Gryffindor": 0,
        "Hufflepuff": 0,
        "Ravenclaw": 0,
        "Slytherin": 0
    }

    # Question 1: Kind (H) vs Smart (R)
    if answers[0] == 0:  # Kind
        points["Hufflepuff"] += 2
        points["Gryffindor"] += 1
    else:  # Smart
        points["Ravenclaw"] += 2
        points["Slytherin"] += 1

    # Question 2: Wise (R) vs Brave (G)
    if answers[1] == 0:  # Wise
        points["Ravenclaw"] += 2
        points["Hufflepuff"] += 1
    else:  # Brave
        points["Gryffindor"] += 2
        points["Slytherin"] += 1

    # Question 3: Generous (H) vs Ambitious (S)
    if answers[2] == 0:  # Generous
        points["Hufflepuff"] += 2
        points["Gryffindor"] += 1
    else:  # Ambitious
        points["Slytherin"] += 2
        points["Ravenclaw"] += 1

    # Question 4: Knowledge (R) vs Power (S)
    if answers[3] == 0:  # Knowledge
        points["Ravenclaw"] += 2
        points["Gryffindor"] += 1
    else:  # Power
        points["Slytherin"] += 2

    # Question 5: Rules (H,R) vs Intuition (G,S)
    if answers[4] == 0:  # Rules
        points["Ravenclaw"] += 1
        points["Hufflepuff"] += 1
    else:  # Intuition
        points["Gryffindor"] += 1
        points["Slytherin"] += 1

    # Question 6: Books (R) vs Adventure (G)
    if answers[5] == 0:  # Books
        points["Ravenclaw"] += 2
    else:  # Adventure
        points["Gryffindor"] += 2
        points["Slytherin"] += 1

    # Question 7: Respect (H) vs Fame (S, G)
    if answers[6] == 0:  # Respect
        points["Hufflepuff"] += 2
        points["Ravenclaw"] += 1
    else:  # Fame
        points["Slytherin"] += 1
        points["Gryffindor"] += 1

    # Find house with highest points
    house = max(points, key=points.get)

    # Special case for Harry Potter
    return house


# Special cases mapping
SPECIAL_CASES = {
    "Harry": "Gryffindor",
    "Hermione": "Gryffindor",
    "Ron": "Gryffindor",
    "Neville": "Gryffindor",
    "Draco": "Slytherin",
    "Luna": "Ravenclaw",
    "Cedric": "Hufflepuff",
    "Cho": "Ravenclaw"
}


@app.route('/')
def index():
    #default_house = "Gryffindor"
    return render_template('index.html', now=datetime.now(),
                          house_data=HOUSES["Gryffindor"])

@app.route('/sorting', methods=['GET', 'POST'])
def sorting():
    if request.method == 'POST':
        student_name = request.form.get('name')

        # Check for special cases
        if student_name in SPECIAL_CASES:
            house = SPECIAL_CASES[student_name]
            special_message = f"Ah, {student_name}! I know exactly where to put you!"
            return render_template('result.html',
                                   name=student_name,
                                   house=house,
                                   house_data=HOUSES[house],
                                   special_message=special_message)

        # For Harry, show a special dialogue
        if student_name.lower() == "harry":
            return render_template('harry_special.html')

        return render_template('sorting.html',
                               name=student_name,
                               questions=SCREENING_QUESTIONS)

    return redirect(url_for('index'))


@app.route('/result', methods=['POST'])
def result():
    student_name = request.form.get('name')
    answers = [int(request.form.get(f'q{i}')) for i in range(len(SCREENING_QUESTIONS))]

    house = determine_house(answers)

    # Add student to the list
    students = load_students()
    students.append({
        "id": str(uuid.uuid4()),
        "name": student_name,
        "house": house,
        "date_sorted": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    })
    save_students(students)

    return render_template('result.html',
                           name=student_name,
                           house=house,
                           house_data=HOUSES[house])


@app.route('/students')
def view_students():
    students = load_students()
    return render_template('students.html',
                           students=students,
                           houses=HOUSES)


@app.route('/api/students', methods=['GET'])
def api_students():
    house_filter = request.args.get('house')
    students = load_students()

    if house_filter:
        students = [s for s in students if s['house'] == house_filter]

    return jsonify(students)


if __name__ == '__main__':
    app.run(debug=True)