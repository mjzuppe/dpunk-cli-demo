/// Map for commander
import chalk from "chalk";
import inquire from "./inquire.js";
import sequences from "./sequences.js";
import figlet from "figlet";
import gradient from "gradient-string";
import chalkTable from "chalk-table";
import { createSpinner } from 'nanospinner';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const banner = () => {
    console.log(`
    
    ${gradient.instagram(figlet.textSync('dpunk', {horizontalLayout: 'full'}))}

    ${chalk.greenBright('Sling around AWS like a radical')}
    `);
    
}

const list = async () => {
   console.log((chalkTable([
    {Name: "svelte-portfolio", Status: chalk.greenBright('Running'), Region: "us-west-2", URL: "https://somedeveloperisgreat.com"},
    {Name: "dpunk-launch", Status: chalk.yellowBright('Staged'), Region: "us-west-2", URL: ""}
   ])))
}

const listSolo = chalkTable([{Name: "dpunk-launch", Status: chalk.yellowBright('Staged'), Region: "us-west-2", URL: ""}]);

const listUpdated =
    chalkTable([ {Name: "dpunk-launch", Status: chalk.greenBright('Running'), Region: "us-west-2", URL: "https://dpunk-launch.preview.dpunk.com"}, ])

const actions = {
    create: async () => {
        banner();
        const build_config = await inquire(sequences.create_method);
        if (build_config['create-method'] === 'Auto Architect') await inquire(sequences.create_auto);
        else await inquire(sequences.create_manual);
        console.log(listSolo)
    },
    delete: () => {},
    list: () => list(),
    deploy: async () => {
        const spinner = new createSpinner('Deploying dpunk-launch to AWS...').start();
        await sleep(7000);
        spinner.success({text: 'Deployment complete', color: 'green'});
        console.log(listUpdated);
    },
};

const map = {
    commands: [
        {name: 'create', description: 'Create a new dpunk project', action: () => actions.create()},
        {name: 'delete', description: 'Delete a dpunk project', action: ()=> actions.delete()},
        {name: 'list', description: 'List all dpunk projects', action: ()=> actions.list()},
        {name: 'deploy', description: 'Deploy a dpunk project', action: ()=> actions.deploy()},
    ],
    options: [

    ],
};

export default map;