// Basic frontend test using Jest
// You'll need to install Jest first: npm install jest

describe('Sorting Hat Frontend', () => {
    // Mock document functions
    document.body.innerHTML = `
      <div class="sorting-questions">
        <div class="question" id="question-0">
          <input type="radio" name="q0" value="0">
          <input type="radio" name="q0" value="1">
        </div>
        <div class="question" id="question-1" style="display: none;">
          <input type="radio" name="q1" value="0">
          <input type="radio" name="q1" value="1">
        </div>
      </div>
    `;
  
    // Import functions to test
    require('../static/js/script.js');
  
    test('showNextQuestion should show the next question when an answer is selected', () => {
      // Set up the test
      const firstQuestion = document.getElementById('question-0');
      const secondQuestion = document.getElementById('question-1');
      const firstQuestionInput = document.querySelector('input[name="q0"][value="0"]');
      
      // Select an answer for the first question
      firstQuestionInput.checked = true;
      
      // Call the function to test
      showNextQuestion(0);
      
      // Check if the first question is now hidden
      expect(firstQuestion.style.display).toBe('none');
      
      // Check if the second question is now visible
      expect(secondQuestion.style.display).toBe('block');
    });
  });