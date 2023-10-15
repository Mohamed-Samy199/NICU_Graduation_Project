import React from 'react'
import { useEffect } from 'react';

const Map = () => {
    useEffect(() => {
        const script1 = document.createElement("script");
        script1.src = "//cdn.storelocatorwidgets.com/widget/mapbox-gl.js";
        script1.async = true;
        document.body.appendChild(script1);
        const script2 = document.createElement("script");
        script2.src = "//cdn.storelocatorwidgets.com/widget/mapbox-gl-geocoder.js";
        script2.async = true;
        document.body.appendChild(script2);
        const script3 = document.createElement("script");
        script3.id = "storelocatorscript";
        script3.dataset.uid = "xc5tiohDdOdzWosWMN8i51MhTfMICqkx";
        script3.dataset.droppin = "Yes";
        script3.dataset.platform = "Mapbox";
        script3.src = "//cdn.storelocatorwidgets.com/widget/widget.js";
        script3.async = true;
        document.body.appendChild(script3);
        return () => {
            document.body.removeChild(script1);
            document.body.removeChild(script2);
            document.body.removeChild(script3);
        };
    }, []);
    return (
        <div style={{ paddingTop: "4rem" }}>
            <div id="storelocatorwidget" style={{ width: "100%" }}>
                <p>
                    Loading <a href="https://www.storelocatorwidgets.com">Locator Software</a>...
                </p>
            </div>
        </div>
    )
}

export default Map
