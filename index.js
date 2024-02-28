import { Command } from 'commander';
import map from './map.js';

const program = new Command();

program
  .name('dpunk')
  .description('Sling around AWS like a radical')
  .version('0.1.0');
map.commands.forEach(command => program.command(command.name).description(command.description).action(command.action));

program.parse();