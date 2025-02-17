import SelfieOne from "@/assets/images/selfie (1).jpg";
import SelfieTwo from "@/assets/images/selfie (2).jpg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

const StandOut = () => {
  const [showQRModal, setShowQRModal] = useState(false);

  return (
    <div className="py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Text Section */}
        <div className="mb-12 sm:mb-20">
          <h1 className="mb-3 text-base sm:text-lg tracking-wider text-[rgb(52,141,227)]">
            Benefits
          </h1>
          <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">
            Share Selfies
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-8">
            Share daily selfies, unifies and remain connected to the world
          </p>
          <Button
            className="bg-[#3081cf] w-full sm:w-[192px] hover:bg-[#3081cf]/90 text-primary-foreground"
            size="lg"
            onClick={() => setShowQRModal(true)}
          >
            Download <span>↓</span>
          </Button>
        </div>

        {/* Images Grid */}
        <div className="relative sm:h-[600px] w-full">
          <div className="flex flex-col sm:block gap-4 space-y-10 items-center justify-center">
            {/* Left Image */}
            <div className="sm:absolute sm:left-0 sm:bottom-0 w-[92%] sm:w-[45%]">
              <div className="rounded-[20px] sm:rounded-[32px] overflow-hidden">
                <Image
                  src={SelfieOne}
                  alt="Person using phone"
                  className="w-full h-[250px] sm:h-[500px] object-cover"
                />
              </div>
            </div>

            {/* Right Image */}
            <div className="sm:absolute sm:right-0 sm:top-0 w-[92%] sm:w-[45%]">
              <div className="rounded-[20px] sm:rounded-[32px] overflow-hidden">
                <Image
                  src={SelfieTwo}
                  alt="Person using laptop"
                  className="w-full h-[250px] sm:h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* QR Code Modal */}
        <Dialog open={showQRModal} onOpenChange={setShowQRModal}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-center">
                Scan QR Code to Download
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center justify-center p-6">
              <div className="w-64 h-64 flex items-center justify-center">
                <QRCodeSVG
                  value="https://your-app-download-link.com" // Replace with your actual app download link
                  size={256}
                  level="H"
                  includeMargin
                  className="rounded-lg"
                />
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Scan this QR code with your mobile device to download our app
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default StandOut;
