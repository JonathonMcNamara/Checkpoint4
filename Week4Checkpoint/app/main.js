// import { ValuesController } from "./Controllers/ValuesController.js";
import { BigImagesController } from "./Controllers/BigImagesController.js"
import { ClocksController } from "./Controllers/ClocksController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { WeatherController } from "./Controllers/WeatherController.js";
class App {
  // valuesController = new ValuesController();

  bigImagesController = new BigImagesController();

  quotesController = new QuotesController();

  weatherController = new WeatherController();

  clocksController = new ClocksController();

  tasksController = new TasksController();

  
}

window["app"] = new App();
