function Input({ value }) {
  const style = `w-full h-20 text-3xl bg-slate-300 rounded-md mb-2 no-spin text-end pr-4 outline-none`

  return (
    <input className={style} readOnly type="text" value={value != null ? value : ""}/>
  )
}

export default Input
