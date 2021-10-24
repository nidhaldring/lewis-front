import WifiIcon from "@mui/icons-material/Wifi";
import CloudIcon from "@mui/icons-material/Cloud";
import CircleIcon from "@mui/icons-material/Circle";

export default function Footer() {
  return (
    <footer className="h-8 w-full flex bg-white border-t-2 justify-between items-center px-4">
      <div className="w-14 flex justify-between">
        <WifiIcon fontSize="small" sx={{ color: "#9e9e9e" }}></WifiIcon>
        <CloudIcon fontSize="small" sx={{ color: "#9e9e9e" }}></CloudIcon>
      </div>
      <CircleIcon fontSize="small" sx={{ color: "#4caf50" }}></CircleIcon>
    </footer>
  );
}
