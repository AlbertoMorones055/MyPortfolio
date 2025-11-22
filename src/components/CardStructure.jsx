export default function CardStructure({ children, className = "" }) {
  return <article className={`card ${className}`}>{children}</article>;
}
