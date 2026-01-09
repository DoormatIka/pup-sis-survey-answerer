// Instructions: Paste this in your
// browser's DevTools console.

function run(rating) {
  if (rating < 1 || rating > 5) {
    return alert("Please type a rating in 1-5.");
  }

  // 0 to 4
  const ratingIndex = rating - 1;
  const ratingLetters = ["a", "b", "c", "d", "e"];
  try {
    let i = 0;
    while (true) {
      const selectedRating = ratingLetters[ratingIndex];
      const question = document.getElementById(`q${i}${selectedRating}`);
      question.checked = true;

      i++;
    }
  } catch (err) {
    window.scrollTo(0, document.body.scrollHeight);
    document.getElementsByName("btnSubmit")[0].click();
  }
}
run(3);
