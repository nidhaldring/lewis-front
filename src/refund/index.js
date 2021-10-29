import Input from "@mui/material/Input";

export default function Refund() {
  return (
    <div className="flex flex-grow w-full p-4 bg-grayish">
      <Input
        placeholder="Search Orders"
        className="w-full h-16 p-4 border bg-white"
      ></Input>
    </div>
  );
}
