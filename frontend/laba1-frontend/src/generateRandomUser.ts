import {USER_DATA} from "./data/userData.ts";

const GenerateRandomUser = () => {
    const index = Math.floor(Math.random() * 10) + 1;
    return USER_DATA[index]
};

export default GenerateRandomUser;