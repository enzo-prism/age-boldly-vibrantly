
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface WelcomePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomePopup: React.FC<WelcomePopupProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleReadFullLetter = () => {
    onClose();
    navigate('/welcome-letter');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white border-0 shadow-xl fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <DialogHeader className="text-center pb-4">
          <div className="text-4xl mb-2">💚</div>
          <DialogTitle className="text-2xl font-bold text-gray-800 mb-2">
            Welcome, My Dear Rebel!
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center space-y-4">
          <p className="text-gray-600 leading-relaxed">
            "This is not your grandma's aging club. But it IS a safe, supportive space for women 55-105 who want to age in the best possible way, healthy, confident, unapologetic, joyful and grateful..."
          </p>
          
          <div className="pt-4">
            <Button 
              onClick={handleReadFullLetter}
              className="bg-teal hover:bg-teal-dark text-white px-6 py-2 mb-3 w-full"
            >
              Read Suz's Full Welcome Letter
            </Button>
            
            <Button 
              onClick={onClose}
              variant="ghost"
              className="text-gray-500 hover:text-gray-700 w-full"
            >
              Continue to Site
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomePopup;
