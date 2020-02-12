import { NextApiRequest, NextApiResponse } from "next";
import firebase from "../../helpers/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const db = firebase.firestore();
  const items: DbItem[] = [];
  try {
    const snapshot = await db.collection("items").get();
    snapshot.docs.forEach(doc => {
      items.push({
        id: doc.id,
        data: <Item>doc.data()
      });
    });
    res.status(200).json(items);
  } catch (err) {
    res.status(404).json({
      error: err,
      items: []
    });
  }
};
