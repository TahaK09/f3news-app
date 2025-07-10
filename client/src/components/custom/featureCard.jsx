import { CheckCircle } from "lucide-react";

const FeatureCard = ({ title, description }) => (
  <div className="bg-white rounde shadow-md p-6 hover:shadow-lg transition-all">
    <div className="flex items-center gap-3 mb-2">
      <CheckCircle className="text-green-500" />
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default FeatureCard;
