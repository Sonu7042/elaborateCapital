
import React from "react";

const KYCFATCA: React.FC = () => {
  return (
    <div className="w-full bg-white py-8 px-4 lg:px-12">
      <div className="max-w-6xl mx-auto shadow-lg rounded-2xl overflow-hidden border border-gray-200">
        
        {/* Heading */}
        <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800">
            Complete Your KYC
          </h2>
          {/* <p className="text-sm text-gray-500 mt-1">
            Please fill the required details to complete your KYC process.
          </p> */}
        </div>

        {/* Iframe */}
        <iframe
          src="https://www.investwell.in/updation/parameter/par_kyc.jsp?hbg=cccccc&fs=12&bt=222222&ht=111111"
          width="100%"
          height="600"
          style={{ border: "none" }}
          scrolling="auto"
          title="KYC Form"
          className="w-full"
        ></iframe>

      </div>
    </div>
  );
};

export default KYCFATCA;