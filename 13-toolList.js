function toolchanger(tools, startIndex, target) {
    let finishSteps = [];

    const runMachine = (dir) => {
        let actualIndex = startIndex;
        let actualTool;
        let steps = 0;
        let finalSteps;
        while (!finalSteps) {
            actualTool = tools[actualIndex];
            if (actualTool === target) finalSteps = steps;

            if (dir === 'left') {
                if (actualIndex === 0) actualIndex = tools.length - 1;
                else actualIndex--;
            }

            if (dir === 'right') {
                if (actualIndex === tools.length - 1) actualIndex = 0;
                else actualIndex++;
            }

            ++steps;
        }

        finishSteps.push(finalSteps);
    };

    runMachine('left');
    runMachine('rigth');

    return Math.min([...finishSteps]);
}
