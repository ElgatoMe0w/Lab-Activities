
document.addEventListener("DOMContentLoaded", () => {
   
    const textInput = document.getElementById("textInput");
    const wordCount = document.getElementById("wordCount");
    const sentenceCount = document.getElementById("sentenceCount");
  
  
    textInput.addEventListener("input", () => {
     
      const text = textInput.value.trim();
      
      const words = text.split(/\s+/).filter(word => word !== "");
      wordCount.textContent = words.length;
  
      const sentences = text.split(/[.!?]+\s/).filter(sentence => sentence.trim() !== "");
      sentenceCount.textContent = sentences.length;
    });
  });
  