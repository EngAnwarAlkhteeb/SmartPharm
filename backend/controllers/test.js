import axios from "axios";
import config from "../config/index.js";

export const test = async (req, res) => {
    return res
      .json({ test: "fuck" });
};
