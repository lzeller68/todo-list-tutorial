export * from './todoItems.service';
import { TodoItemsService } from './todoItems.service';
export * from './weatherForecast.service';
import { WeatherForecastService } from './weatherForecast.service';
export const APIS = [TodoItemsService, WeatherForecastService];
