import type { SchemaTransformer } from "../";
import type { FieldsJson, LayoutJson } from "../../../../kintone/types";
import type { FieldSchema } from "../../types/schema";
import { isSupportedField } from "../constants";
import { tableLayoutComparator } from "./helpers/table";

/**
 * This transformer returns only all supported fields.
 * This transformer sorts headerFields by order of userSelectedFields
 */
export const userSelected = (
  userSelectedFields: string[],
  fieldsJson: FieldsJson,
  layoutJson: LayoutJson
): SchemaTransformer => {
  validateFields(userSelectedFields, fieldsJson);
  return (fields: FieldSchema[]) => {
    return fields
      .filter((fieldSchema) => userSelectedFields.includes(fieldSchema.code))
      .sort(userSelectedComparator(userSelectedFields))
      .map((field) => {
        if (field.type === "SUBTABLE") {
          field.fields.sort(tableLayoutComparator(field.code, layoutJson));
        }
        return field;
      });
  };
};

/**
 * throw Error on following situation
 * - The given field is field in subtable
 * - The given field does not found on fieldJson
 * - The given field is not supported
 * @param fields
 * @param fieldsJson
 */
const validateFields = (fields: string[], fieldsJson: FieldsJson) => {
  for (const field of fields) {
    for (const property of Object.values(fieldsJson.properties)) {
      if (property.type === "SUBTABLE" && field in property.fields) {
        throw new Error(
          `The field in a Table cannot be specified to the fields option ("${field}")\nPlease specify the Table field instead`
        );
      }
    }
    if (!(field in fieldsJson.properties)) {
      throw new Error(
        `The specified field "${field}" does not exist on the app`
      );
    }
    if (!isSupportedField(fieldsJson.properties[field])) {
      throw new Error(`The specified field "${field}" is not supported`);
    }
  }
};

const userSelectedComparator = (fields: string[]) => {
  return (a: FieldSchema, b: FieldSchema) => {
    const indexA = fields.indexOf(a.code);
    const indexB = fields.indexOf(b.code);

    if (indexA === -1) {
      return 1;
    }
    if (indexB === -1) {
      return -1;
    }
    return indexA - indexB;
  };
};
