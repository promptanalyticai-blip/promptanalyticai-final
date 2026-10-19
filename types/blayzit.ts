// types/blayzit.ts
export type BlayzitAnalysis = {
  file: {
    name: string;
    size: number;
    type: string;
    content: string;
  };
  signals: any;
  decisions: any;
  actions: any[];
  ai: {
    summary: string;
    insights: string[];
    score: number;
  };
  tags: string[];
  patterns?: string[];
  contentLength?: number;
};
