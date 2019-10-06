export interface TestItemInterface {
  id: number;
  question: string;
  answers: { value: string, id: number }[];
  correctId: number;
  selectedAnswerId: number;
}
