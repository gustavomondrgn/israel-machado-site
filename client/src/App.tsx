import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AreaDetail from "./pages/AreaDetail";
import Ensaios from "./pages/Ensaios";
import EnsaioAntigona from "./pages/EnsaioAntigona";
import PsicologiaCientifica from "./pages/PsicologiaCientifica";
import Servicos from "./pages/Servicos";
import Depoimentos from "./pages/Depoimentos";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/area/:slug" component={AreaDetail} />
      <Route path="/ensaios" component={Ensaios} />
      <Route path="/ensaios/antigona" component={EnsaioAntigona} />
      <Route path="/psicologia-cientifica" component={PsicologiaCientifica} />
      <Route path="/servicos" component={Servicos} />
      <Route path="/depoimentos" component={Depoimentos} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
