import { useState } from "react"
import Button from "./Buttons"
import Input from "./Input"

function Content() {
  const [currentNumber, setCurrentNumber] = useState("0")
  const [firstNumber, setFirstNumber] = useState("0")
  const [operation, setOperation] = useState("")

  const handleClear = () => {
    setCurrentNumber("0")
    setFirstNumber("0")
    setOperation("")
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(previous => `${previous === "0" ? "" : previous}${number}`)
  }

  const handleToggleSign = () => {
    setCurrentNumber(previous => (previous.startsWith("-") ? previous.slice(1) : `-${previous}`))
  }

  const handlePercentage = () => {
    setCurrentNumber(previous => String(Number(previous) / 100))
  }

  const handleDecimal = () => {
    if (!currentNumber.includes(".")) {
      setCurrentNumber(previous => `${previous}.`)
    }
  }

  const handleOperation = (op) => {
    if (operation && currentNumber !== "0") {
      showResults()
    }

    setFirstNumber(currentNumber)
    setCurrentNumber("0")
    setOperation(op)
  }

  const showResults = () => {
    const previous = Number(firstNumber)
    const current = Number(currentNumber)
    let result = 0

    switch (operation) {
      case "+":
        result = previous + current
        break
      case "-":
        result = previous - current
        break
      case "*":
        result = previous * current
        break
      case "/":
        result = current !== 0 ? previous / current : "Error"
        break
      default:
        return
    }

    setCurrentNumber(String(result))
    setFirstNumber("0")
    setOperation("")
  }

  const handleEquals = () => {
    if (operation) {
      showResults()
    }
  }

  return (
    <div className="bg-white w-80 h-auto p-1 rounded-lg">
      <Input value={currentNumber} />
      <div className="grid grid-cols-4 gap-[0.05rem]">
        <Button className="bg-slate-400" onClick={handleClear} label={"AC"} />
        <Button className="bg-slate-400" onClick={handleToggleSign} label={"+/-"} />
        <Button className="bg-slate-400" onClick={handlePercentage} label={"%"} />
        <Button className="bg-orange-400" onClick={() => handleOperation("/")} label={"/"} />
      </div>
      <div className="grid grid-cols-4 gap-[0.05rem]">
        <Button className="bg-slate-400" onClick={() => handleAddNumber("7")} label={7} />
        <Button className="bg-slate-400" onClick={() => handleAddNumber("8")} label={8} />
        <Button className="bg-slate-400" onClick={() => handleAddNumber("9")} label={9} />
        <Button className="bg-orange-400" onClick={() => handleOperation("*")} label={"X"} />
      </div>
      <div className="grid grid-cols-4 gap-[0.05rem]">
        <Button className="bg-slate-400" onClick={() => handleAddNumber("4")} label={4} />
        <Button className="bg-slate-400" onClick={() => handleAddNumber("5")} label={5} />
        <Button className="bg-slate-400" onClick={() => handleAddNumber("6")} label={6} />
        <Button className="bg-orange-400" onClick={() => handleAddNumber("-")} label={"-"} />
      </div>
      <div className="grid grid-cols-4 gap-[0.05rem]">
        <Button className="bg-slate-400" onClick={() => handleAddNumber("1")} label={1} />
        <Button className="bg-slate-400" onClick={() => handleAddNumber("2")} label={2} />
        <Button className="bg-slate-400" onClick={() => handleAddNumber("3")} label={3} />
        <Button className="bg-orange-400" onClick={() => handleOperation("+")} label={"+"} />
      </div>
      <div className="grid grid-cols-4 gap-[0.05rem]">
        <Button className="bg-slate-400 col-span-2" onClick={() => handleAddNumber("0")} label={0} />
        <Button className="bg-slate-400" onClick={handleDecimal} label={","} />
        <Button className="bg-orange-400" onClick={handleEquals} label={"="} />
      </div>
    </div>
  )
}

export default Content
