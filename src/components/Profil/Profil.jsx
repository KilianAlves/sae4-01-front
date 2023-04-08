import React from "react";
import {useEffect, useState} from "react";
import Loading from "../Loading.jsx";

export default function Profil() {
  const [veterinairesList, setVeterinairesList] = useState();


  return <div>{veterinairesList}</div>

}
