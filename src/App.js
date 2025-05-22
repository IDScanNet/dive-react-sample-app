import React, { Component } from "react";
import IDVC from '@idscan/idvc2'

class App extends Component {
      
    constructor() {
      super();
    }

    componentDidMount () {
   let idvc = new IDVC({
        el: "videoCapturingEl",
        licenseKey: "eyJwZGY0MTdrZXkiOiJTNTVLS0dOaENXYkhDSFlXanQ5R3o3dHF1TWZobkcwY1N1Y0YvbHJodi9abnBMdElES3dFRE9SUlptRVBnamZsY0t3dzBCdWdtMTNyT0RaakxYNkxCTkVkdVF3YUYvMnFjM3c4NEw5TGlqaXl2YXdRdmVlWmlMbkdFUW8xbndTb1Z5cGE3Z2NJaGFxMzdwRVNERk9KWTE4T0t6VHI4a3l1Mk5YV2w3NVA2eG89IiwiaW1hZ2VQcm9jZXNzaW5nS2V5IjoiUEdOTm1tNWFnUzFHZmZIbFVNMU1GanpHVFJyZG1Hd3dNRXMzbjFqT1M2RUVES3VYOFBweDFWZkc5MjQyZ0wyWGxNelhWTzBldEJYSGlCSGx5ZFEvaDZ3cEZCS1FHbkxSR2xYRWpWMXlnUnErL2g2c2ZGK3hxMFRCSFYzRm9QSnF2aVhvd0ozOXBHNU9DVTNVVUdDMmpjU3FIeUJzdDQ0UVlmQWJhVWRrcThFPSIsInRyYWNrU3RyaW5nUGFyc2VyS2V5IjoiY0IzSEJiSTluYktva0xqNG4xejl6aUtlTEJrQnVpUlpQeVJ6bFhNekpsTVAvS3EySjdEMmtmS2t6SGtyL3ExelZOQVZVbHhGMndPQlhTYVJMaUxkeVRWbHQ5bEt1RjQxRFRtMUtyNlM4MlFjdGo2QU5KZVVXcnRlNStKL1R2NmJ5bzlka1gzblpvUDc1TnNXb1hKbGdBM0dpWUNjMk83N2EwdjR2Y2tFWERZPSIsImNvbW1vbkxpY2Vuc2VLZXkiOiJyRDJPbWdKaFBZWjA0Z0prckVldE1iQ2xQN3o0VGxTL1I4RHc1UVpWUE93WjRva0JkS09QZ3Ewb29Mend2ekI3c0xIUUlkR2hGd252bVpuZWdOYmhEYzNhaUlON1RMNWJrNVA5YUN5cU91bml4MGw4Wm9HRDViSEltQ1hZRE82ZWxUamN0RVBCcjdpVmZMQ2lsbGExRjNnYVJ1ZnFQYlFGdzhKSmtSdk5IN2M9In0=",
        networkUrl: "",
        chunkPublicPath: "",
        resizeUploadedImage: 1200,
        fixFrontOrientAfterUpload: false,
        autoContinue: true,
        isShowDocumentTypeSelect: false,
        useCDN: true,
        isShowGuidelinesButton: false,
        isSubmitMetaData: false,
        useHeic: false,
        showSubmitBtn: true,
        hideDocumentTitle: false,
        language: "en",
        realFaceMode: "all",
        modalPosition: "top",
        processingImageFormat: "jpeg",
        documentTypes: [
          {
            type: "IC",
            steps: [
              { type: "front", name: "Document Front" },
              { type: "pdf", name: "Document Back" },
              { type: "face", name: "Face" },
            ],
          },
          {
            type: "DL",
            steps: [
              { type: "front", name: "Document Front" },
              { type: "pdf", name: "Document Back" },
              { type: "face", name: "Face" },
            ],
          },
          {
            type: "Passport",
            steps: [
              { type: "mrz", name: "Passport Front" },
              { type: "face", name: "Face" },
            ],
          },
          {
            type: "PassportCard",
            steps: [
              { type: "front", name: "Passport Card Front" },
              { type: "mrz", name: "Passport Card Back" },
              { type: "face", name: "Face" },
            ],
          },
          {
            type: "InternationalId",
            steps: [
              { type: "front", name: "International ID Front" },
              { type: "mrz", name: "International ID Back" },
              { type: "face", name: "Face" },
            ],
          },
        ],
      onChange(data) {
        console.log("on change", data);
      },
      onCameraError(data) {
        console.log("camera error", data);
      },
      onReset(data) {
        console.log("on reset", data);
      },
      onRetakeHook(data) {
        console.log("retake hook", data);
      },
      clickGuidlines() {
        console.log("click Guidelines");
      },
      submit(data) {
        idvc.showSpinner(true);
        let frontStep, pdfStep, faceStep, mrzStep, photoStep, barcodeStep;
        let frontImage, backImage, faceImage, photoImage, barcodeImage;
        let captureMethod;
        let rawTrackString;

        switch (data.documentType) {
          // Drivers License and Identification Card
          case 1:
            frontStep = data.steps.find((item) => item.type === "front");
            pdfStep = data.steps.find((item) => item.type === "pdf");
            faceStep = data.steps.find((item) => item.type === "face");

            frontImage = frontStep.img.split(/:image\/(jpeg|png);base64,/)[2];
            backImage = pdfStep.img.split(/:image\/(jpeg|png);base64,/)[2];
            faceImage = faceStep.img.split(/:image\/(jpeg|png);base64,/)[2];

            rawTrackString =
              pdfStep && pdfStep.trackString ? pdfStep.trackString : "";

            captureMethod =
              JSON.stringify(+frontStep.isAuto) +
              JSON.stringify(+pdfStep.isAuto) +
              JSON.stringify(+faceStep.isAuto);

            break;
          // US and International Passports
          case 2:
            mrzStep = data.steps.find((item) => item.type === "mrz");
            faceStep = data.steps.find((item) => item.type === "face");

            frontImage = mrzStep.img.split(/:image\/(jpeg|png);base64,/)[2];
            faceImage = faceStep.img.split(/:image\/(jpeg|png);base64,/)[2];

            rawTrackString = mrzStep && mrzStep.mrzText ? mrzStep.mrzText : "";

            captureMethod =
              JSON.stringify(+mrzStep.isAuto) +
              JSON.stringify(+faceStep.isAuto);

            break;
          default:
        }

        const trackStringArray = rawTrackString.split(".");
        let trackString = trackStringArray[0];
        let barcodeParams = trackStringArray[1];
  
    
        let request = {
          frontImageBase64: frontImage,
          backOrSecondImageBase64: backImage,
          faceImageBase64: faceImage,
          documentType: data.documentType,
          trackString:{
            data:  trackString,
            barcodeParams: barcodeParams
          },
          overriddenSettings: {
            isOCREnabled: true,
            isBackOrSecondImageProcessingEnabled: true,
            isFaceMatchEnabled: true
          },
          metadata: {
            captureMethod: captureMethod
          }
        };

        fetch("https://dive.idscan.net/api/v4/verify", {
          method: "POST",
          headers: {
            Authorization: "Bearer sk_XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(request),
        })
          .then((response) => response.json())
          .then((data) => {
            idvc.showSpinner(false);
            console.log(data);
          })
          .catch((err) => {
            idvc.showSpinner(false);
            console.log(err);
          });
      },
    });     
    }
    
    render () {        
        return (
            <div>
                <h3>DIVE Demo Application</h3>
                <div id="videoCapturingEl"></div>
            </div>
        );
    }
}

export default App;
