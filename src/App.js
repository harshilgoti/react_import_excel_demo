import "./App.css";
import readXlsxFile from "read-excel-file";

function App() {
  const handleChange = (e) => {
    readXlsxFile(e.target.files[0])
      .then((rows) => {
        console.log("rows", rows);
        const update = rows.slice(1).map((item) => {
          return item.reduce((acc, cur, i) => {
            acc = Object.assign(acc, { [rows[0][i]]: cur });
            return acc;
          }, {});
        });
        console.log("update", update);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="App">
      <h3>Open console and see output</h3>
      <input type="file" id="input" onChange={handleChange} />
      <h4>Athor : HARSHIL GOTI </h4>
    </div>
  );
}

export default App;
