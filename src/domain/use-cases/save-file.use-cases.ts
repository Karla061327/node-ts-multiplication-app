import fs from 'fs';

export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

//interface: recuerda te dice de que forma quieres que el usuario introdusca los datos

export interface Options {
    fileContent : string;
    fileDestination?: string;
    fileName?   : string;
}

export class SaveFile implements SaveFileUseCase {

    constructor(

    ){}
    execute({
        fileContent,
        fileDestination = 'outpunts',
        fileName = 'table'       
    }: Options): boolean {

            try {
            fs.mkdirSync( fileDestination, {recursive:true});
            fs.writeFileSync(`${ fileDestination}/table-${fileName}.txt`, fileContent);
            return true;

        } catch (error){
            console.error(error);
            return false;
        }
           
    }
}