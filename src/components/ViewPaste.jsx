import React from "react";
import Navbar from "./Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiCopy, FiArrowLeft } from 'react-icons/fi';
import toast from "react-hot-toast";

function ViewPaste() {
  const { id } = useParams();
  const navigate = useNavigate();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id);

  const handleCopy = () => {
    navigator.clipboard.writeText(paste.content);
    toast.success("Content copied to clipboard!");
  };

  if (!paste) {
    return (
      <>
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center text-gray-500">Paste not found</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-6 bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-4 border-b pb-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              title="Go back"
            >
              <FiArrowLeft size={24} className="text-gray-600" />
            </button>
            <div className="flex-1 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-800">{paste.title}</h1>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <FiCopy /> Copy Content
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            Created on {new Date(paste.createAt).toLocaleString()}
          </div>

          <div className="bg-gray-50 p-6 rounded-lg font-mono text-gray-800 whitespace-pre-wrap">
            {paste.content}
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewPaste;
