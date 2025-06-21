import type { NextPage } from "next";

const GyngerSolution: NextPage = () => {
  const Card: React.FC<{
    title: string;
    imageSrc: string;
    items: string[];
    linkText: string;
    onLearnMore?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  }> = ({ title, imageSrc, items, linkText, onLearnMore }) => {
    return (
      <div className="bg-teal-900 p-6 rounded-xl text-left shadow-md hover:shadow-lg transition w-full">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-full w-20 h-20 mb-4"
        />
        <h3 className="text-xl font-semibold text-teal-100 mb-4">{title}</h3>
        <ul className="text-teal-200 space-y-2 mb-4">
          {items.map((item, index) => (
            <li key={index} className="text-sm leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
        <a
          href="#"
          onClick={onLearnMore}
          className="text-teal-300 hover:underline text-sm font-medium"
        >
          {linkText}
        </a>
      </div>
    );
  };

  const handleLearnMore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log("Learn more clicked");
  };

  return (
    <div className="min-h-screen bg-white px-4 py-16">
      <div className="bg-teal-950 p-8 sm:p-10 lg:p-14 rounded-2xl max-w-7xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-10 gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Find your solution
          </h1>
          <a
            href="#"
            className="bg-teal-100 text-teal-900 px-6 py-3 rounded-lg text-sm font-medium hover:bg-teal-200"
          >
            Talk to us
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            title="BUYERS"
            imageSrc="https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e311ff0c2b4cfbe4669670_avatar-1.avif"
            items={[
              "Smooth out your payables",
              "Conserve your cash",
              "Grow your business",
            ]}
            linkText="Learn more →"
            onLearnMore={handleLearnMore}
          />
          <Card
            title="SELLERS"
            imageSrc="https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e311ff104374fc6b16acf9_avatar-2.avif"
            items={[
              "Offer flexible payments",
              "Pull cash forward",
              "Optimize financial workflows",
            ]}
            linkText="Learn more →"
            onLearnMore={handleLearnMore}
          />
          <Card
            title="CFOs"
            imageSrc="https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e311ff36ed048ad7b8c94a_avatar-3.avif"
            items={[
              "Shorten DSO",
              "Unlock working capital",
              "Master cash flow conversion",
            ]}
            linkText="Learn more →"
            onLearnMore={handleLearnMore}
          />
          <Card
            title="CROs"
            imageSrc="https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e311ff26a7ea5ef01fd6e6_avatar-4.avif"
            items={[
              "Close deals faster",
              "Streamline renewals",
              "Differentiate your offers",
            ]}
            linkText="Learn more →"
            onLearnMore={handleLearnMore}
          />
        </div>
      </div>
    </div>
  );
};

export default GyngerSolution;
