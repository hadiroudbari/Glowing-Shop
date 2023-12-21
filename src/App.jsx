import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense, lazy } from "react";

import GlobalStyles from "./styles/GlobalStyles";
import ToasterConfig from "./ui/Toaster";
import ShopSpinner from "./ui/ShopSpinner";

const Router = lazy(() => import("./ui/Router"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />

      <Suspense fallback={<ShopSpinner />}>
        <Router />
      </Suspense>

      <ToasterConfig />
    </QueryClientProvider>
  );
}

export default App;
