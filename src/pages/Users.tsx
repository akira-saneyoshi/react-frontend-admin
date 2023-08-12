import Layout from "../_components/Layout";

const Users = () => {
  return (
    <Layout>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1,001</td>
            <td>random</td>
            <td>data</td>
            <td>placeholder</td>
            <td>text</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default Users;