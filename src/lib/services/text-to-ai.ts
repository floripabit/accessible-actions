const startText = "Consider you have the following list of action keys:\n";
const endText = "What should be the correct action key to select considering a user does the following request:\n";

const availableActions = [
        'CALL_RAQUEL', 'CALL_ADRIANO', 'CALL_POLICE'
];

export function getBaseAiText(actions = availableActions): string {
        let returnText = startText;
        actions.forEach((action) => {
                returnText += "* "+ action + "\n";
        });
        returnText += endText;
        return returnText;
}