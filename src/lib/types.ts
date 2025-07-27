export interface Car {
  id: string;
  name: string;
  image: string;
  month_rate: string;
  day_rate: string;
}

export interface Order {
  id: string;
  car_id: string;
  order_date: string;
  pickup_date: string;
  dropoff_date: string;
  pickup_location: string;
  dropoff_location: string;
}
