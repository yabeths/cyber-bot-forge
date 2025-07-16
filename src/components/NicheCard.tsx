
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChatbotNiche } from '@/data/chatbotNiches';
import { CheckCircle, MessageSquare, Zap, Users } from 'lucide-react';

interface NicheCardProps {
  niche: ChatbotNiche;
  onGetBot: (nicheId: string) => void;
}

const NicheCard: React.FC<NicheCardProps> = ({ niche, onGetBot }) => {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white border-gray-200">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-3 mb-3">
          <div className="text-3xl">{niche.icon}</div>
          <div>
            <CardTitle className="text-xl text-gray-900">{niche.name}</CardTitle>
            <CardDescription className="text-gray-600 mt-1">{niche.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Key Benefits */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
            <Zap className="h-4 w-4 mr-1 text-blue-600" />
            Key Benefits
          </h4>
          <div className="flex flex-wrap gap-1">
            {niche.keyBenefits.map((benefit, index) => (
              <Badge key={index} variant="secondary" className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100">
                {benefit}
              </Badge>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
            <Users className="h-4 w-4 mr-1 text-blue-600" />
            Use Cases
          </h4>
          <ul className="space-y-1">
            {niche.useCases.slice(0, 3).map((useCase, index) => (
              <li key={index} className="flex items-start text-sm text-gray-600">
                <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                {useCase}
              </li>
            ))}
          </ul>
        </div>

        {/* Example Interaction */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
            <MessageSquare className="h-4 w-4 mr-1 text-blue-600" />
            Example Interaction
          </h4>
          <div className="bg-gray-50 p-3 rounded-lg space-y-2">
            {niche.exampleInteractions.map((interaction, index) => (
              <div key={index} className="text-sm">
                <div className={`${interaction.startsWith('User:') ? 'text-gray-700' : 'text-blue-600 font-medium'}`}>
                  {interaction}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          onClick={() => onGetBot(niche.id)}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
        >
          {niche.ctaText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default NicheCard;
