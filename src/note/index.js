import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function Note() {
  const [label, setLabel] = useState("Customer Note");

  return (
    <div className="flex flex-col flex-grow border-t">
      <div className="flex flex-col  p-4">
        <div className="flex h-10 items-center">
          <AssignmentIcon className="mr-2 text-bleu"></AssignmentIcon>
          <h2 className="text-xl font-medium text-bleu">Note</h2>
        </div>
        <p> Choose the type of note to record for this order. </p>
      </div>
      <div className="flex-grow bg-grayish p-4 w-full">
        <div className="flex w-full h-18 ">
          <div className="mr-6">
            <Button
              startIcon={
                <AssignmentIndIcon fontSize="small"></AssignmentIndIcon>
              }
              style={{
                textTransform: "none",
                backgroundColor: "#217ed1",
                color: "white",
              }}
              className="flex flex-col w-32 "
              onClick={() => setLabel("Customer Note")}
            >
              Customer Note
            </Button>
          </div>
          <div>
            <Button
              startIcon={
                <AssignmentLateIcon fontSize="small"></AssignmentLateIcon>
              }
              onClick={() => setLabel("Order Note")}
              style={{
                textTransform: "none",
                color: "#616161",
                backgroundColor: "#e0e0e0",
              }}
              className="flex flex-col w-32"
            >
              Order Note
            </Button>
          </div>
        </div>
        <div className="py-8 w-full">
          <TextField
            multiline
            rows={5}
            className="w-full"
            label={label}
            placeholder={label}
          ></TextField>
          <Button
            style={{
              marginTop: "15px",
              textTransform: "none",
              color: "#616161",
              backgroundColor: "#e0e0e0",
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
