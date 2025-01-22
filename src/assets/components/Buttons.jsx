function Button({ className, label, onClick }) {
  const style = `p-4 border border-slate-300 rounded-md text-white hover:opacity-80 ${className}`

  return (
    <button className={style} onClick={onClick}>{label}</button>
  )
}

export default Button
