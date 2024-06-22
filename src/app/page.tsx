'use client';
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Select from "react-select";
import AnswerModal from './AnswerModal';
import Modal from "react-modal";

/* eslint-disable */

const findOrCreateAppElement : any = () => {
  if(typeof document!= "undefined")
    {
  const existingElement = document.querySelector('#__next');

  if (existingElement) return existingElement;

  const fallbackElement = document.createElement('div');
  fallbackElement.id = '__next';
  document.body.appendChild(fallbackElement);
  return fallbackElement;
    }

    return null;
};

Modal.setAppElement(findOrCreateAppElement());

export default function Page() {
  const questions = [
    { title: "Question 1", name: "5 most favourite and 5 least favourite support tasks", file: "question1.json" },
    { title: "Question 2", name: "What do you want to learn or do more of at work?", file: "question2.json" },
    { title: "Question 3", name: "How you solved a challenge in a previous role?", file: "question3.json" },
    { title: "Question 4", name: "Edge Functions, Serverless Functions, or Edge Middleware with Vercel", file: "question4.json" },
    { title: "Question 5", name: "Troubleshooting a build issue that you've not seen before.", file: "question5.json" },
    { title: "Question 6", name: "Follow-up reply to the frustrated customer.", file: "question6.json" },
    { title: "Question 7", name: "Email to redirect from the /blog path to https://example.com", file: "question7.json" },
    { title: "Question 8", name: "Request for project not to be indexed by search engines", file: "question8.json" },
    { title: "Question 9", name: "Most common problems which customers ask Vercel for help with", file: "question9.json" },
    { title: "Question 10", name: "How could familiarisation exercise be improved?", file: "question10.json" },
  ];


  const options : any = [
    { value: "select_all", label: "Select All" },
    ...questions.map((q) => ({ value: q.title, label: q.title }))
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [selectedOptions, setSelectedOptions] = useState(options.slice(1));

  useEffect(() => {
    if (selectedOptions.length === 0 || selectedOptions[0].value === "select_all") {
      setSelectedOptions(options.slice(1));
    }
  }, []);
  
  const handleSelectChange = (selected : any) => { 
    if (selected && selected.find((option: any) => option.value === "select_all")) {
      setSelectedOptions(options.slice(1)); // Select all options except "Select All"
    } else {
      setSelectedOptions(selected || []);
    }
  };
 
  const handleExplore = async (file : any) => {
    try {
      const response = await fetch(`/answers/${file}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setModalContent(data.answer);
      setModalIsOpen(true);
    } catch (error) {
      console.error("Error fetching the answer:", error);
    }
  };
  


  const filteredQuestions = selectedOptions.length
    ? questions.filter((q) =>
        selectedOptions.some((option : any) => option.value === q.title)
      )
    : questions;

     const mainClass = modalIsOpen ? "flex min-h-screen overflow-x-hidden flex-col items-center justify-center bg-black text-white myoverlay"
     :"flex min-h-screen overflow-x-hidden flex-col items-center justify-center bg-black text-white";
  return (
    <main className= {mainClass}>

      <h1 className="text-4xl font-bold mb-8">
       
          Shashank Ambekar's Vercel Exercise 2.0
       
      </h1>
      <Select
        isMulti
        name="questions"
        options={options}
        className="basic-multi-select text-black w-full max-w-lg mb-8"
        classNamePrefix="select"
        onChange={handleSelectChange}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredQuestions.map((question, index) => (
          <Card key={index} title={question.title} name={question.name}  
          onExplore={() => handleExplore(question.file)}  // Pass the question content to the modal 
          />
        ))}
      </div>
      <AnswerModal isOpen={modalIsOpen} content={modalContent}  onRequestClose={() => setModalIsOpen(false)}/>

      <footer className="w-full fixed bottom-0 left-0 flex flex-col items-center justify-center py-4 px-8 bg-gray-800 text-white">
        <p>Developed by - Shashank Ambekar</p>
        <div className="flex mt-2 space-x-4">
          <a href="tel:+91-7757826306" className="text-blue-500 hover:underline">
            Phone: +91-7757826306
          </a>
          <a
            href="https://www.linkedin.com/in/shashank-ambekar-6ab946b2/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ashashank/sa-vercel"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Project
          </a>
        </div>
      </footer>
    </main>
  );
}
