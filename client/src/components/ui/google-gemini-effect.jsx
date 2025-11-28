import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const transition = { duration: 0, ease: "linear" };
const SCRUMPLE_T = 0.62;

export const GoogleGeminiEffect = ({
  pathLengths = [1, 1, 1, 1, 1],
  title,
  description,
  className,
}) => {
  const svgRef = useRef(null);
  const pathRefs = useRef([]);

  // state holds relative top (px) inside the component and computed scale
  const [btnState, setBtnState] = useState({ relTop: 520, scale: 1 });

  // ---------- SIZING CONSTANTS ----------
  const baseButtonWidth = 110; // px
  const baseButtonHeight = 30; // px
  const minButtonWidth = 110; // px
  const minButtonHeight = 30; // px
  // font/padding
  const desktopFontSize = 13; // px
  const mobileFontSize = 16; // px
  const desktopPadding = { vertical: 0, horizontal: 0 };
  const mobilePadding = { vertical: 0, horizontal: 0 };
  // --------------------------------------------------------

  const [respStyle, setRespStyle] = useState({
    fontSize: desktopFontSize,
    padding: `${desktopPadding.vertical}px ${desktopPadding.horizontal}px`,
  });

  useEffect(() => {
    const calcResp = () => {
      const isMobile = window.innerWidth < 768;
      setRespStyle({
        fontSize: isMobile ? mobileFontSize : desktopFontSize,
        padding: `${isMobile ? mobilePadding.vertical : desktopPadding.vertical}px ${
          isMobile ? mobilePadding.horizontal : desktopPadding.horizontal
        }px`,
      });
    };
    calcResp();
    window.addEventListener("resize", calcResp);
    return () => window.removeEventListener("resize", calcResp);
  }, []);

  // dynamic z-index: try to place button under element with id "macbook-section"
  const [buttonZIndex, setButtonZIndex] = useState(10);
  useEffect(() => {
    const computeZ = () => {
      try {
        const el = document.getElementById("macbook-section");
        if (!el) {
          setButtonZIndex(10);
          return;
        }
        const z = window.getComputedStyle(el).zIndex;
        const parsed = Number.isFinite(Number(z)) ? parseInt(z, 10) : NaN;
        if (!Number.isNaN(parsed)) {
          setButtonZIndex(Math.max(0, parsed - 1));
        } else {
          setButtonZIndex(10);
        }
      } catch {
        setButtonZIndex(10);
      }
    };

    computeZ();
    window.addEventListener("resize", computeZ);
    let mo;
    const target = document.getElementById("macbook-section");
    if (target && typeof MutationObserver !== "undefined") {
      mo = new MutationObserver(computeZ);
      mo.observe(target, { attributes: true, attributeFilter: ["class", "style"] });
    }
    return () => {
      window.removeEventListener("resize", computeZ);
      if (mo) mo.disconnect();
    };
  }, []);

  const computeViewportYAndScale = () => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = pathRefs.current.filter(Boolean);
    if (paths.length === 0) return;

    // average point in SVG coords
    let sumX = 0,
      sumY = 0,
      n = 0;
    for (const p of paths) {
      try {
        const total = p.getTotalLength();
        const pt = p.getPointAtLength(total * SCRUMPLE_T);
        sumX += pt.x;
        sumY += pt.y;
        n++;
      } catch {
        // ignore
      }
    }
    if (n === 0) return;
    const avgX = sumX / n;
    const avgY = sumY / n;

    // convert to viewport (screen) coordinates
    const svgPt = svg.createSVGPoint();
    svgPt.x = avgX;
    svgPt.y = avgY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return;
    const screenPt = svgPt.matrixTransform(ctm);
    // screenPt.x/y are viewport-relative CSS pixels

    // compute displayed scale from viewBox -> displayed width
    const viewBoxWidth = svg.viewBox?.baseVal?.width || 1440;
    const rect = svg.getBoundingClientRect();
    const displayedWidth = rect.width || viewBoxWidth;
    const visualScale = displayedWidth / viewBoxWidth;

    // minimum scale so the button doesn't go below min size (based on base sizes)
    const minScaleW = minButtonWidth / baseButtonWidth;
    const minScaleH = minButtonHeight / baseButtonHeight;
    const minScale = Math.max(minScaleW, minScaleH);

    const scale = Math.max(visualScale, minScale);

    // Now compute the Y relative to the component container (so we can use absolute positioning)
    const container = svg.parentElement || svg.parentNode;
    if (!container || !(container instanceof Element)) return;
    const containerRect = container.getBoundingClientRect();
    const relTop = Math.round(screenPt.y - containerRect.top);

    // update state only when changed meaningfully
    setBtnState((prev) => {
      const dy = Math.abs((prev.relTop ?? prev.viewportY ?? 0) - relTop);
      const ds = Math.abs(prev.scale - scale);
      if (dy >= 1 || ds >= 0.005) {
        return { relTop, scale };
      }
      return prev;
    });
  };

  useEffect(() => {
    const raf = requestAnimationFrame(() => computeViewportYAndScale());
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          computeViewportYAndScale();
          ticking = false;
        });
      }
    };

    window.addEventListener("resize", handler);
    window.addEventListener("scroll", handler);

    let ro;
    if (svgRef.current && typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(handler);
      ro.observe(svgRef.current);
    }

    return () => {
      window.removeEventListener("resize", handler);
      window.removeEventListener("scroll", handler);
      if (ro && svgRef.current) ro.unobserve(svgRef.current);
    };
  }, []);

  const handleClick = () => {
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    window.scrollTo({
      top: vh * (vh > vw ? 3 : 2.5),
      behavior: "smooth",
    });
  };

  // ABSOLUTE style (relative to the wrapper <div class="relative ...">)
  const absStyle = {
    position: "absolute",
    left: "50%",
    top: `${btnState.relTop}px`,
    transform: `translate(-50%, -50%) scale(${btnState.scale})`,
    transformOrigin: "center center",
    zIndex: buttonZIndex,
    pointerEvents: "auto",
    willChange: "transform, top",
  };

  return (
    <div className={cn("relative", "sticky top-[25vh]", className)}>
      <p className="md:top-0 relative -top-5 text-5xl font-semibold md:text-7xl text-center bg-clip-text drop-shadow-xl text-foreground bg-gradient-to-b from-neutral-100 to-neutral-300">
        {title || `Build with Aceternity UI`}
      </p>

      <p className="p-4 py-0 md:py-4 md:text-xl text-sm text-center text-muted-foreground mt-4 max-w-lg mx-auto">
        {description ||
          `We specialize in providing expert gadget repair service with over 15 years of experience`}
      </p>

      <svg
        ref={svgRef}
        width="1440"
        height="890"
        viewBox="0 0 1440 890"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-55 m-auto drop-shadow-lg md:-top-40 w-full"
      >
        {/* motion paths (unchanged) */}
        <motion.path
          ref={(el) => (pathRefs.current[0] = el)}
          d="M0 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5 455 529.5 490 523C509.664 519.348 521 503.736 538 504.236C553.591 504.236 562.429 514.739 584.66 522.749C592.042 525.408 600.2 526.237 607.356 523.019C624.755 515.195 641.446 496.324 657 496.735C673.408 496.735 693.545 519.572 712.903 526.769C718.727 528.934 725.184 528.395 730.902 525.965C751.726 517.115 764.085 497.106 782 496.735C794.831 496.47 804.103 508.859 822.469 518.515C835.13 525.171 850.214 526.815 862.827 520.069C875.952 513.049 889.748 502.706 903.5 503.736C922.677 505.171 935.293 510.562 945.817 515.673C954.234 519.76 963.095 522.792 972.199 524.954C996.012 530.611 1007.42 534.118 1034 549C1077.5 573.359 1082.5 594.5 1140 629C1206 670 1328.5 662.5 1440 662.5"
          stroke="var(--chart-1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
          transition={transition}
        />
        <motion.path
          ref={(el) => (pathRefs.current[1] = el)}
          d="M0 587.5C147 587.5 277 587.5 310 573.5C348 563 392.5 543.5 408 535C434 523.5 426 526.235 479 515.235C494 512.729 523 510.435 534.5 512.735C554.5 516.735 555.5 523.235 576 523.735C592 523.735 616 496.735 633 497.235C648.671 497.235 661.31 515.052 684.774 524.942C692.004 527.989 700.2 528.738 707.349 525.505C724.886 517.575 741.932 498.33 757.5 498.742C773.864 498.742 791.711 520.623 810.403 527.654C816.218 529.841 822.661 529.246 828.451 526.991C849.246 518.893 861.599 502.112 879.5 501.742C886.47 501.597 896.865 506.047 907.429 510.911C930.879 521.707 957.139 519.639 982.951 520.063C1020.91 520.686 1037.5 530.797 1056.5 537C1102.24 556.627 1116.5 570.704 1180.5 579.235C1257.5 589.5 1279 587 1440 588"
          stroke="var(--chart-2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[1] }}
          transition={transition}
        />
        <motion.path
          ref={(el) => (pathRefs.current[2] = el)}
          d="M0 514C147.5 514.333 294.5 513.735 380.5 513.735C405.976 514.94 422.849 515.228 436.37 515.123C477.503 514.803 518.631 506.605 559.508 511.197C564.04 511.706 569.162 512.524 575 513.735C588 516.433 616 521.702 627.5 519.402C647.5 515.402 659 499.235 680.5 499.235C700.5 499.235 725 529.235 742 528.735C757.654 528.735 768.77 510.583 791.793 500.59C798.991 497.465 807.16 496.777 814.423 499.745C832.335 507.064 850.418 524.648 866 524.235C882.791 524.235 902.316 509.786 921.814 505.392C926.856 504.255 932.097 504.674 937.176 505.631C966.993 511.248 970.679 514.346 989.5 514.735C1006.3 515.083 1036.5 513.235 1055.5 513.235C1114.5 513.235 1090.5 513.235 1124 513.235C1177.5 513.235 1178.99 514.402 1241 514.402C1317.5 514.402 1274.5 512.568 1440 513.235"
          stroke="var(--chart-3)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[2] }}
          transition={transition}
        />
        <motion.path
          ref={(el) => (pathRefs.current[3] = el)}
          d="M0 438.5C150.5 438.5 261 438.318 323.5 456.5C351 464.5 387.517 484.001 423.5 494.5C447.371 501.465 472 503.735 487 507.735C503.786 512.212 504.5 516.808 523 518.735C547 521.235 564.814 501.235 584.5 501.235C604.5 501.235 626 529.069 643 528.569C658.676 528.569 672.076 511.63 695.751 501.972C703.017 499.008 711.231 498.208 718.298 501.617C735.448 509.889 751.454 529.98 767 529.569C783.364 529.569 801.211 507.687 819.903 500.657C825.718 498.469 832.141 499.104 837.992 501.194C859.178 508.764 873.089 523.365 891 523.735C907.8 524.083 923 504.235 963 506.735C1034.5 506.735 1047.5 492.68 1071 481.5C1122.5 457 1142.23 452.871 1185 446.5C1255.5 436 1294 439 1439.5 439"
          stroke="var(--chart-4)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[3] }}
          transition={transition}
        />
        <motion.path
          ref={(el) => (pathRefs.current[4] = el)}
          d="M0.5 364C145.288 362.349 195 361.5 265.5 378C322 391.223 399.182 457.5 411 467.5C424.176 478.649 456.916 491.677 496.259 502.699C498.746 503.396 501.16 504.304 503.511 505.374C517.104 511.558 541.149 520.911 551.5 521.236C571.5 521.236 590 498.736 611.5 498.736C631.5 498.736 652.5 529.236 669.5 528.736C685.171 528.736 697.81 510.924 721.274 501.036C728.505 497.988 736.716 497.231 743.812 500.579C761.362 508.857 778.421 529.148 794 528.736C810.375 528.736 829.35 508.68 848.364 502.179C854.243 500.169 860.624 500.802 866.535 502.718C886.961 509.338 898.141 519.866 916 520.236C932.8 520.583 934.5 510.236 967.5 501.736C1011.5 491 1007.5 493.5 1029.5 480C1069.5 453.5 1072 440.442 1128.5 403.5C1180.5 369.5 1275 360.374 1439 364"
          stroke="var(--chart-5)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[4] }}
          transition={transition}
        />

              <path
          d="M0 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5 455 529.5 490 523C509.664 519.348 521 503.736 538 504.236C553.591 504.236 562.429 514.739 584.66 522.749C592.042 525.408 600.2 526.237 607.356 523.019C624.755 515.195 641.446 496.324 657 496.735C673.408 496.735 693.545 519.572 712.903 526.769C718.727 528.934 725.184 528.395 730.902 525.965C751.726 517.115 764.085 497.106 782 496.735C794.831 496.47 804.103 508.859 822.469 518.515C835.13 525.171 850.214 526.815 862.827 520.069C875.952 513.049 889.748 502.706 903.5 503.736C922.677 505.171 935.293 510.562 945.817 515.673C954.234 519.76 963.095 522.792 972.199 524.954C996.012 530.611 1007.42 534.118 1034 549C1077.5 573.359 1082.5 594.5 1140 629C1206 670 1328.5 662.5 1440 662.5"
          stroke="var(--chart-1)"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M0 587.5C147 587.5 277 587.5 310 573.5C348 563 392.5 543.5 408 535C434 523.5 426 526.235 479 515.235C494 512.729 523 510.435 534.5 512.735C554.5 516.735 555.5 523.235 576 523.735C592 523.735 616 496.735 633 497.235C648.671 497.235 661.31 515.052 684.774 524.942C692.004 527.989 700.2 528.738 707.349 525.505C724.886 517.575 741.932 498.33 757.5 498.742C773.864 498.742 791.711 520.623 810.403 527.654C816.218 529.841 822.661 529.246 828.451 526.991C849.246 518.893 861.599 502.112 879.5 501.742C886.47 501.597 896.865 506.047 907.429 510.911C930.879 521.707 957.139 519.639 982.951 520.063C1020.91 520.686 1037.5 530.797 1056.5 537C1102.24 556.627 1116.5 570.704 1180.5 579.235C1257.5 589.5 1279 587 1440 588"
          stroke="var(--chart-2)"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M0 514C147.5 514.333 294.5 513.735 380.5 513.735C405.976 514.94 422.849 515.228 436.37 515.123C477.503 514.803 518.631 506.605 559.508 511.197C564.04 511.706 569.162 512.524 575 513.735C588 516.433 616 521.702 627.5 519.402C647.5 515.402 659 499.235 680.5 499.235C700.5 499.235 725 529.235 742 528.735C757.654 528.735 768.77 510.583 791.793 500.59C798.991 497.465 807.16 496.777 814.423 499.745C832.335 507.064 850.418 524.648 866 524.235C882.791 524.235 902.316 509.786 921.814 505.392C926.856 504.255 932.097 504.674 937.176 505.631C966.993 511.248 970.679 514.346 989.5 514.735C1006.3 515.083 1036.5 513.235 1055.5 513.235C1114.5 513.235 1090.5 513.235 1124 513.235C1177.5 513.235 1178.99 514.402 1241 514.402C1317.5 514.402 1274.5 512.568 1440 513.235"
          stroke="var(--chart-3)"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M0 438.5C150.5 438.5 261 438.318 323.5 456.5C351 464.5 387.517 484.001 423.5 494.5C447.371 501.465 472 503.735 487 507.735C503.786 512.212 504.5 516.808 523 518.735C547 521.235 564.814 501.235 584.5 501.235C604.5 501.235 626 529.069 643 528.569C658.676 528.569 672.076 511.63 695.751 501.972C703.017 499.008 711.231 498.208 718.298 501.617C735.448 509.889 751.454 529.98 767 529.569C783.364 529.569 801.211 507.687 819.903 500.657C825.718 498.469 832.141 499.104 837.992 501.194C859.178 508.764 873.089 523.365 891 523.735C907.8 524.083 923 504.235 963 506.735C1034.5 506.735 1047.5 492.68 1071 481.5C1122.5 457 1142.23 452.871 1185 446.5C1255.5 436 1294 439 1439.5 439"
          stroke="var(--chart-4)"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M0.5 364C145.288 362.349 195 361.5 265.5 378C322 391.223 399.182 457.5 411 467.5C424.176 478.649 456.916 491.677 496.259 502.699C498.746 503.396 501.16 504.304 503.511 505.374C517.104 511.558 541.149 520.911 551.5 521.236C571.5 521.236 590 498.736 611.5 498.736C631.5 498.736 652.5 529.236 669.5 528.736C685.171 528.736 697.81 510.924 721.274 501.036C728.505 497.988 736.716 497.231 743.812 500.579C761.362 508.857 778.421 529.148 794 528.736C810.375 528.736 829.35 508.68 848.364 502.179C854.243 500.169 860.624 500.802 866.535 502.718C886.961 509.338 898.141 519.866 916 520.236C932.8 520.583 934.5 510.236 967.5 501.736C1011.5 491 1007.5 493.5 1029.5 480C1069.5 453.5 1072 440.442 1128.5 403.5C1180.5 369.5 1275 360.374 1439 364"
          stroke="var(--chart-5)"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
      </svg>
          
      {/* Absolute overlay button (positioned relative to the wrapper above) */}
      <div style={absStyle}>
        <button
          onClick={handleClick}
          className="text-lg font-bold bg-foreground text-background rounded-full shadow"
          style={{
            padding: respStyle.padding,
            width: "100px",
            fontSize: "13px",
            height: "30px",
            zIndex: buttonZIndex,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >
          Our Services
        </button>
      </div>

      <div className="text-base absolute top-[60dvh] left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce z-20">
        ↓ Scroll Down
      </div>
    </div>
  );
};

export default GoogleGeminiEffect;
