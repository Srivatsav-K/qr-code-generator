import QrGenerator from "@/components/QrGenerator";
import Heading from "@/components/ui/h1";
import { MutedText } from "./components/ui/muted-text";

const App = () => {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-between px-4 py-8 sm:py-16">
      <Heading className="text-center text-3xl font-bold sm:text-4xl lg:text-5xl">
        QR Code Generator
      </Heading>

      <QrGenerator />

      <div className="mt-8 sm:mt-0">
        <MutedText>Built with ❤️ by Srivatsav K</MutedText>
      </div>
    </main>
  );
};
export default App;
