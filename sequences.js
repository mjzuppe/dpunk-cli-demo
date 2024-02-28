/// Prompts for inquirer
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
            choices: [{name: 'Auto Architect'}, {name: 'Manual Architect'}],
        },
    ],
    create_auto: [
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
            choices: ['Family', 'Size', 'OS', 'Storage'].map(opt => ({name: opt})),
        }

    ],
};

export default sequences;