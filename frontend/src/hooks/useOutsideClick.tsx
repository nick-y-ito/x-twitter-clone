import { RefObject, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 * @param ref - The ref of the target element to detect outside click
 * @param callback - The callback function to invoke when there is a click outside of the element
 */
export const useOutsideClick = (
	ref: RefObject<HTMLElement>,
	callback?: () => void
) => {
	useEffect(() => {
		// If there is no callback, return
		if (callback) {
			/**
			 * Invoke callback if there is a click on outside of element
			 * @param event MouseEvent
			 * @returns void
			 */
			const handleClickOutside = (event: MouseEvent) => {
				if (ref.current && !ref.current.contains(event.target as Node)) {
					callback();
				}
			};

			// Bind the event listener
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				// Unbind the event listener on clean up
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}
	}, [ref, callback]);
};
