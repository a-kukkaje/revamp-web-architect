import SSVK from '../../assets/SSVK_Chokkady.jpg';
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader = ({ 
  title, 
  subtitle, 
  backgroundImage = "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86" 
}: PageHeaderProps) => {
  return (
    <div 
      className="relative py-16 md:py-24 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${SSVK})`,
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-3xl mx-auto">{subtitle}</p>
        )}
      </div>
    </div>
  )
}

export default PageHeader
