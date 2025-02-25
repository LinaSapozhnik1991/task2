import { useEffect, useState } from "react";

const usePortal = (id: string): HTMLElement | null => {
  const [containerElement, setContainerElement] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    let element: HTMLElement | null = document.getElementById(
      id
    ) as HTMLElement;

    if (!element) {
      element = document.createElement("div");
      element.setAttribute("id", id);
      document.body.appendChild(element);
    }

    setContainerElement(element);

    return () => {
      if (element) {
        document.body.removeChild(element);
      }
    };
  }, [id]);

  return containerElement;
};

export default usePortal;
