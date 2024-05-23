const { Firestore } = require("@google-cloud/firestore");

async function histories() {
  const firestore = new Firestore();

  const collection = firestore.collection("predictions");
  const result = await collection.get();
  const finalRes = [];

  result.forEach((prediction) => {
    const singleData = {
      id: prediction.id,
      history: prediction.data(),
    };
    finalRes.push(singleData);
  });
  return finalRes;
}

module.exports = histories;
