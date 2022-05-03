import {SomeAdapterInterface} from "../interfaces/SomeAdapterInterface";
import {Container} from "../container";

export class MyService {
    private adapter: SomeAdapterInterface;

    constructor() {
        this.adapter = Container.factory().get('someAdapter');
    }

    public async start(){
        console.log(await this.adapter.doThing());
    }
}