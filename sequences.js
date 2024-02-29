/// Prompts for inquirer
import chalk from "chalk";
const description = (text) => `\t${chalk.gray(text)}`;

const sequences = {
    create_method: [
        {
            type: 'input',
            message: 'Enter your project name',
            name: 'project-name',
        },
        {
            type: 'list',
            message: 'How do you want to create a workload?',
            name: 'create-method',
            choices: [{name: `Auto Architect`, description: "we do the hard work"}, {name: 'Manual Architect'}],
        },
    ],
    create_auto_start: [
        {
            type: 'list',
            message: 'Choose a repository',
            name: 'repository',
            choices: [{name: 'dpunk-test'}, {name: 'astro-blog'}, {name: 'woocommerce-example'}],
        },
        {
            type: 'list',
            message: 'Choose a branch',
            name: 'repository',
            choices: [{name: 'main'}, {name: 'preview'}, {name: 'test-staging'}],
        },
    ],
    create_auto_end: [
        {
            type: 'checkbox',
            message: 'Configure options',
            name: 'configure-options',
            choices: ['Use for production', 'Make highly-available for outages', 'Avoid Severless', 'Retains logs', 'Create an admin dashboard' ].map(opt => ({name: opt})),
        },
        {
            type: 'list',
            message: 'Choose additional add-ons',
            name: 'add-ons',
            choices: ['Choose multiple regions...', 'Backup options...','Add a database...', 'Add object storage...', 'Configure CI/CD...', 'Add budget warning...', 'Add notifications...', 'Next' ].map(opt => ({name: opt})),
        }
    ],    
    create_manual: [
        {
            type: 'list',
            message: 'Start building...',
            name: 'start-building',
            choices: ['Build components...', 'Global Settings...'],   
        },
        {
            type: 'list',
            message: 'Choose a component',
            name: 'building-component',
            choices: ['CI/CD...', 'Compute...', 'Database...', 'Logs/Traces...', 'Storage...', 'Networking...', 'Monitoring...', 'Security...', 'Notifications...', 'Budgets...', 'Backups...' ].map(opt => ({name: opt})),   
        },
        {
            type: 'list',
            message: 'Choose a compute option',
            name: 'compute-option',
            choices: ['EC2 instance...', 'EKS cluster...', 'Lambda Function...', 'Fargate...'].map(opt => ({name: opt})),
        },
        {
            type: 'list',
            message: 'Configure EC2 instance',
            name: 'config-ec2',
            choices: ['Type', 'Size', 'OS', 'Storage'].map(opt => ({name: opt})),
        },
        {
            type: 'list',
            message: 'Choose a type',
            name: 'type-type',
            choices: [{value: `General Purpose ${description('a balance of compute, memory and networking resources.')}`}, {value: `Compute Optimized ${description('high-performance processors for modeling, gaming, and compute intensive applications.')}`}, {value: `Memory Optimized ${description('fast performance for workloads that process large data sets in memory for caching, Hadoop, or realtime analytics.')}`}, {value: `Storage Optimized ${description('high, sequential read and write access on local storage for transactional dbs, search, or datawarehouses.')}`}],
        }


    ],
};

export default sequences;