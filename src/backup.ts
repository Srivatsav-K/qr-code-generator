import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
const App = () => {
  const [link, setLink] = useState("");
  const [qrCodeValue, setQrCodeValue] = useState("");

  const handleInputChange = (e) => {
    setLink(e.target.value);
  };

  const handleGenerateQRCode = () => {
    setQrCodeValue(link);
  };

  const downloadQRCode = () => {
    const svgElement = document.getElementById("qr-code-svg")!;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "qr-code.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <input
        type="text"
        value={link}
        onChange={handleInputChange}
        className="border p-2 mb-4 rounded w-full md:w-1/2"
        placeholder="Paste your link here"
      />
      <button
        onClick={handleGenerateQRCode}
        className="bg-blue-500 text-white p-2 rounded mb-4"
      >
        Generate QR Code
      </button>
      {qrCodeValue && (
        <div className="flex flex-col items-center">
          <QRCodeSVG
            id="qr-code-svg"
            value={qrCodeValue}
            size={256}
            className="mb-4"
          />
          <button
            onClick={downloadQRCode}
            className="bg-green-500 text-white p-2 rounded mt-4"
          >
            Download QR Code as SVG
          </button>
        </div>
      )}
    </div>
  );
};
export default App;
