# 🧙 Hogwarts Sorting Hat Application

An interactive web application that sorts users into Hogwarts houses based on their personality traits and preferences.

## About the Application

This application simulates the Sorting Hat experience from the Harry Potter universe. Users enter their name and answer a series of questions, after which they are sorted into one of the four Hogwarts houses:

- **Gryffindor**: Home to the brave and courageous
- **Hufflepuff**: Where loyalty and hard work are valued
- **Ravenclaw**: For those of wit and learning
- **Slytherin**: House of ambition and cunning

Special characters from the Harry Potter series receive their canonical house assignments, with Harry Potter getting a special sorting experience.

## Features

- Interactive personality quiz with 7 questions
- Special sorting experience for Harry Potter
- Student registry to view all sorted students
- Filter students by house
- Beautiful Harry Potter-themed UI with animations
- Responsive design for all screen sizes

## Technology Stack

- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS, JavaScript
- **Data Storage**: Simple JSON file (no database required)

## Installation

1. Clone this repository:
```
git clone https://github.com/yourusername/hogwarts-sorting-hat.git
cd hogwarts-sorting-hat
```

2. Create a virtual environment and activate it:
```
python -m venv venv

# On Windows:
venv\Scripts\activate

# On macOS/Linux:
source venv/bin/activate
```

3. Install dependencies:
```
pip install -r backend/src/app/requirements.txt
```

4. Run the application:
```
cd backend/src/app
python -m api.app
```

5. Open your browser and navigate to:
```
http://127.0.0.1:5000/
```

## Running Tests

To run the backend tests:
```
cd backend
python -m src.tests.test_app
```

## Project Structure

```
hogwarts_houses/
├── backend/
│   └── src/
│       ├── app/
│       │   ├── api/
│       │   │   └── app.py
│       │   └── requirements.txt
│       ├── data/
│       │   └── students.json
│       └── tests/
│           └── test_app.py
├── frontend/
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── images/
│   │   │   ├── hogwarts-bg.jpg
│   │   │   ├── hogwarts-crest.png
│   │   │   └── ...
│   │   ├── js/
│   │   │   └── script.js
│   │   └── sounds/
│   │       └── ...
│   └── templates/
│       ├── harry_special.html
│       ├── index.html
│       ├── result.html
│       ├── sorting.html
│       └── students.html
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgements

- J.K. Rowling for the Harry Potter universe
- Flask framework
- All open-source libraries used in this project