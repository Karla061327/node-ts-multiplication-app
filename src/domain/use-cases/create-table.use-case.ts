 
export interface CreateTableUserCase {
     execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions{
    base: number;
    limit: number;
    showTable: boolean;
}


 export class CreateTable  implements CreateTableUserCase {
    constructor(
        /**
         * DI - dependecy inyection
         */
    ){}

    execute({base, limit, showTable}: CreateTableOptions){
        let outPutMessage = '';

        for (let i = 1; i<= limit; i++){
            outPutMessage += `${base} x ${i} = ${base*i}\n`
        }

        return outPutMessage;
    }
 }