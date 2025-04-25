
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface PillarCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const PillarCard: React.FC<PillarCardProps> = ({ title, description, icon, link }) => {
  return (
    <Card className="pillar-card hover:border-teal/30 group">
      <CardHeader>
        <div className="w-16 h-16 mb-4 text-4xl flex items-center justify-center text-teal bg-teal/10 rounded-full">
          {icon}
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Link 
          to={link} 
          className="text-teal font-medium hover:text-teal-dark group-hover:underline transition-all"
        >
          Learn more →
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PillarCard;
