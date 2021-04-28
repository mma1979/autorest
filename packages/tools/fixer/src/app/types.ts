export interface FixResult {
  spec: any;
  fixes: Fix[];
}

export interface Fix {
  code: FixCode;
  message: string;
  path: string[];
}

export enum FixCode {
  MissingTypeObject = "missing-type-object",
}