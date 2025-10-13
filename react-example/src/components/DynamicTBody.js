const DynamicTBody = ({ data, fields }) => {
  return (
    <tbody>
      {data.map((item) => {
        return (
          <tr key={item.id}>
            {fields.map((field) => (
              <td key={field}>{item[field]}</td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};

export default DynamicTBody;