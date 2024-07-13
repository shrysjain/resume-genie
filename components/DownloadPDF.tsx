import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'; // why is this throwing an error.

interface Props {
  resumeElementId: string;
  resumeTitle: string;
}

const DownloadPDF: React.FC<Props> = ({ resumeElementId, resumeTitle }) => {
  const handleDownloadPDF = () => {
    const resumeElement = document.getElementById(resumeElementId);
    if (resumeElement) {
      html2canvas(resumeElement).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const pageHeight = 295;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save(`${resumeTitle}.pdf`);
      });
    }
  };

  return (
    <div className="mt-4 flex justify-center">
      <button
        onClick={handleDownloadPDF}
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300"
      >
        Download PDF
      </button>
    </div>
  );
};

export default DownloadPDF;
