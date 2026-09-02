import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import Assistencia from "./pages/Assistencia";
import Sobre from "./pages/Sobre";
import Contactos from "./pages/Contactos";
import Orcamento from "./pages/Orcamento";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/servicos" component={Servicos} />
      <Route path="/assistencia" component={Assistencia} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/contactos" component={Contactos} />
      <Route path="/orcamento" component={Orcamento} />
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
