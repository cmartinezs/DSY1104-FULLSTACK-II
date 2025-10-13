const DynamicTHead = ({ fields, className = "" }) => {
  return (
    <thead className={className}>
      <tr>
        {fields.map((field) => (
          <th key={field}>{field}</th>
        ))}
      </tr>
    </thead>
  );
};

export default DynamicTHead;