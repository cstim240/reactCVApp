import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
//we are first converting the HTML content to canvas and
// then converting the canvas to PDF using jsPDF.

const printDocument = () => {
    const input = document.querySelector('.outputLayout');
    html2canvas(input)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
        });
}

export default printDocument;