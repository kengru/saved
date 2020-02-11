import { NextApiRequest, NextApiResponse } from "next";
import firebase from "../../helpers/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const db = firebase.firestore();
  try {
    const snapshot = await db.collection("items").get();
    snapshot.forEach(doc => {
      console.log(doc.data());
    })
  } catch (err) {
    console.error("Can't retrieve items.");
  }
  res.status(200).json({
    status: "works"
  });
};
