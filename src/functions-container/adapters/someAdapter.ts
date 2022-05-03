import {SomeAdapterType} from "../interfaces/SomeAdapterType";

export const someAdapter: SomeAdapterType = ({
    doThing() {
        return Promise.resolve({
            id: 10,
            data: 'Hello :)'
        })
    }
})