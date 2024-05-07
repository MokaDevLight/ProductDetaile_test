import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import Loading from "components/elements/Loading";
import { router } from "routes/routesDefinition";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
