const button = document.querySelector("button");
const textarea = document.querySelector("textarea");
const select = document.querySelector("select");

let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, i) => {
    select.options[i] = new Option(voice.name, i);
  });
};

select.addEventListener("change", ()=>{
    speech.voice = voices[select.value];
});

let speech = new SpeechSynthesisUtterance();

button.addEventListener("click", () => {
  speech.text = textarea.value;
  window.speechSynthesis.speak(speech);
});
