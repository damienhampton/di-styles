import {SomeAdapter} from "./adapters/SomeAdapter";
import {MyService} from "./services/MyService";

const someAdapter = new SomeAdapter();
const myService = new MyService(someAdapter);

async function main() {
    await myService.start();
}

main();

