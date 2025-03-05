import React, { useState } from "react";
import { History, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
interface HistoryItem {
  id: string;
  date: Date;
  imageSrc: string;
  text: string;
}
const HistoryButton: React.FC = () => {
  // This would typically come from a database or localStorage
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([]);
  const downloadText = (text: string, filename: string) => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  return <Dialog>
      <DialogTrigger asChild>
        <button className="history-button hover:bg-gray-100 transition-colors my-[54px] mx-[2px]">
          <History className="w-6 h-6 text-gray-700" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium">Conversion History</DialogTitle>
        </DialogHeader>
        
        {historyItems.length === 0 ? <div className="py-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <History className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium mb-2">No history yet</h3>
            <p className="text-gray-500">
              Your converted images will appear here
            </p>
          </div> : <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {historyItems.map(item => <div key={item.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-sm text-gray-500">
                      {item.date.toLocaleDateString()} at {item.date.toLocaleTimeString()}
                    </p>
                  </div>
                  <button onClick={() => downloadText(item.text, `ocr-text-${item.id}.txt`)} className="text-blue-600 hover:text-blue-800 text-sm">
                    Download
                  </button>
                </div>
                
                <div className="flex space-x-4">
                  <div className="w-24 h-24 bg-gray-100 rounded flex-shrink-0">
                    <img src={item.imageSrc} alt="History thumbnail" className="w-full h-full object-cover rounded" />
                  </div>
                  <div className="flex-grow">
                    <div className="h-24 overflow-y-auto text-sm text-gray-700">
                      {item.text.substring(0, 200)}
                      {item.text.length > 200 && "..."}
                    </div>
                  </div>
                </div>
              </div>)}
          </div>}
      </DialogContent>
    </Dialog>;
};
export default HistoryButton;