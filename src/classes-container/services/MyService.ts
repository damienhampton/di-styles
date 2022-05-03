import {SomeAdapterInterface} from "../interfaces/SomeAdapterInterface";

export class MyService {
    constructor(private adapter: SomeAdapterInterface) {}

    public async start(){
        console.log(this.adapter)
        console.log(await this.adapter.doThing());
    }
}