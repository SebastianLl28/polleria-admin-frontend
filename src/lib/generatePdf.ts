import jsPDF from 'jspdf'
import 'jspdf-autotable'

interface DataObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export const generatePdf = <T extends DataObject>(data: T[], name: string): void => {
  // Crea una instancia de jsPDF
  const doc = new jsPDF()

  // Define las columnas
  const columns = Object.keys(data[0])

  // Prepara las filas
  const rows = data.map(item => columns.map(column => item[column]))

  // Agrega la tabla al PDF
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  doc.autoTable({
    head: [columns],
    body: rows
  })

  // Guarda el PDF
  doc.save(`${name}.pdf`)
}
