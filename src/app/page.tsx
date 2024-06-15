import React from "react";
import Card from "./Card";
/* eslint-disable */
export default function Page() {
  const questions = [
    { title: "Question 1", name: "5 most favourite and 5 least favourite support tasks", link: "https://docs.google.com/document/d/1RwyfDqnfLgWRoNaz7Iv32huraIVSO6J4co3stowHpC8/edit?usp=sharing" },
    { title: "Question 2", name: "What do you want to learn or do more of at work?", link: "https://docs.google.com/document/d/1SLSxQgTZXRcIWbQtD65m4czr_VImkC5IPc34WA1d9w0/edit?usp=sharing" },
    { title: "Question 3", name: "How you solved a challenge in a previous role?", link: "https://docs.google.com/document/d/1nvJQm5MyP_rdBQCVgGJa6GBnZM2yaBse5AkqGmVNb_w/edit?usp=sharing" },
    { title: "Question 4", name: "Edge Functions, Serverless Functions, or Edge Middleware with Vercel", link: "https://docs.google.com/document/d/1qa4N3CfLWjhp1EcelgYiB4QY1frCS0nzyfKGXtsEC14/edit?usp=sharing" },
    { title: "Question 5", name: "Troubleshooting a build issue that you've not seen before.", link: "https://docs.google.com/document/d/1J6If1TgMsj2XLKfMZ5LZW375fIDX1x7JSn5I6SZ5d7w/edit?usp=sharing" },
    { title: "Question 6", name: "Follow-up reply to the frustrated customer.", link: "https://docs.google.com/document/d/1PbmoQ_9c6yq6DM2NF4h-fIi5o0iOijJHxQ1DJWipZSo/edit?usp=sharing" },
    { title: "Question 7", name: "Email to redirect from the /blog path to https://example.com", link: "https://docs.google.com/document/d/1xicZfY3fhQePewOMJme7yEleH2YGrXBQZr6KLQ62bNY/edit?usp=sharing" },
    { title: "Question 8", name: "Request for project not to be indexed by search engines", link: "https://docs.google.com/document/d/1ag-djUp5ETliEwRvLDDprUF91FBseM5RnL1G0u7T4f0/edit?usp=sharing" },
    { title: "Question 9", name: "Most common problems which customers ask Vercel for help with", link: "https://docs.google.com/document/d/1VP6wq9Fy9JPVltIKT1hzUWyJcRRrBI1dHVLkZ8ojQkI/edit?usp=sharing" },
    { title: "Question 10", name: "How could familiarisation exercise be improved?", link: "https://docs.google.com/document/d/16AjCcwawBUReHgm0GLQeSUzU5ewC2bfCmTEcXP8wd04/edit?usp=sharing" },

  ]; 

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-8">
    <a 
          href="https://docs.google.com/document/d/18f_PBlVroWoZJovmbmboISj3_veA39P4Weikg323Few/edit?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Shashank Ambekar's Vercel Exercise (Consolidated document)
        </a>
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {questions.map((question, index) => (
        <Card key={index} title={question.title} name={question.name} link={question.link} />
      ))}
    </div>
    <footer className="w-full absolute bottom-0 flex flex-col items-center justify-center py-4 px-8 bg-gray-800 text-white">
        <p>Developed by - Shashank Ambekar</p>
        <div className="flex mt-2 space-x-4">
          <a href="tel:+91-7757826306" className="text-blue-500 hover:underline">
            Phone: +91-7757826306
          </a>
          <a href="https://www.linkedin.com/in/shashank-ambekar-6ab946b2/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/ashashank/sa-vercel" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            GitHub Project
          </a>
        </div>
      </footer>
  </main>
  );

}

