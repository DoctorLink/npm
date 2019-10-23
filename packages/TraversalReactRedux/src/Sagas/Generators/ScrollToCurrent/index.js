export default blockEnd => function* scrollToCurrent() {
    const args = blockEnd ? { block: "end" } : {};
    let currentQuestion = document.getElementById("CurrentQuestion")
    if (currentQuestion)
        currentQuestion.scrollIntoView(args)
}

