import QrGenerator from "@/components/QrGenerator";
import Heading from "@/components/ui/h1";
import { MutedText } from "./components/ui/muted-text";

const App = () => {
  return (
    <main className="container flex h-screen flex-col items-center justify-center gap-40">
      <Heading>QR Code Generator</Heading>

      <QrGenerator />

      <div className="absolute bottom-4 right-4">
        <MutedText>Built by Srivatsav K</MutedText>
      </div>
    </main>
  );
};
export default App;
