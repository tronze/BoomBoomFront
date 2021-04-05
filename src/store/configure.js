import { createStore } from "redux";
import modules from "./modules";

const configure = () => {
  return createStore(modules);
};

export default configure;
