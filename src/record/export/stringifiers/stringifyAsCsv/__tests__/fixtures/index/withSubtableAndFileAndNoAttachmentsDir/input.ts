import type { KintoneRecord } from "../../../../../../types/record";

export const input: KintoneRecord[] = [
  {
    recordNumber: {
      type: "RECORD_NUMBER",
      value: "9",
    },
    updatedTime: {
      type: "UPDATED_TIME",
      value: "2021-02-16T02:43:00Z",
    },
    dropDown: {
      type: "DROP_DOWN",
      value: "sample1",
    },
    creator: {
      type: "CREATOR",
      value: {
        code: "username",
        name: "username",
      },
    },
    modifier: {
      type: "MODIFIER",
      value: {
        code: "username",
        name: "username",
      },
    },
    $revision: {
      type: "__REVISION__",
      value: "7",
    },
    richText: {
      type: "RICH_TEXT",
      value:
        "<div><div>rich text editor<br /></div></div><div>rich text editor<br /></div><div>rich text editor<br /></div>",
    },
    singleLineText: {
      type: "SINGLE_LINE_TEXT",
      value: '"single line text"',
    },
    number: {
      type: "NUMBER",
      value: "8",
    },
    radioButton: {
      type: "RADIO_BUTTON",
      value: "sample2",
    },
    multiLineText: {
      type: "MULTI_LINE_TEXT",
      value: "multi\nline\ntext",
    },
    createdTime: {
      type: "CREATED_TIME",
      value: "2021-02-10T06:14:00Z",
    },
    checkBox: {
      type: "CHECK_BOX",
      value: ['"sample2"'],
    },
    calc: {
      type: "CALC",
      value: "16",
    },
    multiSelect: {
      type: "MULTI_SELECT",
      value: ['"sample3"', "sample4"],
    },
    $id: {
      type: "__ID__",
      value: "9",
    },
    subTable: {
      type: "SUBTABLE",
      value: [
        {
          id: "537306",
          value: {
            subTableText: {
              type: "SINGLE_LINE_TEXT",
              value: "text_line1",
            },
            subTableCheckbox: {
              type: "CHECK_BOX",
              value: ["st_sample1"],
            },
            subTableFile: {
              type: "FILE",
              value: [
                {
                  contentType: "text/plain",
                  fileKey: "test-file-key",
                  name: "test.txt",
                  size: "12345",
                },
                {
                  contentType: "text/plain",
                  fileKey: "test-file-key",
                  name: "test.txt",
                  size: "12345",
                },
              ],
            },
            userSelect: {
              type: "USER_SELECT",
              value: [
                {
                  code: "sato",
                  name: "Noboru Sato",
                },
                {
                  code: "tanaka",
                  name: "Taro Tanaka",
                },
              ],
            },
            groupSelect: {
              type: "GROUP_SELECT",
              value: [
                {
                  code: "Administrators",
                  name: "Administrators",
                },
              ],
            },
            organizationSelect: {
              type: "ORGANIZATION_SELECT",
              value: [
                {
                  code: "Development Div",
                  name: "Development Div",
                },
              ],
            },
          },
        },
        {
          id: "537307",
          value: {
            subTableText: {
              type: "SINGLE_LINE_TEXT",
              value: "text_line2",
            },
            subTableCheckbox: {
              type: "CHECK_BOX",
              value: ["st_sample2"],
            },
            subTableFile: {
              type: "FILE",
              value: [
                {
                  contentType: "text/plain",
                  fileKey: "test-file-key",
                  name: "test.txt",
                  size: "12345",
                },
                {
                  contentType: "text/plain",
                  fileKey: "test-file-key",
                  name: "test.txt",
                  size: "12345",
                },
              ],
            },
            userSelect: {
              type: "USER_SELECT",
              value: [
                {
                  code: "sato",
                  name: "Noboru Sato",
                },
                {
                  code: "tanaka",
                  name: "Taro Tanaka",
                },
              ],
            },
            groupSelect: {
              type: "GROUP_SELECT",
              value: [
                {
                  code: "Administrators",
                  name: "Administrators",
                },
              ],
            },
            organizationSelect: {
              type: "ORGANIZATION_SELECT",
              value: [
                {
                  code: "Development Div",
                  name: "Development Div",
                },
              ],
            },
          },
        },
      ],
    },
  },
];
