import { Button } from "@/components/ui/Button";
import { ChevronLeft } from "lucide-react";
function App() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="space-y-4">
        <Button>
          <ChevronLeft className="h-5 w-5" />
          Default Button
        </Button>

        <Button variant="primary" size="lg">
          <ChevronLeft className="h-5 w-5" />
          Primary Button
        </Button>

        <Button variant="plain">
          <ChevronLeft className="h-5 w-5" />
          Plain Button
        </Button>

        <Button variant="destructive" size="sm">
          <ChevronLeft className="h-5 w-5" />
          Destuctive Button
        </Button>
        <Button variant="primary" size="icon">
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

export default App;
