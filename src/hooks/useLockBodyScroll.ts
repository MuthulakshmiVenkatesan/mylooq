import { useEffect } from "react";

/**
 * Locks scroll when a modal/overlay is open so the background doesn't scroll.
 * Adds class "modal-open" to html and body when lock is true, removes when false or on unmount.
 */
export function useLockBodyScroll(lock: boolean) {
    useEffect(() => {
        if (lock) {
            document.documentElement.classList.add("modal-open");
            document.body.classList.add("modal-open");
            return () => {
                document.documentElement.classList.remove("modal-open");
                document.body.classList.remove("modal-open");
            };
        }
    }, [lock]);
}
