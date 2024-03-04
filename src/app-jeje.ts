
import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

const {b:base, l:limit, s:show} = yarg

let outPutMessage = "";


if (show) {
    console.log('TABLA MULTIPLICAR')
}

console.log(outPutMessage)

//fs.mkdirSync(path, {recursive:true});
//fs.writeFileSync(`path/table-${base}.txt`, outPutMessage);
//const path = 'PATH/folder1/folder2';