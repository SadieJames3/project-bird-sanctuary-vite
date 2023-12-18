import { useState } from "react";
import './App.css';
import birdData from "./data/birds"
import Cards from "./components/Cards";

const Adopters = () => {
  const [newA, setNewA] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zip: "",
  });

  const [users, setUsers] = useState([]);

  function handleChange(event) {
    console.log(event.target.id, event.target.value);
    setNewA({ ...newA, [event.target.id]: event.target.value });
  }

  function handleCheckboxChange(event) {
    setNewA({ ...newA, [event.target.id]: event.target.checked });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUsers([newA, ...users]);
    window.alert(`You have successfully adopted birds. Thank you!`);
    reset();
  }

  function reset() {
    setNewA({
      firstName: "",
      lastName: "",
      email: "",
      zip: "",
    });
  };
};



function App() {
  const [birds, setBirds] = useState(birdData);
  return (
    <div className="wrapper">
      <div className="container">
        <header>
          <h1>Bird Sanctuary</h1>
          <h2>Donate to adopt a bird</h2>
        </header>
        <main>
          <aside className="Cart">Cart</aside>
          <p><h4>Total: $</h4></p>
          <p><h5>Discount: %</h5></p>


          <aside className="Checkout">Checkout</aside>
          <h4>TEST</h4>


          <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">
           First name:
           <input
            onChange={handleChange}
            value={newUser.firstName}
            type="text"
            id="firstName"
            name="firstName"
          />
        </label>

        <label htmlFor="lastName">
          Last name:
          <input
            onChange={handleChange}
            value={newUser.lastName}
            type="text"
            id="lastName"
            name="lastName"
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            onChange={handleChange}
            value={newUser.email}
            type="email"
            id="email"
            name="email"
          />
        </label>

        <label htmlFor="zip">
          Zip code:
          <input
            onChange={handleChange}
            value={newUser.zip}
            type="text"
            id="zip"
            name="zip"
          />
        </label>
        <button>Submit</button>
      </form>









          <div className="bird-profile">
            <ul>
              {birds.map((bird) =>
                <li key={bird.id}>
                {bird.name} <br />
                {bird.amount} <br />
                <img
                src={`./data/${bird.img}`} 
                alt={`Photo of ${bird.name}`}
                // width={100} height={100} 
                /><br />
                <a href={bird.description}>Learn More...</a><br />
                <button className="adopt">Adopt Me!</button>

              </li>)};
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;



// return (
//   <div className="wrapper">
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="firstName">
//           First name:
//           <input
//             onChange={handleChange}
//             value={newUser.firstName}
//             type="text"
//             id="firstName"
//             name="firstName"
//           />
//         </label>
//         <label htmlFor="lastName">
//           Last name:
//           <input
//             onChange={handleChange}
//             value={newUser.lastName}
//             type="text"
//             id="lastName"
//             name="lastName"
//           />
//         </label>
//         <label htmlFor="zip">
//           Zip code:
//           <input
//             onChange={handleChange}
//             value={newUser.zip}
//             type="text"
//             id="zip"
//             name="zip"
//           />
//         </label>
//         <label htmlFor="email">
//           Email:
//           <input
//             onChange={handleChange}
//             value={newUser.email}
//             type="email"
//             id="email"
//             name="email"
//           />
//         </label>
//         <label htmlFor="password">
//           Password
//           <input
//             onChange={handleChange}
//             value={newUser.password}
//             type="password"
//             id="password"
//             name="password"
//           />
//         </label>
//         <label htmlFor="pets">
//           Pets
//           <select
//             onChange={handleChange}
//             value={newUser.pets}
//             id="pets"
//             name="pets"
//           >
//             <option value=""></option>
//             <option value="yes">yes</option>
//             <option value="no">no</option>
//           </select>
//         </label>
//         <label htmlFor="dev">
//           Developer
//           <input
//             checked={newUser.dev}
//             onChange={handleCheckboxChange}
//             type="checkbox"
//             id="dev"
//             name="dev"
//           />
//         </label>
//         <button>Submit</button>
//       </form>
//     </div>
//     <Aside users={users} />
//   </div>
// );
// };