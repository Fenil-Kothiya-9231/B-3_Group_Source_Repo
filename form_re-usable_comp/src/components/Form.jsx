import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [interests, setInterests] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, gender, interests };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>

      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label>
        Interests:
        <div>
          <label>
            <input
              type="checkbox"
              value="sports"
              checked={interests.includes("sports")}
              onChange={(e) =>
                setInterests((prevInterests) =>
                  e.target.checked
                    ? [...prevInterests, "sports"]
                    : prevInterests.filter((interest) => interest !== "sports")
                )
              }
            />
            Sports
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="music"
              checked={interests.includes("music")}
              onChange={(e) =>
                setInterests((prevInterests) =>
                  e.target.checked
                    ? [...prevInterests, "music"]
                    : prevInterests.filter((interest) => interest !== "music")
                )
              }
            />
            Music
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="reading"
              checked={interests.includes("reading")}
              onChange={(e) =>
                setInterests((prevInterests) =>
                  e.target.checked
                    ? [...prevInterests, "reading"]
                    : prevInterests.filter((interest) => interest !== "reading")
                )
              }
            />
            Reading
          </label>
        </div>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
