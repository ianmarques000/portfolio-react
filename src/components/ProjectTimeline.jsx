import '../css/timeline.css'

export function TimelineMark({ label, inline = false }) {
  return (
    <div className={`tl${inline ? ' tl--inline' : ''}`}>
      <span className="tl__dot" aria-hidden="true" />
      <span className="tl__label">{label}</span>
    </div>
  )
}

export default function ProjectTimeline({ label, edge, inlineMark = false, note, notePos, children }) {
  return (
    <div className={`tl-item${edge ? ` tl-item--${edge}` : ''}`}>
      {!inlineMark && <TimelineMark label={label} />}
      {children}
      {note && <p className="tl-note" style={notePos}>{note}</p>}
    </div>
  )
}
