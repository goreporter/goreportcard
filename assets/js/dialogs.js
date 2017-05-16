$(function () {
    $('.dialogs-popup').on('click', function () {
        var type = $(this).data('type');
        if (type === 'basic') {
            showBasicMessage();
        }
        // else if (type === 'with-title') {
        //     showWithTitleMessage();
        // }
        // else if (type === 'success') {
        //     showSuccessMessage();
        // }
        // else if (type === 'confirm') {
        //     showConfirmMessage();
        // }
        // else if (type === 'cancel') {
        //     showCancelMessage();
        // }
        // else if (type === 'with-custom-icon') {
        //     showWithCustomIconMessage();
        // }
        // else if (type === 'html-message') {
        //     showHtmlMessage();
        // }
        // else if (type === 'autoclose-timer') {
        //     showAutoCloseTimerMessage();
        // }
        // else if (type === 'prompt') {
        //     showPromptMessage();
        // }
        // else if (type === 'ajax-loader') {
        //     showAjaxLoaderMessage();
        // }
    });
});


// $(function () {
//     $('.js-sweetalert button').on('click', function () {
//         var type = $(this).data('type');
//         if (type === 'basic') {
//             showBasicMessage();
//         }
//         else if (type === 'with-title') {
//             showWithTitleMessage();
//         }
//         else if (type === 'success') {
//             showSuccessMessage();
//         }
//         else if (type === 'confirm') {
//             showConfirmMessage();
//         }
//         else if (type === 'cancel') {
//             showCancelMessage();
//         }
//         else if (type === 'with-custom-icon') {
//             showWithCustomIconMessage();
//         }
//         else if (type === 'html-message') {
//             showHtmlMessage();
//         }
//         else if (type === 'autoclose-timer') {
//             showAutoCloseTimerMessage();
//         }
//         else if (type === 'prompt') {
//             showPromptMessage();
//         }
//         else if (type === 'ajax-loader') {
//             showAjaxLoaderMessage();
//         }
//     });
// });

// These codes takes from http://t4t5.github.io/sweetalert/
function showBasicMessage() {
    swal({
        title: "Godepgraph",
        html: true,
        showConfirmButton:false,
        text: '<svg width="3374pt" height="766pt" viewBox="0.00 0.00 3374.36 766.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 762)"><title>godep</title><polygon fill="white" stroke="none" points="-4,4 -4,-762 3370.36,-762 3370.36,4 -4,4"></polygon><!-- 0 --><g id="node1" class="node"><title>0</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="461.962" cy="-652" rx="185.412" ry="18"></ellipse><text text-anchor="middle" x="461.962" y="-647.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/copycheck</text></g><!-- 1 --><g id="node2" class="node"><title>1</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="906.679" cy="-629" rx="198.926" ry="18"></ellipse><text text-anchor="middle" x="906.679" y="-624.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/copycheck/job</text></g><!-- 0&#45;&gt;1 --><g id="edge1" class="edge"><title>0-&gt;1</title><path fill="none" stroke="black" d="M625.613,-643.55C657.468,-641.895 691.071,-640.149 723.513,-638.464"></path><polygon fill="black" stroke="black" points="723.736,-641.957 733.541,-637.943 723.373,-634.967 723.736,-641.957"></polygon></g><!-- 2 --><g id="node3" class="node"><title>2</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="906.679" cy="-740" rx="210.028" ry="18"></ellipse><text text-anchor="middle" x="906.679" y="-735.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/copycheck/output</text></g><!-- 0&#45;&gt;2 --><g id="edge2" class="edge"><title>0-&gt;2</title><path fill="none" stroke="black" d="M522.853,-669.065C566.916,-681.171 628.418,-697.133 683.168,-708 713.09,-713.939 745.484,-719.234 776.05,-723.726"></path><polygon fill="black" stroke="black" points="775.941,-727.246 786.34,-725.218 776.946,-720.319 775.941,-727.246"></polygon></g><!-- 3 --><g id="node4" class="node"><title>3</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="1915" cy="-656" rx="210.503" ry="18"></ellipse><text text-anchor="middle" x="1915" y="-651.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/copycheck/syntax</text></g><!-- 0&#45;&gt;3 --><g id="edge3" class="edge"><title>0-&gt;3</title><path fill="none" stroke="black" d="M643.815,-655.519C657.132,-655.706 670.359,-655.87 683.168,-656 1108.74,-660.305 1215.16,-657.779 1640.75,-657 1658.16,-656.968 1676.19,-656.925 1694.32,-656.874"></path><polygon fill="black" stroke="black" points="1694.4,-660.374 1704.39,-656.845 1694.38,-653.374 1694.4,-660.374"></polygon></g><!-- 1&#45;&gt;3 --><g id="edge16" class="edge"><title>1-&gt;3</title><path fill="none" stroke="black" d="M1094.76,-634.912C1118.8,-635.636 1143.08,-636.349 1166.19,-637 1346.71,-642.086 1551.76,-647.253 1701.42,-650.912"></path><polygon fill="black" stroke="black" points="1701.57,-654.416 1711.65,-651.162 1701.74,-647.419 1701.57,-654.416"></polygon></g><!-- 18 --><g id="node19" class="node"><title>18</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="2410.31" cy="-614" rx="221.126" ry="18"></ellipse><text text-anchor="middle" x="2410.31" y="-609.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/copycheck/suffixtree</text></g><!-- 1&#45;&gt;18 --><g id="edge15" class="edge"><title>1-&gt;18</title><path fill="none" stroke="black" d="M981.598,-612.274C1033.05,-601.514 1103.41,-588.542 1166.19,-583 1558.73,-548.347 2023.51,-578.872 2257.93,-599.246"></path><polygon fill="black" stroke="black" points="2257.96,-602.762 2268.23,-600.147 2258.57,-595.789 2257.96,-602.762"></polygon></g><!-- 19 --><g id="node20" class="node"><title>19</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="1403.47" cy="-610" rx="237.056" ry="18"></ellipse><text text-anchor="middle" x="1403.47" y="-605.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/copycheck/syntax/golang</text></g><!-- 1&#45;&gt;19 --><g id="edge17" class="edge"><title>1-&gt;19</title><path fill="none" stroke="black" d="M1090.16,-621.993C1119.73,-620.857 1150.63,-619.67 1181.01,-618.504"></path><polygon fill="black" stroke="black" points="1181.43,-621.991 1191.29,-618.109 1181.16,-614.996 1181.43,-621.991"></polygon></g><!-- 2&#45;&gt;3 --><g id="edge23" class="edge"><title>2-&gt;3</title><path fill="none" stroke="black" d="M1116.87,-738.882C1263.86,-736.141 1464.86,-728.466 1640.75,-708 1705.09,-700.512 1777.04,-686.593 1830.94,-675.039"></path><polygon fill="black" stroke="black" points="1831.76,-678.443 1840.79,-672.911 1830.28,-671.601 1831.76,-678.443"></polygon></g><!-- 3&#45;&gt;18 --><g id="edge50" class="edge"><title>3-&gt;18</title><path fill="none" stroke="black" d="M2065.01,-643.313C2122.39,-638.428 2188.18,-632.827 2246.77,-627.838"></path><polygon fill="black" stroke="black" points="2247.19,-631.315 2256.86,-626.979 2246.6,-624.34 2247.19,-631.315"></polygon></g><!-- 4 --><g id="node5" class="node"><title>4</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="461.962" cy="-480" rx="172.867" ry="18"></ellipse><text text-anchor="middle" x="461.962" y="-475.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/depend</text></g><!-- 5 --><g id="node6" class="node"><title>5</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="1403.47" cy="-465" rx="213.919" ry="18"></ellipse><text text-anchor="middle" x="1403.47" y="-460.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/simplecode/simple</text></g><!-- 6 --><g id="node7" class="node"><title>6</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="1915" cy="-388" rx="196.045" ry="18"></ellipse><text text-anchor="middle" x="1915" y="-383.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/staticscan/lint</text></g><!-- 5&#45;&gt;6 --><g id="edge4" class="edge"><title>5-&gt;6</title><path fill="none" stroke="black" d="M1539.93,-451.104C1572.97,-447.278 1608.18,-442.835 1640.75,-438 1701.58,-428.968 1769.62,-416.527 1822.58,-406.314"></path><polygon fill="black" stroke="black" points="1823.48,-409.706 1832.63,-404.369 1822.15,-402.834 1823.48,-409.706"></polygon></g><!-- 7 --><g id="node8" class="node"><title>7</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="3229.9" cy="-513" rx="136.409" ry="18"></ellipse><text text-anchor="middle" x="3229.9" y="-508.8" font-family="Times,serif" font-size="14.00">golang.org/x/tools/go/types/typeutil</text></g><!-- 5&#45;&gt;7 --><g id="edge5" class="edge"><title>5-&gt;7</title><path fill="none" stroke="black" d="M1489.62,-481.479C1543.12,-490.998 1613.69,-502.042 1676.75,-507 2197.27,-547.922 2819.01,-530.336 3090.57,-519.366"></path><polygon fill="black" stroke="black" points="3091.02,-522.85 3100.87,-518.946 3090.74,-515.856 3091.02,-522.85"></polygon></g><!-- 10 --><g id="node11" class="node"><title>10</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="2862.41" cy="-270" rx="195.076" ry="18"></ellipse><text text-anchor="middle" x="2862.41" y="-265.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/staticscan/ssa</text></g><!-- 6&#45;&gt;10 --><g id="edge42" class="edge"><title>6-&gt;10</title><path fill="none" stroke="black" d="M1980.68,-370.968C2035.75,-357.092 2117.18,-338.048 2189.24,-327 2283.29,-312.583 2528.7,-293.507 2695.47,-281.492"></path><polygon fill="black" stroke="black" points="2696.12,-284.955 2705.84,-280.747 2695.62,-277.973 2696.12,-284.955"></polygon></g><!-- 11 --><g id="node12" class="node"><title>11</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="2410.31" cy="-354" rx="220.192" ry="18"></ellipse><text text-anchor="middle" x="2410.31" y="-349.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/staticscan/ssa/ssautil</text></g><!-- 6&#45;&gt;11 --><g id="edge43" class="edge"><title>6-&gt;11</title><path fill="none" stroke="black" d="M2072.42,-377.219C2122.93,-373.738 2179.28,-369.854 2231.23,-366.273"></path><polygon fill="black" stroke="black" points="2231.48,-369.764 2241.22,-365.585 2231,-362.781 2231.48,-369.764"></polygon></g><!-- 14 --><g id="node15" class="node"><title>14</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="3229.9" cy="-331" rx="122.418" ry="18"></ellipse><text text-anchor="middle" x="3229.9" y="-326.8" font-family="Times,serif" font-size="14.00">golang.org/x/tools/go/ast/astutil</text></g><!-- 6&#45;&gt;14 --><g id="edge44" class="edge"><title>6-&gt;14</title><path fill="none" stroke="black" d="M2110.04,-389.962C2254,-390.478 2455.04,-389.229 2631.37,-381 2802.51,-373.013 3000.56,-354.631 3120.19,-342.52"></path><polygon fill="black" stroke="black" points="3120.86,-345.97 3130.45,-341.477 3120.15,-339.006 3120.86,-345.97"></polygon></g><!-- 21 --><g id="node22" class="node"><title>21</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="2862.41" cy="-446" rx="110.315" ry="18"></ellipse><text text-anchor="middle" x="2862.41" y="-441.8" font-family="Times,serif" font-size="14.00">golang.org/x/tools/go/loader</text></g><!-- 6&#45;&gt;21 --><g id="edge45" class="edge"><title>6-&gt;21</title><path fill="none" stroke="black" d="M2044.82,-401.521C2090.4,-405.971 2142.07,-410.634 2189.24,-414 2383.31,-427.845 2609.34,-437.219 2743.62,-442.08"></path><polygon fill="black" stroke="black" points="2743.8,-445.589 2753.92,-442.45 2744.06,-438.593 2743.8,-445.589"></polygon></g><!-- 8 --><g id="node9" class="node"><title>8</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="1915" cy="-148" rx="238.499" ry="18"></ellipse><text text-anchor="middle" x="1915" y="-143.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/staticscan/callgraph/static</text></g><!-- 9 --><g id="node10" class="node"><title>9</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="2410.31" cy="-110" rx="217.259" ry="18"></ellipse><text text-anchor="middle" x="2410.31" y="-105.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/staticscan/callgraph</text></g><!-- 8&#45;&gt;9 --><g id="edge6" class="edge"><title>8-&gt;9</title><path fill="none" stroke="black" d="M2082.66,-135.161C2133.52,-131.244 2189.46,-126.935 2240.46,-123.006"></path><polygon fill="black" stroke="black" points="2240.89,-126.484 2250.59,-122.226 2240.35,-119.504 2240.89,-126.484"></polygon></g><!-- 8&#45;&gt;10 --><g id="edge7" class="edge"><title>8-&gt;10</title><path fill="none" stroke="black" d="M2124.87,-139.46C2268.77,-137.914 2463.53,-144.434 2631.37,-180 2698.74,-194.276 2772.1,-226.053 2817.43,-247.759"></path><polygon fill="black" stroke="black" points="2816.14,-251.023 2826.67,-252.228 2819.19,-244.722 2816.14,-251.023"></polygon></g><!-- 8&#45;&gt;11 --><g id="edge8" class="edge"><title>8-&gt;11</title><path fill="none" stroke="black" d="M1996.08,-164.958C2042.81,-176.074 2102.39,-192.371 2153.24,-213 2235.59,-246.404 2325.09,-300.078 2373.43,-330.665"></path><polygon fill="black" stroke="black" points="2371.65,-333.681 2381.96,-336.097 2375.4,-327.776 2371.65,-333.681"></polygon></g><!-- 9&#45;&gt;10 --><g id="edge33" class="edge"><title>9-&gt;10</title><path fill="none" stroke="black" d="M2556.02,-123.382C2581.51,-127.895 2607.51,-133.93 2631.37,-142 2706.1,-167.271 2784.64,-216.654 2827.87,-246.146"></path><polygon fill="black" stroke="black" points="2826.07,-249.156 2836.29,-251.944 2830.04,-243.39 2826.07,-249.156"></polygon></g><!-- 10&#45;&gt;7 --><g id="edge12" class="edge"><title>10-&gt;7</title><path fill="none" stroke="black" d="M2892.43,-287.907C2932.58,-313.601 3005.95,-363.939 3057.45,-419 3077.15,-440.066 3070.22,-455.891 3093.45,-473 3106.44,-482.575 3121.71,-489.871 3137.23,-495.427"></path><polygon fill="black" stroke="black" points="3136.31,-498.81 3146.9,-498.666 3138.53,-492.172 3136.31,-498.81"></polygon></g><!-- 10&#45;&gt;14 --><g id="edge11" class="edge"><title>10-&gt;14</title><path fill="none" stroke="black" d="M2958.01,-285.788C3013.56,-295.06 3083.41,-306.717 3138.26,-315.872"></path><polygon fill="black" stroke="black" points="3137.88,-319.357 3148.32,-317.552 3139.04,-312.453 3137.88,-319.357"></polygon></g><!-- 11&#45;&gt;10 --><g id="edge51" class="edge"><title>11-&gt;10</title><path fill="none" stroke="black" d="M2528.08,-338.748C2561.52,-333.912 2597.97,-328.195 2631.37,-322 2682.27,-312.561 2739.01,-299.761 2783.4,-289.223"></path><polygon fill="black" stroke="black" points="2784.34,-292.598 2793.25,-286.873 2782.71,-285.789 2784.34,-292.598"></polygon></g><!-- 11&#45;&gt;21 --><g id="edge52" class="edge"><title>11-&gt;21</title><path fill="none" stroke="black" d="M2493.08,-370.714C2575.35,-387.53 2701.36,-413.286 2782.57,-429.886"></path><polygon fill="black" stroke="black" points="2782.24,-433.391 2792.74,-431.965 2783.65,-426.533 2782.24,-433.391"></polygon></g><!-- 12 --><g id="node13" class="node"><title>12</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="906.679" cy="-434" rx="187.843" ry="18"></ellipse><text text-anchor="middle" x="906.679" y="-429.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/simplecode</text></g><!-- 12&#45;&gt;5 --><g id="edge9" class="edge"><title>12-&gt;5</title><path fill="none" stroke="black" d="M1064.23,-443.809C1114.13,-446.935 1169.76,-450.42 1221.26,-453.647"></path><polygon fill="black" stroke="black" points="1221.3,-457.156 1231.5,-454.288 1221.74,-450.17 1221.3,-457.156"></polygon></g><!-- 13 --><g id="node14" class="node"><title>13</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="1403.47" cy="-411" rx="222.13" ry="18"></ellipse><text text-anchor="middle" x="1403.47" y="-406.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/staticscan/lint/lintutil</text></g><!-- 12&#45;&gt;13 --><g id="edge10" class="edge"><title>12-&gt;13</title><path fill="none" stroke="black" d="M1075.88,-426.181C1115.87,-424.322 1158.94,-422.32 1200.27,-420.399"></path><polygon fill="black" stroke="black" points="1200.63,-423.886 1210.46,-419.925 1200.31,-416.894 1200.63,-423.886"></polygon></g><!-- 13&#45;&gt;6 --><g id="edge25" class="edge"><title>13-&gt;6</title><path fill="none" stroke="black" d="M1597.83,-402.272C1640.7,-400.337 1686.04,-398.29 1728.59,-396.369"></path><polygon fill="black" stroke="black" points="1728.93,-399.857 1738.76,-395.91 1728.62,-392.865 1728.93,-399.857"></polygon></g><!-- 15 --><g id="node16" class="node"><title>15</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="1915" cy="-480" rx="101.481" ry="18"></ellipse><text text-anchor="middle" x="1915" y="-475.8" font-family="Times,serif" font-size="14.00">github.com/kisielk/gotool</text></g><!-- 13&#45;&gt;15 --><g id="edge24" class="edge"><title>13-&gt;15</title><path fill="none" stroke="black" d="M1552.8,-424.337C1582.08,-427.985 1612.48,-432.494 1640.75,-438 1657.05,-441.175 1660.48,-444.66 1676.75,-448 1722.35,-457.364 1773.47,-464.66 1816.55,-469.905"></path><polygon fill="black" stroke="black" points="1816.4,-473.413 1826.75,-471.127 1817.24,-466.462 1816.4,-473.413"></polygon></g><!-- 13&#45;&gt;21 --><g id="edge26" class="edge"><title>13-&gt;21</title><path fill="none" stroke="black" d="M1600.35,-419.362C1759.09,-425.807 1988.55,-434.375 2189.24,-439 2382.55,-443.454 2607.19,-445.075 2741.63,-445.664"></path><polygon fill="black" stroke="black" points="2741.94,-449.165 2751.96,-445.708 2741.97,-442.165 2741.94,-449.165"></polygon></g><!-- 16 --><g id="node17" class="node"><title>16</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="461.962" cy="-388" rx="181.546" ry="18"></ellipse><text text-anchor="middle" x="461.962" y="-383.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/staticscan</text></g><!-- 16&#45;&gt;13 --><g id="edge13" class="edge"><title>16-&gt;13</title><path fill="none" stroke="black" d="M638.574,-392.299C791.777,-396.05 1014.83,-401.51 1180.39,-405.563"></path><polygon fill="black" stroke="black" points="1180.63,-409.07 1190.71,-405.816 1180.8,-402.072 1180.63,-409.07"></polygon></g><!-- 17 --><g id="node18" class="node"><title>17</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="906.679" cy="-265" rx="223.523" ry="18"></ellipse><text text-anchor="middle" x="906.679" y="-260.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/staticscan/staticcheck</text></g><!-- 16&#45;&gt;17 --><g id="edge14" class="edge"><title>16-&gt;17</title><path fill="none" stroke="black" d="M581.615,-374.36C603.573,-370.778 626.188,-366.369 647.168,-361 722.049,-341.835 805.301,-308.66 856.582,-286.77"></path><polygon fill="black" stroke="black" points="857.97,-289.983 865.776,-282.819 855.206,-283.551 857.97,-289.983"></polygon></g><!-- 17&#45;&gt;6 --><g id="edge29" class="edge"><title>17-&gt;6</title><path fill="none" stroke="black" d="M1019.6,-280.586C1065.06,-286.805 1118.11,-293.917 1166.19,-300 1380.76,-327.148 1630.33,-355.962 1780.04,-372.948"></path><polygon fill="black" stroke="black" points="1779.86,-376.451 1790.2,-374.1 1780.65,-369.496 1779.86,-376.451"></polygon></g><!-- 17&#45;&gt;10 --><g id="edge30" class="edge"><title>17-&gt;10</title><path fill="none" stroke="black" d="M1130.13,-265.882C1142.33,-265.924 1154.41,-265.963 1166.19,-266 1704.27,-267.676 2338.41,-268.998 2656.97,-269.617"></path><polygon fill="black" stroke="black" points="2657.23,-273.118 2667.23,-269.637 2657.24,-266.118 2657.23,-273.118"></polygon></g><!-- 17&#45;&gt;14 --><g id="edge32" class="edge"><title>17-&gt;14</title><path fill="none" stroke="black" d="M1097.21,-255.572C1108.87,-250.926 1119.99,-245.145 1130.19,-238 1159.17,-217.699 1137.43,-187.608 1166.19,-167 1352.51,-33.4835 1449.58,-124.601 1676.75,-94 1782.08,-79.8111 1807.71,-64 1914,-64 1914,-64 1914,-64 2411.31,-64 2709.3,-64 2784.96,-122.387 3057.45,-243 3103.37,-263.325 3154.38,-290.066 3188.72,-308.713"></path><polygon fill="black" stroke="black" points="3187.06,-311.793 3197.52,-313.508 3190.41,-305.647 3187.06,-311.793"></polygon></g><!-- 25 --><g id="node26" class="node"><title>25</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="1915" cy="-240" rx="237.514" ry="18"></ellipse><text text-anchor="middle" x="1915" y="-235.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/staticscan/staticcheck/vrp</text></g><!-- 17&#45;&gt;25 --><g id="edge31" class="edge"><title>17-&gt;25</title><path fill="none" stroke="black" d="M1120.48,-259.713C1284.06,-255.65 1509.88,-250.039 1678.81,-245.843"></path><polygon fill="black" stroke="black" points="1678.93,-249.341 1688.84,-245.594 1678.75,-242.343 1678.93,-249.341"></polygon></g><!-- 27 --><g id="node28" class="node"><title>27</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="1403.47" cy="-194" rx="217.285" ry="18"></ellipse><text text-anchor="middle" x="1403.47" y="-189.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/staticscan/functions</text></g><!-- 17&#45;&gt;27 --><g id="edge27" class="edge"><title>17-&gt;27</title><path fill="none" stroke="black" d="M1043.01,-250.727C1071.86,-247.084 1102.1,-242.814 1130.19,-238 1146.35,-235.232 1150.08,-233.014 1166.19,-230 1203.29,-223.061 1243.85,-216.508 1280.73,-210.943"></path><polygon fill="black" stroke="black" points="1281.65,-214.344 1291.02,-209.401 1280.62,-207.421 1281.65,-214.344"></polygon></g><!-- 28 --><g id="node29" class="node"><title>28</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="1403.47" cy="-18" rx="209.534" ry="18"></ellipse><text text-anchor="middle" x="1403.47" y="-13.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/staticscan/gcsizes</text></g><!-- 17&#45;&gt;28 --><g id="edge28" class="edge"><title>17-&gt;28</title><path fill="none" stroke="black" d="M1104.09,-256.459C1113.5,-251.459 1122.3,-245.37 1130.19,-238 1192.37,-179.937 1104.42,-108.492 1166.19,-50 1175.38,-41.2977 1185.75,-34.2177 1196.88,-28.4966"></path><polygon fill="black" stroke="black" points="1198.42,-31.6389 1205.96,-24.1947 1195.42,-25.3128 1198.42,-31.6389"></polygon></g><!-- 19&#45;&gt;3 --><g id="edge18" class="edge"><title>19-&gt;3</title><path fill="none" stroke="black" d="M1557,-623.77C1620.87,-629.537 1695.02,-636.231 1759.13,-642.019"></path><polygon fill="black" stroke="black" points="1759.06,-645.527 1769.33,-642.94 1759.69,-638.555 1759.06,-645.527"></polygon></g><!-- 20 --><g id="node21" class="node"><title>20</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="461.962" cy="-334" rx="180.568" ry="18"></ellipse><text text-anchor="middle" x="461.962" y="-329.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/deadcode</text></g><!-- 21&#45;&gt;14 --><g id="edge19" class="edge"><title>21-&gt;14</title><path fill="none" stroke="black" d="M2955.99,-436.26C2988.54,-431.392 3025.07,-424.271 3057.45,-414 3105.13,-398.874 3156.33,-372.642 3190.24,-353.711"></path><polygon fill="black" stroke="black" points="3192.34,-356.544 3199.33,-348.58 3188.9,-350.449 3192.34,-356.544"></polygon></g><!-- 22 --><g id="node23" class="node"><title>22</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="3229.9" cy="-446" rx="118.068" ry="18"></ellipse><text text-anchor="middle" x="3229.9" y="-441.8" font-family="Times,serif" font-size="14.00">golang.org/x/tools/go/buildutil</text></g><!-- 21&#45;&gt;22 --><g id="edge20" class="edge"><title>21-&gt;22</title><path fill="none" stroke="black" d="M2973.07,-446C3013.38,-446 3059.36,-446 3101.13,-446"></path><polygon fill="black" stroke="black" points="3101.37,-449.5 3111.37,-446 3101.37,-442.5 3101.37,-449.5"></polygon></g><!-- 23 --><g id="node24" class="node"><title>23</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="461.962" cy="-280" rx="184.936" ry="18"></ellipse><text text-anchor="middle" x="461.962" y="-275.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/spellcheck</text></g><!-- 24 --><g id="node25" class="node"><title>24</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="906.679" cy="-211" rx="216.809" ry="18"></ellipse><text text-anchor="middle" x="906.679" y="-206.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/spellcheck/misspell</text></g><!-- 23&#45;&gt;24 --><g id="edge21" class="edge"><title>23-&gt;24</title><path fill="none" stroke="black" d="M584.744,-266.535C605.751,-262.969 627.232,-258.521 647.168,-253 663.872,-248.374 666.407,-242.419 683.168,-238 702.57,-232.885 723.183,-228.735 743.732,-225.369"></path><polygon fill="black" stroke="black" points="744.477,-228.795 753.809,-223.779 743.386,-221.88 744.477,-228.795"></polygon></g><!-- 25&#45;&gt;10 --><g id="edge22" class="edge"><title>25-&gt;10</title><path fill="none" stroke="black" d="M2149.65,-242.962C2289.46,-245.298 2470.63,-249.314 2631.37,-256 2651.38,-256.832 2672.36,-257.875 2693.17,-259.013"></path><polygon fill="black" stroke="black" points="2693.19,-262.519 2703.37,-259.579 2693.58,-255.53 2693.19,-262.519"></polygon></g><!-- 26 --><g id="node27" class="node"><title>26</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="461.962" cy="-226" rx="166.594" ry="18"></ellipse><text text-anchor="middle" x="461.962" y="-221.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/cyclo</text></g><!-- 27&#45;&gt;8 --><g id="edge47" class="edge"><title>27-&gt;8</title><path fill="none" stroke="black" d="M1551.16,-180.757C1613.67,-175.113 1686.84,-168.508 1751.03,-162.713"></path><polygon fill="black" stroke="black" points="1751.61,-166.175 1761.25,-161.79 1750.98,-159.203 1751.61,-166.175"></polygon></g><!-- 27&#45;&gt;9 --><g id="edge46" class="edge"><title>27-&gt;9</title><path fill="none" stroke="black" d="M1454.88,-176.457C1508.96,-158.596 1597.74,-132.012 1676.75,-121 1858.7,-95.6408 2068.52,-95.3949 2216.85,-99.997"></path><polygon fill="black" stroke="black" points="2216.86,-103.499 2226.97,-100.322 2217.09,-96.5029 2216.86,-103.499"></polygon></g><!-- 27&#45;&gt;10 --><g id="edge48" class="edge"><title>27-&gt;10</title><path fill="none" stroke="black" d="M1620.77,-194.43C1866.26,-196.659 2278.45,-205.678 2631.37,-239 2670.32,-242.677 2712.8,-248.023 2750.55,-253.244"></path><polygon fill="black" stroke="black" points="2750.16,-256.723 2760.55,-254.639 2751.13,-249.79 2750.16,-256.723"></polygon></g><!-- 27&#45;&gt;25 --><g id="edge49" class="edge"><title>27-&gt;25</title><path fill="none" stroke="black" d="M1551.16,-207.243C1613.67,-212.887 1686.84,-219.492 1751.03,-225.287"></path><polygon fill="black" stroke="black" points="1750.98,-228.797 1761.25,-226.21 1751.61,-221.825 1750.98,-228.797"></polygon></g><!-- 29 --><g id="node30" class="node"><title>29</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="120.378" cy="-361" rx="120.256" ry="18"></ellipse><text text-anchor="middle" x="120.378" y="-356.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter</text></g><!-- 29&#45;&gt;0 --><g id="edge34" class="edge"><title>29-&gt;0</title><path fill="none" stroke="black" d="M139.551,-379.067C168.075,-407.195 225.411,-462.816 276.756,-507 328.524,-551.548 391.574,-599.998 428.872,-628.092"></path><polygon fill="black" stroke="black" points="426.779,-630.898 436.876,-634.107 430.984,-625.301 426.779,-630.898"></polygon></g><!-- 29&#45;&gt;4 --><g id="edge37" class="edge"><title>29-&gt;4</title><path fill="none" stroke="black" d="M146.485,-378.612C176.191,-398.583 227.812,-430.619 276.756,-448 295.945,-454.814 316.792,-460.21 337.33,-464.474"></path><polygon fill="black" stroke="black" points="336.889,-467.955 347.38,-466.478 338.257,-461.09 336.889,-467.955"></polygon></g><!-- 29&#45;&gt;12 --><g id="edge38" class="edge"><title>29-&gt;12</title><path fill="none" stroke="black" d="M159.759,-378.023C190.674,-390.826 235.612,-407.414 276.756,-415 428.418,-442.965 604.074,-445.864 731.137,-442.839"></path><polygon fill="black" stroke="black" points="731.443,-446.333 741.351,-442.581 731.266,-439.335 731.443,-446.333"></polygon></g><!-- 29&#45;&gt;16 --><g id="edge40" class="edge"><title>29-&gt;16</title><path fill="none" stroke="black" d="M226.963,-369.395C253.06,-371.47 281.531,-373.734 309.343,-375.945"></path><polygon fill="black" stroke="black" points="309.309,-379.453 319.555,-376.757 309.863,-372.475 309.309,-379.453"></polygon></g><!-- 29&#45;&gt;20 --><g id="edge36" class="edge"><title>29-&gt;20</title><path fill="none" stroke="black" d="M226.963,-352.605C253.234,-350.516 281.909,-348.236 309.898,-346.011"></path><polygon fill="black" stroke="black" points="310.481,-349.476 320.172,-345.194 309.926,-342.498 310.481,-349.476"></polygon></g><!-- 29&#45;&gt;23 --><g id="edge39" class="edge"><title>29-&gt;23</title><path fill="none" stroke="black" d="M162.939,-344.147C193.868,-332.2 237.366,-316.64 276.756,-307 294.936,-302.551 314.316,-298.733 333.424,-295.489"></path><polygon fill="black" stroke="black" points="334.087,-298.927 343.383,-293.844 332.946,-292.02 334.087,-298.927"></polygon></g><!-- 29&#45;&gt;26 --><g id="edge35" class="edge"><title>29-&gt;26</title><path fill="none" stroke="black" d="M140.716,-343.019C168.499,-318.314 222.376,-274.498 276.756,-253 290.811,-247.444 305.876,-243.016 321.115,-239.491"></path><polygon fill="black" stroke="black" points="322.121,-242.854 331.145,-237.302 320.628,-236.015 322.121,-242.854"></polygon></g><!-- 30 --><g id="node31" class="node"><title>30</title><ellipse fill="paleturquoise" stroke="paleturquoise" cx="461.962" cy="-172" rx="173.369" ry="18"></ellipse><text text-anchor="middle" x="461.962" y="-167.8" font-family="Times,serif" font-size="14.00">github.com/wgliang/goreporter/linters/unittest</text></g><!-- 29&#45;&gt;30 --><g id="edge41" class="edge"><title>29-&gt;30</title><path fill="none" stroke="black" d="M132.654,-342.924C155.256,-308.423 209.728,-233.547 276.756,-199 287.418,-193.505 298.859,-189.036 310.63,-185.41"></path><polygon fill="black" stroke="black" points="311.935,-188.677 320.585,-182.559 310.008,-181.948 311.935,-188.677"></polygon></g></g></svg>'
    });}

function showWithTitleMessage() {
    swal("Here's a message!", "It's pretty, isn't it?");
}

function showSuccessMessage() {
    swal("Good job!", "You clicked the button!", "success");
}

function showConfirmMessage() {
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
    }, function () {
        swal("Deleted!", "Your imaginary file has been deleted.", "success");
    });
}

function showCancelMessage() {
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel plx!",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function (isConfirm) {
        if (isConfirm) {
            swal("Deleted!", "Your imaginary file has been deleted.", "success");
        } else {
            swal("Cancelled", "Your imaginary file is safe :)", "error");
        }
    });
}

function showWithCustomIconMessage() {
    swal({
        title: "Sweet!",
        text: "Here's a custom image.",
        imageUrl: "../../images/thumbs-up.png"
    });
}

function showHtmlMessage() {
    swal({
        title: "HTML <small>Title</small>!",
        text: "A custom <span style=\"color: #CC0000\">html<span> message.",
        html: true
    });
}

function showAutoCloseTimerMessage() {
    swal({
        title: "Auto close alert!",
        text: "I will close in 2 seconds.",
        timer: 2000,
        showConfirmButton: false
    });
}

function showPromptMessage() {
    swal({
        title: "An input!",
        text: "Write something interesting:",
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Write something"
    }, function (inputValue) {
        if (inputValue === false) return false;
        if (inputValue === "") {
            swal.showInputError("You need to write something!"); return false
        }
        swal("Nice!", "You wrote: " + inputValue, "success");
    });
}

function showAjaxLoaderMessage() {
    swal({
        title: "Ajax request example",
        text: "Submit to run ajax request",
        type: "info",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
    }, function () {
        setTimeout(function () {
            swal("Ajax request finished!");
        }, 2000);
    });
}