import { useEffect } from "react";

const useScrollLock = (isModalOpen) => {
    useEffect(() => {
        document.body.style.overflow = isModalOpen ? "hidden" : "scroll";
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [isModalOpen])
}

export default useScrollLock;
