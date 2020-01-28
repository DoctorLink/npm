export default (elementId, blockEnd) => function* scrollIntoView() {
    let currentQuestion = document.getElementById(elementId);
    if (!currentQuestion) return;
    currentQuestion.scrollIntoView({behavior: "smooth"})
}

