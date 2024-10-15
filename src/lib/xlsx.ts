import { people } from "@/people";
import xlsx, { IJsonSheet } from "json-as-xlsx";

const DownloadToXlsx = () => {
  let columns: IJsonSheet[] = [
    {
      sheet: "Persons",
      columns: [
        { label: "Person Id", value: "id" },
        { label: "First Name", value: "first_name" },
        { label: "Last Name", value: "last_name" },
        { label: "Email", value: "email" },
        {
          label: "Date Of Birth",
          value: (row) => new Date(row.date_of_birth).toLocaleDateString(),
        },
      ],
      content: people,
    },
  ];

  let settings = {
    fileName: "People-Data",
  };

  xlsx(columns, settings);
};

export default DownloadToXlsx;
