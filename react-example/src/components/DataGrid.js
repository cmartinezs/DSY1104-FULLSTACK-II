const DataGrid = (props) => {

    //Como obtengo los nombres de los campos de un json?

  return (
    <div>
      <div>DataGrid Component</div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
            {
                props.data.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    );
                })
            }
        </tbody>
      </table>
    </div>
  );
};

export default DataGrid;
