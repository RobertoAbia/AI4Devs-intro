document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const inputText = document.getElementById("inputText");
  const reverseBtn = document.getElementById("reverseBtn");
  const result = document.getElementById("result");

  // Function to reverse the string
  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  // Add click event listener to the button
  reverseBtn.addEventListener("click", function () {
    const originalText = inputText.value;
    const reversedText = reverseString(originalText);
    result.textContent = reversedText;

    // Add animation effect
    result.classList.add("opacity-0");
    result.classList.add("transform", "scale-95");
    setTimeout(() => {
      result.classList.remove("opacity-0", "scale-95");
      result.classList.add("opacity-100", "scale-100");
    }, 50);
  });

  // Add enter key support
  inputText.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      reverseBtn.click();
    }
  });
});
