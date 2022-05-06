export interface FeedbackCreatetData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  create: (data: FeedbackCreatetData) => Promise<void>;
}