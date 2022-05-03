import {someAdapter} from "./adapters/someAdapter";
import {MyService} from "./services/MyService";

const myService = MyService(someAdapter);

async function main() {
    await myService.start();
}

main();

