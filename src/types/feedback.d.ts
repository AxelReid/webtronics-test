export interface FeedbackType {
  id: number;
  email: string;
  name: string;
  phone: string;
}
export type FeedbackInputType = Omit<FeedbackType, "id">;
export interface FeedbackCreateResType {
  status: number;
  message: string;
}
