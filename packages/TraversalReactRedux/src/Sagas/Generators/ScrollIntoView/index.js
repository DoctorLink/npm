export default (elementId, blockEnd) => function* scrollIntoView() {
    let currentQuestion = document.getElementById(elementId);
    if (!currentQuestion) return;
    const args = blockEnd ? { block: "end" } : {};
    currentQuestion.scrollIntoView(args)
}

