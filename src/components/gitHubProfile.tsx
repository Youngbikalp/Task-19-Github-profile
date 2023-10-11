import React, { useState, useEffect } from "react";
import { IProfile, IRepo } from "../types/interface";
import ProfileCard from "./profileCard";
import RepositoryList from "./repositoryList";
import "../styles/gitHubProfile.css";

const GitHubProfile: React.FC = () => {
  const [profile, setProfile] = useState<IProfile | null>(null);
  const [input, setInput] = useState<string>("");
  const [repos, setRepos] = useState<IRepo[]>([]);
  const [error, setError] = useState(null);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  console.log(input);

  const handleData = () => {
    if (input.trim() !== "") {
      fetch(`https://api.github.com/users/${input}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Couldn't fetch GitHub profile");
          }
          return response.json();
        })
        .then((data) => setProfile(data))
        .catch((error) => {
          console.error(error);
          setError(error.message);
        });
    }

    if (input.trim() !== "") {
      fetch(`https://api.github.com/users/${input}/repos`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Couldn't fetch GitHub repositories");
          }

          return response.json();
        })
        .then((data) => setRepos(data))
        .catch((error) => {
          console.error(error);
          setError(error.message);
        });
    }
  };
  return (
    <div className="parentBox">
      <div className="header">Git Hub Profile</div>
      <div className="mainContentBox">
        <div className="searchBox">
          <input
            type="text"
            placeholder="Enter GitHub username..."
            onChange={handleInput}
          />
          <button onClick={handleData}>Search</button>
        </div>

        <div className="profileDataContainer">
          <div className="profileInfo">
            {profile !== null ? <ProfileCard profile={profile} /> : null}
            {error && (
              <div>
                <p style={{ color: "red" }}>{error}</p>
              </div>
            )}
          </div>

          <div className="repoDetails">
            {repos !== null ? <RepositoryList repos={repos} /> : null}
            {error && (
              <div>
                <p style={{ color: "red" }}>{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default GitHubProfile;
