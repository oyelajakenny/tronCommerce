import React from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

interface Props {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const data: Props[] = [
  {
    title: "Visit Us",
    subtitle: "New orlean, USA",
    icon: (
      <MapPin className="text-gray-600 group-hover:text-darkColor transition-colors " />
    ),
  },
  {
    title: "Call Us",
    subtitle: "+1 234 567 890",
    icon: (
      <Phone className="text-gray-600 group-hover:text-darkColor transition-colors " />
    ),
  },
  {
    title: "Working Hours",
    subtitle: "Mon - Fri 8:00 - 17:00",
    icon: (
      <Clock className="text-gray-600 group-hover:text-darkColor transition-colors " />
    ),
  },
  {
    title: "Email Us",
    subtitle: "oyelajakenny@gmail.com",
    icon: (
      <Mail className="text-gray-600 group-hover:text-darkColor transition-colors " />
    ),
  },
];
const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4  gap-8 border-b">
      {data?.map((item, idex) => (
        <ContactItem
          key={idex}
          icon={item?.icon}
          title={item?.title}
          subtitle={item?.subtitle}
        />
      ))}
    </div>
  );
};

const ContactItem = ({ icon, title, subtitle }: Props) => {
    return(
        <div className="flex items-center gap-3 group hover:bg-gray-50 p-4 transition-colors">
            {icon}
            <div>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-darkColor transition-colors">{title}</h4>
                <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-900 transition-colors">{subtitle}</p>
            </div>
        </div>
    )
}
export default FooterTop;
