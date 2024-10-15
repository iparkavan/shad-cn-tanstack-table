import React from "react";
import PeopleDataTable from "./data-table";
import { columns } from "./columns";
import { people } from "@/people";

type Props = {};

const People = (props: Props) => {
  return (
    <div className="m-24">
      <PeopleDataTable columns={columns} data={people} />
    </div>
  );
};

export default People;
