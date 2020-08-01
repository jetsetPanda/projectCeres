import {useState} from "react";
import ScreenSizeContext from "../context/ScreenSizeContext";

const ScreenSizeProvider = ({ children }) => {

        // fix for SSR rendered page
        const initViewports = (view) => {
            if (typeof window !== 'undefined') {
                if (view === 'width') {
                    return window.innerWidth
                }
                if (view === 'height') {
                    return window.innerHeight
                }
            }
        }

        //init states
        const [viewportWidth, setViewportWidth] = useState(initViewports('width'));
        const [viewportHeight, setViewportHeight] = useState(initViewports('height'));

        const handleViewportResize = () => {
            setViewportWidth(window.innerWidth);
            setViewportHeight(window.innerHeight);
        }


        React.useEffect(() => {
            window.addEventListener("resize", handleViewportResize);
            //clear event listener on update
            return () => {window.removeEventListener("resize", handleViewportResize);}
        }, []);

        /**
         * @Omar: storing viewport values in context provider
         */

        return (
            <ScreenSizeContext.Provider value={{ viewportWidth, viewportHeight }}>
                { children }
            </ScreenSizeContext.Provider>
        )

}

export default ScreenSizeProvider;





