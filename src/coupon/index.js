import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Coupon() {
  return (
    <div className="flex flex-col flex-grow border-t">
      <div className="flex flex-col  p-4">
        <div className="flex h-10 items-center">
          <LocalOfferIcon className="mr-2 text-bleu"></LocalOfferIcon>
          <h2 className="text-xl font-medium text-bleu">Coupon</h2>
        </div>
        <p> Enter the coupon code to apply to this order. </p>
      </div>
      <div className="flex-grow bg-grayish p-4 w-full">
        <div className="flex justify-between">
          <TextField
            id="outlined-basic"
            label="coupon code"
            variant="outlined"
            className="bg-white w-4/5"
          />
          <Button
            startIcon={<LocalOfferIcon></LocalOfferIcon>}
            style={{
              textTransform: "none",
              color: "#616161",
              backgroundColor: "#e0e0e0",
            }}
            className="flex flex-col w-1/6"
          >
            Apply Coupon
          </Button>
        </div>
      </div>
    </div>
  );
}
