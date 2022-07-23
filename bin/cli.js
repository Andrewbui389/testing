#!/usr/bin/env node

const {execSync} = require('child_process');

const runCommand = command => {
    try{ 
        execSync(`${command}` , {stdio: 'inherit'});
    } catch(e){
        console.log(`Failed to excecute ${command}` , e)
        return false 
    }
    return true
        

}


const repoName = process.argv[2];
const gitCheckOutCommand = `git clone --depth 1 https://github.com/Andrewbui389/express-ejs-mongoDB-template.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`

console.log('cloning the repository')


const checkout = runCommand(gitCheckOutCommand)

if(!checkout) process.exit(-1)

console.log(`Installing dependencies for ${repoName}`)

const installedDeps = runCommand(installDepsCommand)
if(!installedDeps) process.exit(-1)