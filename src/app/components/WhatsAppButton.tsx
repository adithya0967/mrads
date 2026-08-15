import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919686544644?text=Hi%2C%20I%27m%20interested%20in%20advertising%20with%20Mr.%20Ads.%20Please%20share%20available%20locations%2C%20pricing%2C%20and%20current%20slot%20availability."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[200] flex items-center gap-2.5 px-4 py-3 bg-[#25D366] text-white rounded-lg shadow-md hover:bg-[#20ba59] transition-all duration-200"
      aria-label="Chat with Mr. Ads on WhatsApp"
    >
      <Icon name="ChatBubbleLeftRightIcon" size={18} className="text-white" />
      <span className="font-bold text-xs hidden sm:block uppercase tracking-wider">WhatsApp</span>
    </a>
  );
}