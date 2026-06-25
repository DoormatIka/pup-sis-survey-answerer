function run(rating) {
  if (rating < 1 || rating > 5) {
    return alert("Please type a rating in 1-5.");
  }

  const ratingIndex = 5 - rating;
  const ratingLetters = ["a", "b", "c", "d", "e"];
  const selectedLetter = ratingLetters[ratingIndex];

  let i = 1;
  while (true) {
    const question = document.getElementById(`q${i}${selectedLetter}`);
    if (!question) break;
    question.checked = true;
    i++;
  }

  window.scrollTo(0, document.body.scrollHeight);
}
run(3); // <<< change this to the total rating!!
