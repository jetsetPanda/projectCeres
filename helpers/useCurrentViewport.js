import React from 'react';

/**
 * @Omar: custom hook utilizing context api
 * @name useCurrentViewport
 * @returns viewport object for use in screen responsive methods
 */

const useCurrentViewport = () => {

    const { viewportWidth, viewportHeight } = React.useContext(screenSizeContext);

    return {viewportWidth,viewportHeight};

}

export default useCurrentViewport