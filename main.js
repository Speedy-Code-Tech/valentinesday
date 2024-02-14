if ('speechSynthesis' in window) {
    // Create a new SpeechSynthesisUtterance object
    var message = new SpeechSynthesisUtterance();
  
    // Set the text to be spoken
    message.text = 'Hello, this is a test message.';
  
    // Optional: Set the voice
    // You can use the SpeechSynthesis.getVoices() method to get a list of available voices
    // For example, you can set the voice to a specific language or gender
    // message.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.lang === 'en-US'; })[0];
  
    // Optional: Set the rate and pitch
    // message.rate = 1.0; // Speech rate (0.1 to 10)
    // message.pitch = 1.0; // Speech pitch (0 to 2)
  
    // Speak the text
    window.speechSynthesis.speak(message);
  } else {
    // The browser doesn't support the SpeechSynthesis API
    console.log('Speech synthesis is not supported in this browser.');
  }