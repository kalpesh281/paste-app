import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../features/pasteSlice";





function Home() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(""); 
  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams("");
  const pasteId = searchParams.get("pasteId");
const allPastes = useSelector((state) => state.paste.pastes);
const dispatch = useDispatch();



const createPaste =  () => {
    if (!title.trim() || !value.trim()) {
        setTitleError(!title.trim());
        setContentError(!value.trim());
        return;
    }

    const paste = {
        title: title,
        content : value,
        _id : pasteId || Date.now().toString(36),
        createAt : new Date().toISOString(),
    }
    if (pasteId) {
       dispatch(updateToPastes(paste));
    } else{
        dispatch(addToPastes(paste));
    }
    setTitle("");
    setValue("");
    setSearchParams({});
}

useEffect(() => {
  if (pasteId) {
    const paste = allPastes.find((p) => p._id === pasteId);
    if (paste) {
      setTitle(paste.title);
      setValue(paste.content);
    }
  }
}, [pasteId]);

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Enter your title *"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  setTitleError(false);
                }}
                className={`w-full px-6 py-3 rounded-lg border ${
                  titleError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                } focus:outline-none focus:ring-2 focus:border-transparent text-lg font-medium placeholder:text-gray-400 bg-white/50 backdrop-blur-sm shadow-sm`}
              />
              {titleError && <p className="text-red-500 text-sm mt-1">Title is required</p>}
            </div>
            <button
            onClick={createPaste}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-sm hover:shadow-lg hover:scale-105">
              {pasteId ? "Update Paste" : "Create Paste"}
            </button>
          </div>

          <div>
            <textarea
              placeholder="Enter your text here... *"
              rows={20}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setContentError(false);
              }}
              className={`w-full p-6 rounded-lg border ${
                contentError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              } focus:outline-none focus:ring-2 focus:border-transparent resize-none font-mono text-base bg-white/50 backdrop-blur-sm shadow-sm`}
            />
            {contentError && <p className="text-red-500 text-sm mt-1">Content is required</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
