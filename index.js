import {franc, francAll} from 'franc'
import langs from 'langs'
import colors from 'colors'

const input = process.argv[2];
const langAbbr = franc(input);

if(langAbbr === 'und'){
    console.log("Sorry, try with a longer text".red);
}else{
    const language = langs.where("3", langAbbr);
    console.log(`Our guess is: ${language.name}`.green)
}
