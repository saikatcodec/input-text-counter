let textArea = document.getElementById('text');
let count = document.getElementById('count');

textArea.addEventListener('input', () => {
    let text = textArea.value; // Extract text from text field
    let words = text.split(' '); // Seperate word from text
    let length = words.length; // Count length with newline
    words.forEach((word) => {
        
        // Check Word contains new line or not
        if (word.includes('\n')) {
            length--;
            let newWords = word.split('\n'); // Create new word from  new line
            let newLength = newWords.length; // Determine the length of the new word

            // New word has empty word or not
            newWords.forEach(newWord => {
                if (newWord === '') {
                    newLength--;
                }
            })
            length += newLength;
        } else if (word === '') {
            // Or word has empty word or not
            length--;
        }
    });
    
    // Set the text of counter
    count.innerHTML = length;
});