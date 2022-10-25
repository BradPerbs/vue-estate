import { watchEffect } from "vue"

export const useOnClickOutside = (ref, handler) => {
  watchEffect(() => {
    const listener = (event) => {
        console.log("USEONCLICKOUTSIDE");
        console.log("USEONCLICKOUTSIDE ref:", ref);
        console.log("USEONCLICKOUTSIDE handler", handler);
        console.log("USEONCLICKOUTSIDE event", event.target);
      if (!ref || ref.contains(event.target)){
        return;
     }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener); 
    }
  })
}