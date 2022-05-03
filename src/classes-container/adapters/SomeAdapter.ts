import {SomeAdapterInterface} from "../interfaces/SomeAdapterInterface";

export class SomeAdapter implements SomeAdapterInterface{
    public doThing() {
        return Promise.resolve({
            id: 10,
            data: 'Hello :)'
        })
    }
}