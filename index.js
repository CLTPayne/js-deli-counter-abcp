function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine, name) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
        return "Currently serving " + katzDeliLine.shift(0) + "."
  }
}

var katzDeliLine = [];

function currentLine(katzDeliLine) {
  var line = []
  if (katzDeliLine.length === 0) {
  return "The line is currently empty."}
  else {for (var i = 0; i < katzDeliLine.length; i++) { line += (i + 1) + ". " + katzDeliLine[i] + ", "}}
  line = line.slice(0, line.length-2)
  return `The line is currently: ${line}`
}