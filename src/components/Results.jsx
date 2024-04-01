import Card from "./Card";
import SearchBox from "./SearchBox";

const Results = ({ results }) => {
  return (
    <div>
      <SearchBox />
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-8xl mx-auto py-4">
        {results.map((result) => (
          <Card key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
};

export default Results;
