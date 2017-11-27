import React from 'react'
import ReactDOM from 'react-dom'

export default React.createClass({
    render: function() {
        function setProgress(amt){
          amt = (amt < 0) ? 0 : (amt > 1) ? 1 : amt;
          document.getElementById("stop1").setAttribute("offset", amt);
          document.getElementById("stop2").setAttribute("offset", amt);
        }

        doTimeout(0);

        function doTimeout(e) {
          setProgress(val);
          e += 0.01;
          if (val <= 1) {
            setTimeout(doTimeout, 30, e);
          }
        }
        return (      
      <?xml version="1.0" encoding="UTF-8" standalone="no"?>
      <svg
         xmlns:dc="http://purl.org/dc/elements/1.1/"
         xmlns:cc="http://creativecommons.org/ns#"
         xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
         xmlns:svg="http://www.w3.org/2000/svg"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
         xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
         width="414.60263"
         height="237.14285"
         id="svg2"
         version="1.1"
         inkscape:version="0.48.4 r9939"
         sodipodi:docname="montagnes.svg">
          <defs>
          <linearGradient id="progress">
            <stop id="stop1" offset="0" stop-color="black"/>
            <stop id="stop2" offset="0" stop-color="grey"/>
          </linearGradient>
        </defs>
        <g
           inkscape:label="Layer 1"
           inkscape:groupmode="layer"
           id="layer1"
           transform="translate(-80,-32.362183)">
          <g
             id="g3811"
             style="opacity:1;stroke:none; fill: url(#progress);fill-opacity:1">
            <g
               id="g3808"
               style="stroke:none; fill: url(#progress);fill-opacity:1">
              <path
                 style=" fill: url(#progress);fill-opacity:1;stroke:none"
                 d="m 80,269.50504 88.57143,-180 68.57143,94.28571 65.71428,-151.428567 62.85715,139.999997 40,-40 88.88833,133.41915 -81.17792,-105.18633 -3.24135,7.76135 -8.16304,-8.63594 -7.09913,5.9896 -5.00253,-5.81387 -23.00603,13.19881 5.23984,11.25752 -28.15676,-32.16929 -14.28894,10.67984 -10.73178,-23.45951 -10.91345,23.85574 -14.15219,-27.421 -12.77048,11.69108 -7.88679,-17.83768 -29.60512,62.58582 -6.34565,-8.25903 -23.71968,-15.43889 -11.86488,10.23587 -17.28505,-20.86182 -9.92547,5.0902 -6.51421,-8.5326 -13.10224,15.78607 -8.03662,-12.23566 z"
                 id="path2985"
                 inkscape:connector-curvature="0"
                 sodipodi:nodetypes="ccccccccccccccccccccccccccccccc" />
            </g>
          </g>
        </g>
      </svg>
        )
    }
})
