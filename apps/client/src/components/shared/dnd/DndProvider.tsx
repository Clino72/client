import * as React from "react";
import { DndProvider as ReactDndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export function DndProvider({ children, id }: { id: string; children: React.ReactNode }) {
  const [context, setContext] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    setContext(document.getElementById(id));
  }, [id]);

  return (
    <ReactDndProvider options={{ rootElement: context }} backend={HTML5Backend}>
      {children}
    </ReactDndProvider>
  );
}
