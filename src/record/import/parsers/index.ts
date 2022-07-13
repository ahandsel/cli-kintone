import {
  KintoneFormFieldProperty,
  KintoneRestAPIClient,
} from "@kintone/rest-api-client";
import { parseJson } from "./parseJson";
import { parseCsv } from "./parseCsv";
import { KintoneRecord } from "../types/record";

export const parseRecords: (options: {
  apiClient: KintoneRestAPIClient;
  source: string;
  format: string;
  app: string;
}) => Promise<KintoneRecord[]> = async (options) => {
  const { apiClient, source, format } = options;
  switch (format) {
    case "json":
      return parseJson(source);
    case "csv":
      return parseCsv(
        source,
        await apiClient.app.getFormFields<
          Record<string, KintoneFormFieldProperty.OneOf>
        >(options)
      );
    default:
      throw new Error(`Unexpected file type: ${format} is unacceptable.`);
  }
};