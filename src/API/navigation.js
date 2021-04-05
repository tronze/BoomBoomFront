import axios from "axios";

export async function requestUncrowdedRoute(from, to, departureTime) {
  const response = await axios.get(
    `route/suggest/?from=${from}&to=${to}&departureTime=${departureTime}`
  );
  if (response.status === 200) {
    return response.data;
  } else {
    return {
      routes: [],
      congestions: [],
    };
  }
}
