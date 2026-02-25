import React from "react";

const Conduct = ({ candidateData }) => {
  console.log(candidateData);
  return (
    <>
      <section className="container mx-auto   px-20   ">
        <h1 className="text-white font-bold text-2xl md:text-left  ">
          Professional Conduct & Standing
        </h1>
        {candidateData.map((candidate) => {
          return (
            <div
              className="flex md:flex-row flex-col md:gap-20  gap-10 items-center text-white mt-10"
              key={candidate.id}
            >
              <div className="bg-green-300 text-green-800 flex-1 p-5 rounded-2xl shadow">
                <p>Standing</p>
                <h1 className="text-xl font-bold my-2">{candidate.standing}</h1>
                <p>No disciplinary actions on records</p>
              </div>
              <div className="bg-green-300 text-green-800 flex-1 p-5 rounded-2xl shadow">
                <p>Formal Warnings</p>
                <h1 className="text-xl font-bold my-2">{candidate.warnings}</h1>
                <p>Clean Professional Record</p>
              </div>
              <div className="bg-purple-300 text-purple-800 flex-1 p-5 rounded-2xl shadow">
                <p>Completion Status</p>
                <h1 className="text-xl font-bold my-2">
                  {candidate.completionStatus}
                </h1>
                <p>Successfully completed the program</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Conduct;
