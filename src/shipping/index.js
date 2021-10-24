import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button, Select, TextField } from "@mui/material";

export default function Shipping() {
  return (
    <div className="flex flex-col flex-grow border-t overflow-scroll">
      <div className="flex flex-col  p-4">
        <div className="flex h-10 items-center">
          <LocalShippingIcon className="mr-2 text-bleu"></LocalShippingIcon>
          <h2 className="text-xl font-medium text-bleu">Shipping</h2>
        </div>
        <p>
          Choose a shipping method and enter the shipping details for this
          order.
        </p>
      </div>
      <div className="flex-grow bg-grayish p-4 w-full overflow-y-auto">
        <div className="flex w-full">
          <Select
            label="shipping method"
            className="flex-grow"
            value="default"
          ></Select>
          <Button
            startIcon={<ContentCopyIcon></ContentCopyIcon>}
            className="w-36 flex flex-col"
            style={{
              fontSize: "small",
              textTransform: "none",
              marginLeft: "10px",
              color: "#616161",
              backgroundColor: "#e0e0e0",
            }}
          >
            Copy Billing Address
          </Button>
        </div>
        <div className="pt-8 flex flex-col gap-4">
          <div className="w-full flex gap-2">
            <TextField
              className="bg-white flex-grow"
              label="First Name"
            ></TextField>
            <TextField
              className="bg-white flex-grow"
              label="Last Name"
            ></TextField>
          </div>
          <TextField label="company" className="w-full bg-white"></TextField>
          <div className="flex gap-2">
            <TextField
              label="Street address"
              className=" bg-white flex-grow"
            ></TextField>
            <TextField
              label="Apartment, Suite, Unit, Etc (Optional)"
              className="bg-white flex-grow"
            ></TextField>
          </div>
          <div className="flex gap-2">
            <TextField
              label="Town / City"
              className=" bg-white flex-grow"
            ></TextField>
            <TextField
              label="PostCode / Zip"
              className="bg-white flex-grow"
            ></TextField>
          </div>
          <div className="flex gap-2">
            <Select label="Country" className=" bg-white flex-grow"></Select>
            <TextField
              label="Country"
              className="bg-white flex-grow"
            ></TextField>
          </div>
        </div>
      </div>
    </div>
  );
}
