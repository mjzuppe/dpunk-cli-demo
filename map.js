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
};

const view = () => {

        console.log(chalk.bold('Global Components'));
        console.log((chalkTable([
         {ID: "WVYOJO9IITVX", Componenent: "IAM Role", Description: "New role for admin access to workload", Status: chalk.yellowBright('Staged')},
         {ID: "R9JE3RS6QT3A", Componenent: "CloudFront Distribution", Description: "CDN to accelerate site performance", Status: chalk.yellowBright('Staged')},
         {ID: "PYPGYEDXKWMP", Componenent: "WAF", Description: "Firewall to prevent common attacks", Status: chalk.yellowBright('Staged') }
        ])));
        console.log(chalk.bold('Regional VPC Components'));
        console.log((chalkTable([
         {ID: "SPHVOISZNNE4", Componenent: "VPC", Description: "Virtual private cloud", Region: "us-west-2", Status: chalk.yellowBright('Staged')},
         {ID: "9SD3DM2E88XV", Componenent: "Subnet", Description: "Logical private network", Region: "us-west-2", Status: chalk.yellowBright('Staged')},
         {ID: "US8N485DFQ56", Componenent: "Lambda Function",Description: "Serverless hosting for application", Region: "us-west-2", address: "", Status: chalk.yellowBright('Staged')},
         {ID: "CJF0BN1FB3PW", Componenent: "S3 Bucket", Description: "Object storage for logs",Region: "us-west-2", address: "", Status: chalk.yellowBright('Staged') }
        ])));
};

const listSolo = chalkTable([{Name: "dpunk-launch", Status: chalk.yellowBright('Staged'), Region: "us-west-2", URL: ""}]);

const listUpdated =
    chalkTable([ {Name: "dpunk-launch", Status: chalk.greenBright('Running'), Region: "us-west-2", URL: "https://dpunk-launch.preview.dpunk.com"}, ])

const actions = {
    create: async () => {
        banner();
        const build_config = await inquire(sequences.create_method);
        if (build_config['create-method'] === 'Auto Architect') {
            await inquire(sequences.create_auto_start);
            const spinner1 = new createSpinner('Scanning repo to configure deployment...').start();
            await sleep(7000);
            spinner1.success({text: 'Scanning complete', color: 'green'});
            await inquire(sequences.create_auto_end);
            const spinner2 = new createSpinner('Designing project architecture...').start();
            await sleep(7000);
            spinner2.success({text: 'Project complete', color: 'green'});
            console.log(listSolo);
        }
        else await inquire(sequences.create_manual);

    },
    delete: () => {},
    list: () => list(),
    deploy: async () => {
        const spinner = new createSpinner('Deploying dpunk-launch to AWS...').start();
        await sleep(7000);
        spinner.success({text: 'Deployment complete', color: 'green'});
        console.log(listUpdated);
    },
    view: () => view()
};

const map = {
    commands: [
        {name: 'create', description: 'Create a new dpunk project', action: () => actions.create()},
        {name: 'delete', description: 'Delete a dpunk project', action: ()=> actions.delete()},
        {name: 'list', description: 'List all dpunk projects', action: ()=> actions.list()},
        {name: 'deploy', description: 'Deploy a dpunk project', action: ()=> actions.deploy()},
        {name: 'view', description: 'View a dpunk project', action: ()=> actions.view()}
    ],
    options: [

    ],
};

export default map;