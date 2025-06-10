import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
const queryClient = new QueryClient();
const App = () => /*#__PURE__*/React.createElement(QueryClientProvider, {
  client: queryClient
}, /*#__PURE__*/React.createElement(TooltipProvider, null, /*#__PURE__*/React.createElement(Toaster, null), /*#__PURE__*/React.createElement(Sonner, null), /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
  path: "/",
  element: /*#__PURE__*/React.createElement(Index, null)
}), /*#__PURE__*/React.createElement(Route, {
  path: "*",
  element: /*#__PURE__*/React.createElement(NotFound, null)
})))));
export default App;
