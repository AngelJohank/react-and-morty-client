import { ReactNode, useRef, useCallback } from "react";
import { status } from "../types/status";

interface Props {
  children: ReactNode;
  status: status;
  hasMore: boolean;
  goNext: Function;
  loader: ReactNode;
  errorMessage?: ReactNode;
  endMessage?: ReactNode;
}

function InfiniteScroll(props: Props) {
  // IntersectionObserver function
  const observer = useRef<IntersectionObserver>();

  // onIntersection
  const intersectLoader = useCallback(
    (node: HTMLDivElement) => {
      if (observer.current) observer.current.disconnect(); // Disconnect last observer
      if (props.status === "loading" || props.status === "error") return; // Avoid fetch loop

      // Create a new Observer
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && props.hasMore) props.goNext(); // Run next fetch
      });

      // Connect observer to node
      if (node) observer.current.observe(node);
    },
    [props.status, props.hasMore]
  );

  return (
    <>
      <div>{props.children}</div>

      <div ref={intersectLoader}>
        {props.status === "error" && props.errorMessage}
        {props.hasMore && props.status !== "error" && props.loader}
        {!props.hasMore && props.endMessage}
      </div>
    </>
  );
}

export default InfiniteScroll;
