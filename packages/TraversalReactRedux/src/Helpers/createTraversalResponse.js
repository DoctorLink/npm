export default traversal => ({
    traversalId: traversal.traversalId,
    responses: !traversal.answers ? null : Object.keys(traversal.answers).map(function (answerId) {
        var a = traversal.answers[answerId];
        if ((!a.controlValue || a.controlValue === "") && !a.controlChecked) return undefined;
        return {
            nodeId: a.nodeId,
            questionId: a.questionId,
            answerId: a.answerId,
            value: a.controlValue
        }
    }).filter(a => a)
})