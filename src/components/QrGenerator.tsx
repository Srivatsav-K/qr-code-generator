import { DownloadIcon } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import Confetti from "react-confetti";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const QrGenerator = () => {
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  const handleDownloadQRCode = () => {
    const svgElement = document.getElementById("qr-code-svg")!;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "qr-code.svg";
    downloadLink.click();
    URL.revokeObjectURL(url);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const url = formData.get("url") as string;

    if (!url) return;

    setQrCodeValue(url);
    setShowConfetti(true);

    e.currentTarget.reset();

    // reset confetti after some time
    setTimeout(() => {
      setShowConfetti(false);
    }, 2000);
  };

  return (
    <div className="flex w-full flex-col items-center gap-8">
      {showConfetti && <Confetti />}

      {qrCodeValue && (
        <div className="flex flex-col items-center">
          <QRCodeSVG
            id="qr-code-svg"
            value={qrCodeValue}
            size={200}
            className="mb-4 sm:mb-6"
          />

          <Button
            variant={"ghost"}
            onClick={handleDownloadQRCode}
            className="text-sm sm:text-base"
          >
            <DownloadIcon className="mr-2 h-4 w-4" /> Download QR Code as SVG
          </Button>
        </div>
      )}

      <form
        className="flex w-full flex-col gap-4 sm:max-w-sm"
        onSubmit={handleSubmit}
      >
        <Input
          name="url"
          placeholder="Paste your link here"
          type="url"
          autoFocus
          className="text-sm sm:text-base"
        />

        <Button type="submit" className="text-sm sm:text-base">
          Generate QR Code
        </Button>
      </form>
    </div>
  );
};
export default QrGenerator;
