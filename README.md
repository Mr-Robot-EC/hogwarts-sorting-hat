# 🧙‍♂️ Hogwarts Sorting Hat 🧙‍♀️

An interactive web application that sorts users into Hogwarts houses based on their personality and choices. Built with Flask, HTML, CSS, and JavaScript.

![Hogwarts Sorting Hat](https://example.com/sorting-hat-preview.jpg)

## ✨ Features

- **Immersive Sorting Experience**: Answer a series of questions to determine your Hogwarts house
- **Special Character Recognition**: Unique experiences for known Harry Potter characters
- **Beautiful Harry Potter Theme**: Authentic visuals, animations, and sound effects
- **Student Registry**: View all sorted students and filter by house
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Lightweight Data Storage**: No database setup required

## 🧪 House Characteristics

Each Hogwarts house values different traits:

- **Gryffindor**: Courage, Determination, Nobility
- **Hufflepuff**: Loyalty, Kindness, Hard Work
- **Ravenclaw**: Intelligence, Creativity, Wisdom
- **Slytherin**: Ambition, Cunning, Determination

## 🚀 Getting Started

### Prerequisites

- Python 3.8+
- Flask

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hogwarts-sorting-hat.git
   cd hogwarts-sorting-hat
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the application:
   ```bash
   python app.py
   ```

5. Open your browser and navigate to:
   ```
   http://127.0.0.1:5000/
   ```

## 📸 Screenshots

| Home Screen | Sorting Questions | House Reveal |
|:-----------:|:-----------------:|:------------:|
| ![Home](https://example.com/home.jpg) | ![Questions](https://example.com/questions.jpg) | ![Reveal](https://example.com/reveal.jpg) |

## 🧩 How It Works

The sorting algorithm takes into account your answers to various questions about your preferences and personality traits. Each answer contributes points to different houses, and the house with the highest points becomes your Hogwarts house.

Special characters from the Harry Potter universe (Harry, Hermione, Ron, etc.) are automatically sorted into their canonical houses.

## 🎮 Usage

1. Enter your name on the home page
2. Answer all the sorting questions honestly
3. Discover your Hogwarts house!
4. View all sorted students in the registry

## 🛠️ Customization

You can customize various aspects of the application:

- **Add Questions**: Edit the `SCREENING_QUESTIONS` list in app.py
- **Modify House Logic**: Adjust the `determine_house` function 
- **Add Special Cases**: Update the `SPECIAL_CASES` dictionary
- **Change Visuals**: Modify CSS and images in the static directory

## 📱 Responsive Design

The application is fully responsive and works on all devices:

- Desktop: Full experience with animations and effects
- Tablet: Optimized layout for medium screens
- Mobile: Streamlined interface for smaller screens

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- J.K. Rowling for the Harry Potter universe
- Flask framework for the web application
- Images and sounds from various free resources

## ⚡ "Mischief Managed" ⚡