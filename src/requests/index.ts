import { FeedbackInputType, FeedbackType } from "@/types/feedback";
import axios from "axios";

const baseURL = "http://localhost:3004";
let api = axios.create({
  baseURL,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => ({ data: { error: error.message } })
);

const requests = {
  feedback: {
    find: (): Promise<FeedbackType[]> =>
      api.get("/feedback").then((res) => res.data),
    create: (data: Required<FeedbackInputType>) => api.post("/feedback", data),
    delete: (id: number) => api.delete("/feedback/" + id),
  },
};
export default requests;
