//dynamic "not found" page with input city and state.
const NotFound = ({ formattedCity, formattedState }: any) => {
  return (
    <div className="p-8 self-center text-4xl font-bold flex flex-col items-center text-paprika-salmon">
      <div>
        I&apos;m sorry! We couldn&apos;t find any restaurants in {formattedCity}
        , {formattedState}
      </div>
    </div>
  );
};

export default NotFound;
