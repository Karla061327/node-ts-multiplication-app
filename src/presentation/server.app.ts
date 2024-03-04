import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-cases";

interface RunOptions{
    base: number;
    limit: number;
    showTable: boolean;
    fileDestination: string;
    fileName: string;
}


export class ServerApp {

    static run({base, limit, showTable, fileName, fileDestination}: RunOptions){
        console.log('server running ...');

        const table = new CreateTable().execute({base, limit, showTable});
        const wasCreated = new SaveFile()
        .execute({
            fileContent: table,
            fileDestination: fileDestination,
            fileName: fileName});

        if (showTable) console.log(table);
        (wasCreated)
            ? console.log('File created')
            : console.log('File not created');
    }
}