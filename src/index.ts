import { app } from "./app";
import "./routes";
const port = 3333;

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`Server is now running on port ${port}`);
  })
  .catch((e) => {
    console.log("There was an error trying to run the server");
    console.log(e);
  });
