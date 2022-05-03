import {SomeAdapterType} from "../interfaces/SomeAdapterType";

export const MyService = (adapter: SomeAdapterType) => ({
    async start(){
        console.log(await adapter.doThing());
    }
})