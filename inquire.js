/// Map for inquirer
import inquirer from 'inquirer';

const inquire = async (payload) => {
    let answers = {};
    for (let i = 0; i < payload.length; i++) {
        const prompt = payload[i];
        await inquirer.prompt(prompt).then((answer) => answers = {...answers, ...answer});
    }
    return answers;
};

export default inquire;