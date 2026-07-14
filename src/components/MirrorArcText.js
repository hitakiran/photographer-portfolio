// MirrorArcText keeps the small mirror labels editable while curving them
// along the oval shape of the mirror frame.
export default function MirrorArcText({ bottomText, className = "", idPrefix, topText }) {
  const topPathId = `${idPrefix}-top-arc`;
  const bottomPathId = `${idPrefix}-bottom-arc`;

  return (
    <svg
      aria-hidden="true"
      className={className}
      focusable="false"
      viewBox="0 0 200 240"
    >
      <defs>
        {/* Top arc curves upward, matching the inner top of the mirror. */}
        <path id={topPathId} d="M 40 108 A 60 34 0 0 1 160 108" />
        {/* Bottom arc curves downward, matching the inner bottom of the mirror. */}
        <path id={bottomPathId} d="M 46 154 A 54 30 0 0 0 154 154" />
      </defs>

      <text className="mirror-arc-label mirror-arc-label-top">
        <textPath href={`#${topPathId}`} startOffset="50%" textAnchor="middle">
          {topText}
        </textPath>
      </text>

      <text className="mirror-arc-label mirror-arc-label-bottom">
        <textPath href={`#${bottomPathId}`} startOffset="50%" textAnchor="middle">
          {bottomText}
        </textPath>
      </text>
    </svg>
  );
}
