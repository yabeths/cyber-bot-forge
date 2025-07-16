
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { NicheCategory } from '@/data/chatbotNiches';
import NicheCard from './NicheCard';

interface CategorySectionProps {
  category: NicheCategory;
  onGetBot: (nicheId: string) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, onGetBot }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayNiches = isExpanded ? category.niches : category.niches.slice(0, 3);

  return (
    <div className="mb-12">
      <Card className="mb-6 bg-gradient-to-r from-blue-50 to-white border-blue-200">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="text-4xl">{category.icon}</div>
            <div>
              <CardTitle className="text-2xl text-gray-900">{category.name}</CardTitle>
              <CardDescription className="text-gray-600 text-lg mt-1">
                {category.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-4">
        {displayNiches.map((niche) => (
          <NicheCard 
            key={niche.id}
            niche={niche}
            onGetBot={onGetBot}
          />
        ))}
      </div>

      {category.niches.length > 3 && (
        <div className="text-center">
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="border-blue-200 text-blue-600 hover:bg-blue-50"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Show More ({category.niches.length - 3} more) <ChevronDown className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default CategorySection;
