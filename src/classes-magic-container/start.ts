import {SomeAdapter} from "./adapters/SomeAdapter";
import {MyService} from "./services/MyService";
import {Container} from "./container";

const someAdapter = new SomeAdapter();

Container.factory().set('someAdapter', someAdapter);

const myService = new MyService();

async function main() {
    await myService.start();
}

main();

