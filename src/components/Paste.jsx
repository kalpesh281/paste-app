import React, { useState } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../features/pasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FiEdit, FiTrash2, FiEye, FiCopy, FiSearch } from 'react-icons/fi';

function Paste() {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (pasteId) => {
    dispatch(removeFromPastes(pasteId));
  }

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(date));
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-sm mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Pastes</h1>
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              value={searchTerm}
              placeholder="Search pastes by title..."
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid gap-6">
          {filterData.length > 0 ? (
            filterData.map((paste) => (
              <div
                key={paste._id}
                className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">{paste.title}</h2>
                  <div className="flex gap-2">
                    <Link
                      to={`/?pasteId=${paste._id}`}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                      title="Edit"
                    >
                      <FiEdit size={18} />
                    </Link>
                    <Link
                      to={`/paste/${paste._id}`}
                      className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
                      title="View"
                    >
                      <FiEye size={18} />
                    </Link>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(paste.content);
                        toast.success("Copied to clipboard!");
                      }}
                      className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-full transition-colors"
                      title="Copy"
                    >
                      <FiCopy size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(paste._id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                      title="Delete"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">
                    Created {formatDate(paste.createAt)}
                  </p>
                  <p className="text-sm text-gray-500">
                    {paste.content.length} characters
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              No pastes found. Start by creating a new paste!
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Paste;
