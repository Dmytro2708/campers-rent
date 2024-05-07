const dfe = {
  _id: "1",
  name: "Road Bear C 23-25",
  price: 10000,
 avatar: "https://ftp.goit.study/img/campers-test-task/1-1.webp",
}



export const App = () => {
  return (
    <div>
    <h1>Campers-rent</h1>
<img src={dfe.avatar} alt={dfe.name} width="200" />
    </div>
  );
};
